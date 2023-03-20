import styled from "styled-components/native";

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
