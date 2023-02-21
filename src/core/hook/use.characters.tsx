import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as ac from "../reducer/characters.actions.creator";
import { AppDispatch, RootState } from "../../store/store";
import { CharacterApiRepo } from "../services/repository/character.api.repository";
import { CharacterStructure } from "../components/card/model/card";

export function useCharacters(repo: CharacterApiRepo) {
  const characters = useSelector((state: RootState) => state.characters);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const loadChar = async () => {
      try {
        const data = await repo.loadChar();
        dispatch(ac.loadCreator(data));
      } catch (error) {
        console.log((error as Error).message);
      }
    };
    loadChar();
  }, [dispatch, repo]);

  console.log(characters);

  const updateChar = async (char: CharacterStructure) => {
    try {
      const finalChar = await repo.updateChar(char);
      dispatch(ac.updateCreator(finalChar));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    characters,
    updateChar,
  };
}
