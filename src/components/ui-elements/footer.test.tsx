import { render, screen } from "@testing-library/react";
import Footer from "./footer";
import "@testing-library/jest-dom";

describe("Footer", () => {
  test("renders footer with correct copyright text", () => {
    render(<Footer />);
    const copyrightElement = screen.getByText("Clip Alchemist", {
      exact: false,
    });
    expect(copyrightElement).toBeInTheDocument();
  });
  test("render correct copyright year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const yearElement = screen.getByText(`© ${currentYear} Clip Alchemist`);
    expect(yearElement).toBeInTheDocument();
  });
});
