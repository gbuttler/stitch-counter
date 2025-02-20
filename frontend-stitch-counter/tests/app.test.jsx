import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { describe, it } from "vitest";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);

    // prints out the jsx in the App component onto the command line
    screen.debug();
  });
});
