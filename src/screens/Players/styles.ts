import styled, { css } from "styled-components/native";

export const PlayersContainer = styled.View`
  flex: 1;
  background: ${({ theme: { COLORS } }) => COLORS.GRAY_600};

  padding: 24px;
`;

export const FormContainer = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: center;

  background: ${({ theme: { COLORS } }) => COLORS.GRAY_700};
  border-radius: 8px;
`;

export const HeaderList = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  margin: 32px 0 12px;
`;

export const NumberOfPlayers = styled.Text`
  ${({ theme: { COLORS, FONT_FAMILY, FONT_SIZE } }) => css`
    padding: 5px 10px;
    background: ${COLORS.GRAY_700};
    border-radius: 999px;
    color: ${COLORS.GRAY_200};
    font-family: ${FONT_FAMILY.BOLD};
    font-size: ${FONT_SIZE.SM}px;
  `}
`;
