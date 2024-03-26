import { render, screen } from "@testing-library/react";
import Header from "./header";
import "@testing-library/jest-dom";

describe("Header", () => {
  test("renders header with correct title", () => {
    render(<Header />);
    const titleElement = screen.getByText("Clip Alchemist");
    expect(titleElement).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(<Header />);
    const gettingStartedLink = screen.getByText("Getting Started");
    const documentationLink = screen.getByText("Documentation");
    expect(gettingStartedLink).toBeInTheDocument();
    expect(documentationLink).toBeInTheDocument();
  });
});
