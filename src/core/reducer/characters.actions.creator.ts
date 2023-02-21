import { createAction } from "@reduxjs/toolkit";
import { CharacterStructure } from "../components/card/model/card";
import { charactersActions } from "./characters.actions.type";

export const loadCreator = createAction<CharacterStructure[]>(
  charactersActions.load
);
export const updateCreator = createAction<CharacterStructure>(
  charactersActions.update
);
