import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Hightlight } from "@components/Highlight";
import { GroupsContainer } from "./styles";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export const Groups = () => {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <GroupsContainer>
      <Header />
      <Hightlight title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { marginTop: 80 }}
        ListEmptyComponent={
          <ListEmpty message="Parece que a lista está vazia :(. Que tal cadastrar a primeira turma?" />
        }
        showsVerticalScrollIndicator={false}
      />
      <Button type="GREEN" title="Criar nova turma" />
    </GroupsContainer>
  );
};
