import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Hightlight } from "@components/Highlight";
import { GroupsContainer } from "./styles";
import { useState } from "react";
import { FlatList } from "react-native";

export const Groups = () => {
  const [groups, setGroups] = useState(["Galera da rocket", "Ramon", "Ramon3"]);

  return (
    <GroupsContainer>
      <Header />
      <Hightlight title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </GroupsContainer>
  );
};
