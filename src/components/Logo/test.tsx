import { render, screen } from "@testing-library/react";

import Logo from ".";

describe("<Logo />", () => {
  it("should render the reading", () => {
    render(<Logo />);

    expect(screen.getByRole("heading", { name: /Logo/i })).toBeInTheDocument();
  });
});
