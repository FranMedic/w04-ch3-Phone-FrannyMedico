import Key from "./Key";
import { render, screen } from "@testing-library/react";

describe("When given Key component", () => {
  describe("When it recieves a text '1'", () => {
    test("it should display the text", () => {
      const text = "1";

      render(<Key className="key" text={text} actionOnClick={() => {}} />);
      const element = screen.getByRole("button");

      expect(element).toBeInTheDocument(text);
    });
  });
});

export default Key;
