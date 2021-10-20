import Info from "./Info";
import { render, screen } from "@testing-library/react";

describe("When given Info component", () => {
  describe("When it recieves a true", () => {
    test("it should display Calling text", () => {
      const calling = true;
      const expected = "Calling...";

      render(<Info data-testid="infoId" calling={calling} />);
      const text = screen.getByTestId("infoId");

      // Assert
      expect(text).toBeInTheDocument(expected);
    });
  });
});
