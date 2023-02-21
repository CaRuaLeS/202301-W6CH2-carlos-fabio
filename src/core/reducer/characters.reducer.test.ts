import { charReducer } from "./characters.reducer";
import { loadCreator, updateCreator } from "./characters.actions.creator";
import { CharacterStructure } from "../components/card/model/card";

const mockChar: CharacterStructure[] = [
  {
    name: "Joffrey",
    family: "Baratheon",
    age: 12,
    isLive: true,
    throneYears: 1,
    sentence: "vais a morir todos",
    picture: "media/joffrey.jpg",
  },
  {
    name: "Juan",
    family: "Baratheon",
    age: 12,
    isLive: true,
    throneYears: 1,
    sentence: "vais a morir todos",
    picture: "media/joffrey.jpg",
  },
];
const mockPayload: CharacterStructure = {
  name: "Juan",
  family: "Baratheon",
  age: 12,
  isLive: true,
  throneYears: 1,
  sentence: "vais a morir todos",
  picture: "media/joffrey.jpg",
};

describe("Given a charReducer function", () => {
  describe("When we load an array of characters' objects", () => {
    test("Then it should load this array", () => {
      let result = charReducer(mockChar, loadCreator(mockChar));
      expect(result).toEqual(mockChar);
    });
  });
  describe("When we update a character's object", () => {
    test("Then it should update a object", () => {
      let result = charReducer(mockChar, updateCreator(mockPayload));
      expect(result).toEqual(mockChar);
    });
  });
  describe("When we check the default case", () => {
    test("Then it should do the default func", () => {
      const initialState = undefined;
      const action = { type: "" };
      let result = charReducer(initialState, action);
      expect(result).toEqual([]);
    });
  });
});
