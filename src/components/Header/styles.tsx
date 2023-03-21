import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  padding: 8px 0;
  justify-content: center;
  align-items: center;

  flex-direction: row;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButtonContainer = styled.View`
  flex: 1;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackIcon = styled(CaretLeft).attrs(({ theme: { COLORS } }) => ({
  color: COLORS.WHITE,
  size: 35,
}))``;
