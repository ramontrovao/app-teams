import * as S from "./styles";

interface HighlightProps {
  title: string;
  subtitle: string;
}

export const Hightlight = ({ title, subtitle }: HighlightProps) => {
  return (
    <S.HightlightContainer>
      <S.Title> {title} </S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.HightlightContainer>
  );
};
