import styled, { css } from "styled-components/native";

export const HightlightContainer = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  ${({ theme: { FONT_SIZE, FONT_FAMILY, COLORS } }) => css`
    text-align: center;

    font-size: ${FONT_SIZE.XL};
    font-family: ${FONT_FAMILY.BOLD};
    color: ${COLORS.WHITE};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme: { FONT_SIZE, FONT_FAMILY, COLORS } }) => css`
    text-align: center;

    font-size: ${FONT_SIZE.MD};
    font-family: ${FONT_FAMILY.REGULAR};
    color: ${COLORS.GRAY_300};
  `}
`;
