import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "GREEN" | "RED";

interface ButtonContainerProps {
  type: ButtonTypeStyleProps;
}

export const ButtonContainer = styled(TouchableOpacity)<ButtonContainerProps>`
  ${({ theme: { COLORS }, type }) => css`
    min-height: 56px;
    max-height: 56px;

    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${type === "GREEN" ? COLORS.GREEN_700 : COLORS.RED_DARK};
    border-radius: 6px;
  `}
`;

export const Title = styled.Text`
  ${({ theme: { COLORS, FONT_SIZE, FONT_FAMILY } }) => css`
    color: ${COLORS.WHITE};
    font-size: ${FONT_SIZE.MD}px;
    font-family: ${FONT_FAMILY.REGULAR};
  `}
`;
