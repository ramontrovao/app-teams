import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type ButtonIconProps = {
  type?: S.ButtonIconTypeStyleProps;
} & TouchableOpacityProps;

export const ButtonIcon = ({ type = "PLUS" }: ButtonIconProps) => {
  return (
    <S.ButtonIconContainer>
      {type === "PLUS" ? <S.PlusIcon /> : <S.MinusIcon />}
    </S.ButtonIconContainer>
  );
};
