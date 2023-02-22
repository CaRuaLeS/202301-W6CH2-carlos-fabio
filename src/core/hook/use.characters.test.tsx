import { render } from "@testing-library/react";
import { CharacterApiRepo } from "../services/repository/character.api.repository";
import { useCharacters } from "./use.characters";

describe("Given a hook useCharacters", () => {
  const repo: CharacterApiRepo = {
    loadChar: jest.fn(),
    updateChar: jest.fn(),
    url: "",
  };

  function TestComponent() {
    useCharacters(repo);
    return <></>;
  }

  render(<TestComponent></TestComponent>);

  describe("When", () => {
    test("Then ", () => {});
  });
});
