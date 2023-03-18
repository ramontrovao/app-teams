import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Hightlight } from "@components/Highlight";
import { GroupsContainer } from "./styles";

export const Groups = () => {
  return (
    <GroupsContainer>
      <Header />
      <Hightlight title="Turmas" subtitle="Jogue com a sua turma" />
      <GroupCard title="Galera do Ignite" />
    </GroupsContainer>
  );
};
