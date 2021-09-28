import { screen } from "@testing-library/react";

import GameCard from ".";
import { renderWithTheme } from "utils/tests/helpers";

const props = {
  title: "Population Zero",
  developer: "Rockstar Games",
  img: "https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80",
  price: "R$ 235,00"
};

describe("<GameCard />", () => {
  it("should render correctly", () => {
    renderWithTheme(<GameCard {...props} />);

    expect(
      screen.getByRole("heading", { name: props.title })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: props.developer })
    ).toBeInTheDocument();

    expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
      "src",
      props.img
    );

    expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
  });
});
