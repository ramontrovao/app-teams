import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  padding: 24px;

  justify-content: center;
  align-items: center;

  flex-direction: row;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme: { COLORS } }) => ({
  color: COLORS.WHITE,
  size: 35,
}))``;
