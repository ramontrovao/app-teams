import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Hightlight } from "@components/Highlight";
import { Input } from "@components/Input";
import * as S from "./styles";

export const NewGroup = () => {
  return (
    <S.NewGroupContainer>
      <Header hasButton />

      <S.NewGroupContent>
        <S.Icon />
        <Hightlight title="Nova turma" subtitle="Crie uma nova turma" />

        <Input placeholder="Nome da turma" />

        <Button title="Criar" style={{ marginTop: 15 }} />
      </S.NewGroupContent>
    </S.NewGroupContainer>
  );
};
