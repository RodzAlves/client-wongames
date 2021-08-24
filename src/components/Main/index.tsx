import * as S from "./styles";
import { useTheme } from "hooks/use-theme";

const Main = ({
  title = "React Avançado - Boilerplate",
  description = "TypeScript, ReactJS, NextJS e Styled Components"
}) => {
  const { theme, handleChangeTheme } = useTheme();

  return (
    <S.Wrapper>
      <h1>{theme?.title}</h1>
      <button onClick={handleChangeTheme}>Mudar tema?</button>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para tela com código."
      />
    </S.Wrapper>
  );
};

export default Main;
