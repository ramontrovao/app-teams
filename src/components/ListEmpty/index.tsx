import * as S from "./styles";

interface ListEmptyProps {
  message: string;
}

export const ListEmpty = ({ message }: ListEmptyProps) => {
  return (
    <S.ListEmptyContainer>
      <S.Icon />
      <S.Message>{message}</S.Message>
    </S.ListEmptyContainer>
  );
};
