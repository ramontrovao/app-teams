import logo from "@assets/logo.png";
import * as S from "./styles";

interface HeaderProps {
  hasButton?: boolean;
}

export const Header = ({ hasButton = false }: HeaderProps) => {
  return (
    <S.HeaderContainer>
      {hasButton && (
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>
      )}

      <S.Logo source={logo} />
    </S.HeaderContainer>
  );
};
