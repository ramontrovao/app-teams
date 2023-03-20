import { Minus, Plus } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonIconTypeStyleProps = "PLUS" | "MINUS";

interface ButtonIconContainerProps {
  type?: ButtonIconTypeStyleProps;
}

export const ButtonIconContainer = styled(
  TouchableOpacity
)<ButtonIconContainerProps>`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`;

export const PlusIcon = styled(Plus).attrs(({ theme: { COLORS } }) => ({
  color: COLORS.GREEN_700,
  size: 24,
}))``;

export const MinusIcon = styled(Minus).attrs(({ theme: { COLORS } }) => ({
  color: COLORS.RED_DARK,
  size: 24,
}))``;
