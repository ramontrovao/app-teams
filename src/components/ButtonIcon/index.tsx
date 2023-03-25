import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as S from "./styles";

type ButtonIconProps = {
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: S.ButtonIconVariantStyleProps;
  size?: number;
} & TouchableOpacityProps;

export const ButtonIcon = ({
  icon,
  variant = "GREEN",
  size = 24,
  ...rest
}: ButtonIconProps) => {
  return (
    <S.ButtonIconContainer {...rest}>
      <S.Icon name={icon} variant={variant} size={size} />
    </S.ButtonIconContainer>
  );
};
