import { GroupsContainer } from "./styles";

import { useState, useCallback } from "react";
import { FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Hightlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { getAllGroups } from "@storage/group/getAllGroups";

export const Groups = () => {
  const { navigate } = useNavigation();

  const [groups, setGroups] = useState<string[]>([]);

  const fetchGroups = async () => {
    try {
      const groupsData = await getAllGroups();

      setGroups(groupsData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewGroup = () => {
    navigate("new-group");
  };

  const handleOpenGroup = (group: string) => {
    navigate("players", { newGroupName: group });
  };

  useFocusEffect(
    useCallback(() => {
      console.log("rodou");
      fetchGroups();
    }, [])
  );

  return (
    <GroupsContainer>
      <Header />
      <Hightlight title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
        )}
        contentContainerStyle={groups.length === 0 && { marginTop: 80 }}
        ListEmptyComponent={
          <ListEmpty message="Parece que a lista está vazia :(. Que tal cadastrar a primeira turma?" />
        }
        showsVerticalScrollIndicator={false}
      />
      <Button type="GREEN" title="Criar nova turma" onPress={handleNewGroup} />
    </GroupsContainer>
  );
};
