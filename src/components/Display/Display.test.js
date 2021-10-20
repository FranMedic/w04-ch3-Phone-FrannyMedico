import Display from "./Display";
import { render, screen } from "@testing-library/react";

describe("When given Display component", () => {
  describe("When it recieves a number string '12345'", () => {
    test("it should display the number string", () => {
      const numberString = "12345";

      render(
        <Display
          className="number"
          data-testid="displayid"
          numberString={numberString}
        />
      );
      const text = screen.getByTestId("displayid");

      expect(text).toBeInTheDocument(numberString);
    });
  });
});
