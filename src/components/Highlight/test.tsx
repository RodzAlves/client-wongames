import { render, screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Highlight from ".";

const props = {
  title: "Heading 1",
  subtitle: "Heading 2",
  buttonLabel: "Buy now",
  buttonLink: "/link"
};

describe("<Highlight />", () => {
  it("should render headings and button", () => {
    renderWithTheme(<Highlight {...props} />);

    expect(
      screen.getByRole("heading", { name: /heading 1/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /heading 2/i })
    ).toBeInTheDocument();

    const buttonLink = screen.getByRole("link", { name: /buy now/i });

    expect(buttonLink).toBeInTheDocument();
    expect(buttonLink).toHaveAttribute("href", "/link");
  });
});
