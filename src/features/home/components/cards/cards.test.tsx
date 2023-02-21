import { render, screen } from "@testing-library/react";
import { Card } from "../card/card";
import { CardStructure } from "../card/model/card";

jest.mock("../card/card", () => ({
  Card: () => <div data-testid="mock-card">mock card</div>,
}));

describe("given Cards component", () => {
  describe("when it is render", () => {
    const mockCard: CardStructure = {
      name: "Fabio",
      family: "Snow",
      age: 24,
      isLive: true,
      throneYears: 1,
      sentence: "vais a morir todos",
      picture: "fabio.jpg",
    };

    test("Then it should render the mock card", () => {
      render(<Card character={mockCard} />);
      expect(screen.getByTestId("mock-card").textContent).toBe("mock card");
    });
  });
});