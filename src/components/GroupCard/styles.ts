import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const GroupCardContainer = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  flex-direction: row;

  background: ${({ theme: { COLORS } }) => COLORS.GRAY_500};
  border-radius: 6px;

  padding: 24px;
`;

export const Title = styled.Text`
  ${({ theme: { COLORS, FONT_SIZE, FONT_FAMILY } }) => css`
    font-size: ${FONT_SIZE.MD}px;
    color: ${COLORS.GRAY_200};
    font-family: ${FONT_FAMILY.REGULAR};
  `}
`;

export const Icon = styled(UsersThree).attrs(({ theme: { COLORS } }) => ({
  size: 32,
  color: COLORS.GREEN_700,
  width: "fill",
}))`
  margin-right: 20px;
`;
