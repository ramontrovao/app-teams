import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Hightlight } from "@components/Highlight";
import { Input } from "@components/Input";

import { useCallback, useEffect, useRef, useState } from "react";

import * as S from "./styles";

import { Alert, FlatList, TextInput } from "react-native";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";
import { addPlayerByGroup } from "@storage/players/addPlayerByGroup";
import { AppError } from "@utils/AppError";
import { getPlayersByGroupAndTeam } from "@storage/players/getPlayersByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/players/PlayerStorageDTO";

type RouteParams = {
  newGroupName: string;
};

export const Players = () => {
  const route = useRoute();
  const { newGroupName } = route.params as RouteParams;

  const [newPlayerName, setNewPlayerName] = useState("");
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const newPlayerNameInputRef = useRef<TextInput>(null);

  const handleAddPlayer = async () => {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert("ERRO", "Informe o nome da pessoa para adicionar!");
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await addPlayerByGroup(newPlayer, newGroupName);

      newPlayerNameInputRef.current?.blur();

      setNewPlayerName("");
      await fetchPlayersByGroupAndTeam();
    } catch (err) {
      if (err instanceof AppError) {
        return Alert.alert("ERRO", err.message);
      } else {
        console.log(err);
        return Alert.alert(
          "ERRO",
          "Não foi possível adicionar um novo jogador, entre em contato com o suporte para saber mais."
        );
      }
    }
  };

  const fetchPlayersByGroupAndTeam = async () => {
    try {
      const playersFiltered = await getPlayersByGroupAndTeam(
        team,
        newGroupName
      );

      setPlayers(playersFiltered);
    } catch (err) {
      console.log(err);
      Alert.alert("ERRO", "afwafwafaw");
    }
  };

  useEffect(() => {
    fetchPlayersByGroupAndTeam();
  }, [team]);

  return (
    <S.PlayersContainer>
      <Header hasButton />

      <Hightlight
        title={newGroupName}
        subtitle="Adicione a galera e separe os times! :)"
      />

      <S.FormContainer>
        <Input
          inputRef={newPlayerNameInputRef}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />
        <ButtonIcon onPress={handleAddPlayer} variant="GREEN" icon="add" />
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
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <PlayerCard name={item.name} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <ListEmpty message="O time está vazio. Adicione jogadores e se divirtam!" />
        }
      />

      <Button title="Remover time" type="RED" />
    </S.PlayersContainer>
  );
};
