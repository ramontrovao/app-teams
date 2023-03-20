import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Hightlight } from "@components/Highlight";
import * as S from "./styles";

export const Players = () => {
  return (
    <S.PlayersContainer>
      <Header hasButton />

      <Hightlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times! :)"
      />

      <ButtonIcon variant="GREEN" icon="add" />
    </S.PlayersContainer>
  );
};
