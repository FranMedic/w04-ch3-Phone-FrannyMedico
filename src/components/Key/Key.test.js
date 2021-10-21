import Key from "./Key";
import { render, screen } from "@testing-library/react";

describe("When given Key component", () => {
  describe("When it recieves a text '1'", () => {
    test("it should display the text", () => {
      const text = "1";
      const classinfo = "key";
      const keyInfo = "keykey";

      render(
        <Key
          key={keyInfo}
          classinfo={classinfo}
          text={text}
          actionOnClick={() => {}}
        />
      );
      const element = screen.getByRole("button");

      expect(element).toBeInTheDocument(text);
    });
  });
});

export default Key;
