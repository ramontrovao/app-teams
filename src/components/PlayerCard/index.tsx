import { ButtonIcon } from "@components/ButtonIcon";

import * as S from "./styles";

import { View } from "react-native";

interface PlayerCardProps {
  name: string;
  onRemove?: () => void;
}

export const PlayerCard = ({ name, onRemove }: PlayerCardProps) => {
  return (
    <S.PlayerCardContainer>
      <S.Icon name="person" />

      <S.Name>{name}</S.Name>

      <ButtonIcon icon="close" variant="RED" onPress={onRemove} />
    </S.PlayerCardContainer>
  );
};
