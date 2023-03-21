import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const GroupsContainer = styled(SafeAreaView)`
  padding: 24px;

  flex: 1;

  background: ${({ theme: { COLORS } }) => `${COLORS.GRAY_600}`};
`;
