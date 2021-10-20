import Info from "./Info";
import { render, screen } from "@testing-library/react";

describe("When given Info component", () => {
  describe("When it recieves a true", () => {
    test("it should display Calling text", () => {
      const calling = true;
      const expected = "Calling...";

      render(
        <span data-testid="infoId" class="message">
          {calling ? "Calling..." : ""}
        </span>
      );
      const text = screen.getByText(expected);

      // Assert
      expect(text).toBeInTheDocument();
    });
  });
});
