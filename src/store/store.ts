import { configureStore } from "@reduxjs/toolkit";
import { charReducer } from "../core/reducer/characters.reducer";

export const store = configureStore({
  reducer: {
    characters: charReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
