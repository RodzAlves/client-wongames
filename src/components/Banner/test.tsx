import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Banner from ".";

const props = {
  img: "https://source.unsplash.com/user/willianjusten/1042x580",
  title: "Defy death",
  subtitle: "<p>Play the new <strong>CrashLands</strong> season",
  buttonLabel: "Buy now",
  buttonLink: "/games/defy-death"
};

describe("<Banner />", () => {
  it("should render correctly", () => {
    const { container } = renderWithTheme(<Banner {...props} />);

    expect(
      screen.getByRole("heading", { name: /Defy death/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("img", { name: /Defy death/i })).toHaveAttribute(
      "src",
      "https://source.unsplash.com/user/willianjusten/1042x580"
    );

    const buttonLink = screen.getByRole("link", { name: /Buy now/i });

    expect(buttonLink).toBeInTheDocument();
    expect(buttonLink).toHaveAttribute("href", "/games/defy-death");

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render a Ribbon", () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    );

    const ribbonElement = screen.getByText(/My Ribbon/i);

    expect(ribbonElement).toBeInTheDocument();
    expect(ribbonElement).toHaveStyle({
      "background-color": "#3CD3C1"
    });
    expect(ribbonElement).toHaveStyle({
      height: "2.6rem",
      fontSize: "1.2rem"
    });
  });
});
