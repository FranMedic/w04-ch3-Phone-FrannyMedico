import Keyboard from "./Keyboard";
import { render, screen } from "@testing-library/react";

describe("Given Keyboard component", () => {
  describe("When it recieves a list of 3 numbers'1,2,3'", () => {
    test("then it should render 3 buttons with the text of the numbers", () => {
      const testList = [
        { id: 1, type: true, text: "1" },
        { id: 2, type: true, text: "2" },
        { id: 3, type: true, text: "3" },
      ];
      render(
        <Keyboard
          numbersList={testList}
          numbersKeys={() => {}}
          deleteKeys={() => {}}
        />
      );
      const element = screen.getByRole("list");

      expect(element).toBeInTheDocument();
    });
  });
});
