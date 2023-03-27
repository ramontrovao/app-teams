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
import { useNavigation, useRoute } from "@react-navigation/native";
import { addPlayerByGroup } from "@storage/players/addPlayerByGroup";
import { AppError } from "@utils/AppError";
import { getPlayersByGroupAndTeam } from "@storage/players/getPlayersByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/players/PlayerStorageDTO";
import { removePlayerByGroup } from "@storage/players/removePlayerByGroup";
import { removeGroupByName } from "@storage/group/removeGroupByName";
import { Loading } from "@components/Loading";

type RouteParams = {
  groupName: string;
};

export const Players = () => {
  const route = useRoute();
  const { navigate } = useNavigation();

  const { groupName } = route.params as RouteParams;

  const [isLoading, setIsLoading] = useState(true);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const newPlayerNameInputRef = useRef<TextInput>(null);

  const fetchPlayersByGroupAndTeam = async () => {
    try {
      setIsLoading(true);
      const playersFiltered = await getPlayersByGroupAndTeam(team, groupName);

      setPlayers(playersFiltered);
    } catch (err) {
      console.log(err);
      Alert.alert(
        "ERRO",
        "Não foi possível filtrar os jogadores, entre em contato com o suporte."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddPlayer = async () => {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert("ERRO", "Informe o nome da pessoa para adicionar!");
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await addPlayerByGroup(newPlayer, groupName);

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

  const handleRemovePlayer = async (playerName: string) => {
    try {
      await removePlayerByGroup(playerName, groupName);
      fetchPlayersByGroupAndTeam();
    } catch (err) {
      console.log(err);
      Alert.alert(
        "ERRO",
        "Algo deu errado ao remover o jogador, entre em contato com o suporte."
      );
    }
  };

  const removeGroup = async () => {
    try {
      await removeGroupByName(groupName);

      navigate("groups");
    } catch (err) {
      console.log(err);
      Alert.alert(
        "ERRO",
        "Ocorreu um erro ao remover o grupo, entre em contato com o suporte."
      );
    }
  };

  const handleRemoveGroup = () => {
    Alert.alert(
      "REMOVER",
      `Tem certeza que deseja remover o grupo ${groupName}`,
      [
        { text: "Não", style: "cancel" },
        { text: "Sim", onPress: () => removeGroup() },
      ]
    );
  };

  useEffect(() => {
    fetchPlayersByGroupAndTeam();
  }, [team]);

  return (
    <S.PlayersContainer>
      <Header hasButton />

      <Hightlight
        title={groupName}
        subtitle="Adicione a galera e separe os times! :)"
      />

      <S.FormContainer>
        <Input
          inputRef={newPlayerNameInputRef}
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddPlayer}
          value={newPlayerName}
          returnKeyType="done"
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

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => handleRemovePlayer(item.name)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <ListEmpty message="O time está vazio. Adicione jogadores e se divirtam!" />
          }
        />
      )}

      <Button title="Remover time" type="RED" onPress={handleRemoveGroup} />
    </S.PlayersContainer>
  );
};
