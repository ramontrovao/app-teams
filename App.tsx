import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import theme from "@theme/theme";
import { Loading } from "@components/Loading";
import { Players } from "@screens/Players";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent />

      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}
