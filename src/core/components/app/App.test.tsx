import { render } from "@testing-library/react";
import { HomePage } from "../../../features/home/page/home";
import App from "./App";

jest.mock("../../../features/home/page/home")

describe("given App component", () => {
  describe("when it is render", () => {
    test("Then it should call home", () => {
      render(<App />);
      expect(HomePage).toHaveBeenCalled();
    });
  });
});