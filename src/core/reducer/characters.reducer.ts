// export function taskReducer(state, action) {
//   return state;
// }

import { createReducer } from "@reduxjs/toolkit";
import { CharacterStructure } from "../components/card/model/card";
import * as ac from "./characters.actions.creator";

const initialState: CharacterStructure[] = [];

export const charReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadCreator, (_state, { payload }) => payload);
  builder.addCase(ac.updateCreator, (state, { payload }) =>
    state.map((item) => (item.name === payload.name ? payload : item))
  );
  builder.addDefaultCase((state) => state);
});
