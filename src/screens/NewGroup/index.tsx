import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Hightlight } from "@components/Highlight";
import { Input } from "@components/Input";

import { useNavigation } from "@react-navigation/native";
import { createGroup } from "@storage/group/createGroup";
import { useState } from "react";

import * as S from "./styles";

export const NewGroup = () => {
  const { navigate } = useNavigation();
  const [newGroupName, setNewGroupName] = useState("");

  const handleCreateNewGroup = async () => {
    try {
      await createGroup(newGroupName);

      navigate("players", { newGroupName });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.NewGroupContainer>
      <Header hasButton />

      <S.NewGroupContent>
        <S.Icon />
        <Hightlight title="Nova turma" subtitle="Crie uma nova turma" />

        <Input
          placeholder="Nome da turma"
          onChangeText={setNewGroupName}
          value={newGroupName}
        />

        <Button
          title="Criar"
          style={{ marginTop: 15 }}
          onPress={handleCreateNewGroup}
        />
      </S.NewGroupContent>
    </S.NewGroupContainer>
  );
};
