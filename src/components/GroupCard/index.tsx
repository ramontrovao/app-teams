import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type GroupCardProps = TouchableOpacityProps & {
  title: string;
};

export const GroupCard = ({ title, ...rest }: GroupCardProps) => {
  return (
    <S.GroupCardContainer {...rest}>
      <S.Icon />
      <S.Title>{title}</S.Title>
    </S.GroupCardContainer>
  );
};
