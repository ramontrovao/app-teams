import styled from "styled-components/native";

export const GroupsContainer = styled.View`
  padding: 24px;

  flex: 1;

  background: ${({ theme: { COLORS } }) => `${COLORS.GRAY_600}`};
`;
