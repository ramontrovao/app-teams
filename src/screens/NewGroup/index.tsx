import { Header } from "@components/Header";
import { Hightlight } from "@components/Highlight";
import { UsersThree } from "phosphor-react-native";
import * as S from "./styles";

export const NewGroup = () => {
  return (
    <S.NewGroupContainer>
      <Header hasButton />

      <S.NewGroupContent>
        <S.Icon />
        <Hightlight
          title="Nova turma"
          subtitle="Crie uma nova turma e adicione novos integrantes!"
        />
      </S.NewGroupContent>
    </S.NewGroupContainer>
  );
};
