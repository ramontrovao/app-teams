import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Hightlight } from "@components/Highlight";
import { Input } from "@components/Input";

import * as S from "./styles";

import { FlatList } from "react-native";

export const Players = () => {
  return (
    <S.PlayersContainer>
      <Header hasButton />

      <Hightlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times! :)"
      />

      <S.FormContainer>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon variant="GREEN" icon="add" />
      </S.FormContainer>

      <FlatList
        data={["Time A", "Time B"]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Filter title={item} />}
      />
    </S.PlayersContainer>
  );
};
