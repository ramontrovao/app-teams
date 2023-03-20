import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type FilterProps = {
  title: string;
} & S.FilterStyleProps &
  TouchableOpacityProps;

export const Filter = ({ title, isActive = false, ...rest }: FilterProps) => {
  return (
    <S.FilterContainer {...rest}>
      <S.Title>{title}</S.Title>
    </S.FilterContainer>
  );
};
