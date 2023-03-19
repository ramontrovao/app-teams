import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type ButtonProps = {
  title: string;
  type?: S.ButtonTypeStyleProps;
} & TouchableOpacityProps;

export const Button = ({ title, type = "GREEN", ...rest }: ButtonProps) => {
  return (
    <S.ButtonContainer type={type} {...rest}>
      <S.Title>{title}</S.Title>
    </S.ButtonContainer>
  );
};
