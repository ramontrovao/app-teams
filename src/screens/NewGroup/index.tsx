import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Hightlight } from "@components/Highlight";
import { Input } from "@components/Input";

import { useNavigation } from "@react-navigation/native";
import { createGroup } from "@storage/group/createGroup";
import { AppError } from "@utils/AppError";
import { useState } from "react";
import { Alert } from "react-native";

import * as S from "./styles";

export const NewGroup = () => {
  const { navigate } = useNavigation();
  const [newGroupName, setNewGroupName] = useState("");

  const handleCreateNewGroup = async () => {
    try {
      if (newGroupName.trim().length === 0) {
        return Alert.alert("ERRO", "Informe o nome da turma!");
      }

      await createGroup(newGroupName);

      navigate("players", { newGroupName });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("ERRO", error.message);
      } else {
        Alert.alert(
          "ERRO",
          "Não foi possível criar um novo grupo, entre em contato com o suporte para saber mais."
        );
        console.log(error);
      }
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
