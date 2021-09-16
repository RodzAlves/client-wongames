import { Menu2 as MenuIcon } from "@styled-icons/remix-line/Menu2";
import { Search as SearchIcon } from "@styled-icons/fluentui-system-filled/Search";
import { ShoppingCart as ShoppingCartIcon } from "@styled-icons/material-outlined/ShoppingCart";

import Logo from "components/Logo";
import * as S from "./styles";

const Menu = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <MenuIcon aria-label="Open Menu" />
    </S.IconWrapper>

    <S.LogoWrapper>
      <Logo hideOnMobile />
    </S.LogoWrapper>

    <S.MenuGroup>
      <S.IconWrapper>
        <SearchIcon aria-label="Search" />
      </S.IconWrapper>

      <S.IconWrapper>
        <ShoppingCartIcon aria-label="Open Shopping Cart" />
      </S.IconWrapper>
    </S.MenuGroup>
  </S.Wrapper>
);

export default Menu;
