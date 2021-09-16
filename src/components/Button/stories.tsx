import { Meta, Story } from "@storybook/react";

import Button from ".";

import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      type: "string"
    },
    icon: {
      type: ""
    }
  }
} as Meta;

export const Default: Story = (args) => <Button {...args} />;

Default.args = {
  children: "Buy now"
};

export const withIcon: Story = (args) => <Button {...args} />;

withIcon.args = {
  size: "small",
  children: "Buy now",
  icon: <AddShoppingCart />
};