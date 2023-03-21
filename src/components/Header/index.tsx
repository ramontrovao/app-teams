import { useNavigation } from "@react-navigation/native";

import logo from "@assets/logo.png";

import * as S from "./styles";

interface HeaderProps {
  hasButton?: boolean;
}

export const Header = ({ hasButton = false }: HeaderProps) => {
  const { navigate } = useNavigation();

  const handleGoBack = () => {
    navigate("groups");
  };

  return (
    <S.HeaderContainer>
      {hasButton && (
        <S.BackButtonContainer>
          <S.BackButton onPress={handleGoBack}>
            <S.BackIcon />
          </S.BackButton>
        </S.BackButtonContainer>
      )}

      <S.Logo source={logo} />
    </S.HeaderContainer>
  );
};
