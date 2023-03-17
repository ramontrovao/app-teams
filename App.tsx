import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { Groups } from "@screens/Groups/index";
import theme from "@theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent />

      <Groups />
    </ThemeProvider>
  );
}
