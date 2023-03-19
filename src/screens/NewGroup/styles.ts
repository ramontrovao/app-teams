import { UsersThree } from "phosphor-react-native";
import styled from "styled-components/native";

export const NewGroupContainer = styled.View`
  flex: 1;
  background: ${({ theme: { COLORS } }) => COLORS.GRAY_600};
  padding: 24px;
`;

export const NewGroupContent = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({ theme: { COLORS } }) => ({
  color: COLORS.GREEN_700,
  size: 56,
}))`
  align-self: center;
`;
