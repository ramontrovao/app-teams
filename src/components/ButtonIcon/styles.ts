import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonIconVariantStyleProps = "GREEN" | "RED";

interface ButtonIconContainerProps {
  variant?: ButtonIconVariantStyleProps;
  size?: number;
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

export const Icon = styled(MaterialIcons).attrs<ButtonIconContainerProps>(
  ({ theme: { COLORS }, variant, size }) => ({
    color: variant === "GREEN" ? COLORS.GREEN_500 : COLORS.RED_DARK,
    size: size,
  })
)``;
