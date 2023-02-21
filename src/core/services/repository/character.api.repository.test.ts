import { CharacterStructure } from "../../components/card/model/card";
import { CharacterApiRepo } from "./character.api.repository";

const mockChar: CharacterStructure = {
  name: "Joffrey",
  family: "Baratheon",
  age: 12,
  isLive: true,
  throneYears: 1,
  sentence: "vais a morir todos",
  picture: "media/joffrey.jpg",
};

describe("Given a class to build api methods", () => {
  describe("When the class is instaciated", () => {
    let repo: CharacterApiRepo;
    beforeEach(() => {
      repo = new CharacterApiRepo();
    });
    describe("When the function loadChar is called", () => {
      test("when the api response is ok", async () => {
        global.fetch = jest.fn().mockResolvedValue({
          ok: true,
          json: jest
            .fn()
            .mockResolvedValue([]) as unknown as CharacterStructure,
        });
        const result = await repo.loadChar();
        expect(result).toEqual([]);
        console.log(repo.loadChar());
      });
      test("if api response is not ok should throw an error when failed to load tasks", async () => {
        global.fetch = jest.fn().mockResolvedValue({
          ok: false,

          json: jest.fn(),
        });

        await expect(repo.loadChar()).rejects.toThrowError("Error Http: ");
      });
    });
    describe("When the function updateChar is called", () => {
      test("then it should modify the card", async () => {
        global.fetch = jest.fn().mockResolvedValue({
          json: jest.fn().mockResolvedValue(mockChar),
        });

        const result = await repo.updateChar(mockChar);
        expect(result).toEqual(mockChar);
      });
    });
  });
});
