// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useStore } from "@tanstack/react-store";
import { Store } from "@tanstack/store";

import { useColorScheme } from "@/hooks/useColorScheme";

import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
  PaperProvider,
  useTheme,
  Text,
  configureFonts,
} from "react-native-paper";
import merge from "deepmerge";

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme);
const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  const theme = useTheme();

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Abel: require("../assets/fonts/Abel.ttf"),
    Rubik: require("../assets/fonts/Rubik.ttf"),
    RubikBold: require("../assets/fonts/Rubik-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    //console.log(CombinedDarkTheme);
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider
      //theme={NavigationDarkTheme}
      theme={
        colorScheme === "dark"
          ? {
              ...CombinedDarkTheme,
              fonts: configureFonts({ config: { fontFamily: "Abel" } }),
            }
          : CombinedDefaultTheme
      }
      // theme={{
      //   ...theme,
      //   //dark:colorScheme === "dark" ? CombinedDarkTheme : CombinedDefaultTheme,
      //   fonts: configureFonts({ config: { fontFamily: "Abel" } }),
      // }}
    >
      <ThemeProvider
        value={
          colorScheme === "dark" ? CombinedDarkTheme : CombinedDefaultTheme
        }
      >
        <QueryClientProvider client={queryClient}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </QueryClientProvider>

        {/* <ThemeProvider
        value={
          colorScheme === "light" ? CombinedDarkTheme : CombinedDefaultTheme
        }
      > */}
      </ThemeProvider>
    </PaperProvider>
  );
}
