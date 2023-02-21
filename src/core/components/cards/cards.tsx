import { useMemo } from "react";
import { useCharacters } from "../../hook/use.characters";
import { CharacterApiRepo } from "../../services/repository/character.api.repository";
import { Card } from "../card/card";

export function Cards() {
  const repo = useMemo(() => new CharacterApiRepo(), []);
  const { characters } = useCharacters(repo);
  return (
    <div>
      <ul className="characters-list row list-unstyled">
        {characters.map((character) => (
          <li key={1} className="col-md-3">
            <Card character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
}
