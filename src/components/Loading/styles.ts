import styled from "styled-components/native";

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background: ${({ theme: { COLORS } }) => COLORS.GRAY_600};
`;

export const LoadingSpinner = styled.ActivityIndicator.attrs(
  ({ theme: { COLORS } }) => ({ size: 50, color: COLORS.GREEN_700 })
)``;
