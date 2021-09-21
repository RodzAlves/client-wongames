import { Meta, Story } from "@storybook/react";

import Highlight, { HighlightProps } from ".";

export default {
  title: "Highlight",
  component: Highlight,
  args: {
    title: "Red Dead it's back",
    subtitle: "Come see John's new adventures",
    buttonLabel: "Buy now",
    buttonLink: "/link"
  }
} as Meta;

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />;
