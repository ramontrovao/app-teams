import styled from "styled-components/native";

export const PlayersContainer = styled.View`
  flex: 1;
  background: ${({ theme: { COLORS } }) => COLORS.GRAY_600};

  padding: 24px;
`;
