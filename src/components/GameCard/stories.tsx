import { Meta, Story } from "@storybook/react";

import GameCard, { GameCardProps } from ".";

export default {
  title: "GameCard",
  component: GameCard,
  args: {
    title: "Population Zero",
    developer: "Rockstar Games",
    img: "https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80",
    price: "R$ 235,00"
  }
} as Meta;

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: "30rem" }}>
    <GameCard {...args} />
  </div>
);

export const withPromotionalPrice: Story<GameCardProps> = (args) => (
  <div style={{ width: "30rem" }}>
    <GameCard {...args} />
  </div>
);

withPromotionalPrice.args = {
  promotionalPrice: "R$ 200,00"
};
