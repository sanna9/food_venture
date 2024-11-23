import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us Page Test Case", () => {
  //describe is used to group together the mutiple testcases into single test case
  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();

    // if i do getByRole, it wil get one getRoles, but if i say "getAllByRole" it will take multiple values from screen
  });

  test("Should have button", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Should load 2 input boxes", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
    // expect(inputBoxes.length).not.toBe(2);
  });
});

//rather than writing the  "test/it("", ()=>{})"
// "it" is being because of the readability
