import { render } from "@testing-library/react";
import { Cards } from "../cards/cards";
import { HomePage } from "./home";

jest.mock("../cards/cards");

describe("given Homepage component", () => {
  describe("when it is render", () => {
    test("Then it should call cards", () => {
      render(<HomePage />);
      expect(Cards).toHaveBeenCalled();
    });
  });
});
