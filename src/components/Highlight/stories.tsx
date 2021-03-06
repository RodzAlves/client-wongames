import { Meta, Story } from "@storybook/react";

import Highlight, { HighlightProps } from ".";

export default {
  title: "Highlight",
  component: Highlight,
  args: {
    title: "Red Dead it's back",
    subtitle: "Come see John's new adventures",
    backgroundImage: "/img/red-dead-img.png",
    buttonLabel: "Buy now",
    buttonLink: "/link"
  }
} as Meta;

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
    <Highlight {...args} />
  </div>
);

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
    <Highlight {...args} />
  </div>
);

WithFloatImage.args = {
  floatImage: "/img/red-dead-float.png"
};
