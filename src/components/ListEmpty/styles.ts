import { SmileySad } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const ListEmptyContainer = styled.View`
  flex: 1;
  gap: 12px;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  ${({ theme: { COLORS, FONT_SIZE, FONT_FAMILY } }) => css`
    text-align: center;

    font-size: ${FONT_SIZE.SM}px;
    font-family: ${FONT_FAMILY.REGULAR};
    color: ${COLORS.GRAY_300};
  `}
`;

export const Icon = styled(SmileySad).attrs(({ theme: { COLORS } }) => ({
  size: 60,
  color: COLORS.GRAY_300,
}))``;
