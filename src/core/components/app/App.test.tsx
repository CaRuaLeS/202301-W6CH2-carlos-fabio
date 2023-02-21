import { render } from "@testing-library/react";
import { HomePage } from "../home/home";

import App from "./App";

jest.mock("../home/home");

describe("given App component", () => {
  describe("when it is render", () => {
    test("Then it should call home", () => {
      render(<App />);
      expect(HomePage).toHaveBeenCalled();
    });
  });
});
