import * as S from "./styles";

interface GroupCardProps {
  title: string;
}

export const GroupCard = ({ title }: GroupCardProps) => {
  return (
    <S.GroupCardContainer>
      <S.Icon />
      <S.Title>{title}</S.Title>
    </S.GroupCardContainer>
  );
};
