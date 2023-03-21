import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const PlayerCardContainer = styled.View`
  width: 100%;
  height: 56px;

  background: ${({ theme: { COLORS } }) => COLORS.GRAY_500};
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const Name = styled.Text`
  ${({ theme: { COLORS, FONT_FAMILY, FONT_SIZE } }) => css`
    flex: 1;

    color: ${COLORS.GRAY_200};
    font-family: ${FONT_FAMILY.REGULAR};
    font-size: ${FONT_SIZE.MD};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme: { COLORS } }) => ({
  size: 24,
  color: COLORS.GRAY_400,
}))`
  margin-left: 16px;
  margin-right: 8px;
`;
