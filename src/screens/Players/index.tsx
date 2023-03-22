import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Hightlight } from "@components/Highlight";
import { Input } from "@components/Input";

import { useState } from "react";

import * as S from "./styles";

import { FlatList } from "react-native";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
  newGroupName: string;
};

export const Players = () => {
  const route = useRoute();
  const { newGroupName } = route.params as RouteParams;

  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<string[]>([]);

  return (
    <S.PlayersContainer>
      <Header hasButton />

      <Hightlight
        title={newGroupName}
        subtitle="Adicione a galera e separe os times! :)"
      />

      <S.FormContainer>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon variant="GREEN" icon="add" />
      </S.FormContainer>

      <S.HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team && true}
              onPress={() => setTeam(item)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
        />

        <S.NumberOfPlayers>{players.length}</S.NumberOfPlayers>
      </S.HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <PlayerCard name={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <ListEmpty message="O time está vazio. Adicione jogadores e se divirtam!" />
        }
      />

      <Button title="Remover time" type="RED" />
    </S.PlayersContainer>
  );
};
