import "./global";
import { Buffer } from "buffer";
global.Buffer = Buffer;

import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import useCachedResources from "./hooks/useCachedResources";
// import { ContractKitProvider } from "@celo-tools/use-contractkit";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

LogBox.ignoreLogs([
  "Warning: The provided value 'moz",
  "Warning: The provided value 'ms-stream",
]);
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      // <ContractKitProvider
      //   dappName="Fund me Coin"
      //   dappDescription="A fund raiser using Celo"
      //   dappUrl="https://example.com"
      // >
      <SafeAreaProvider>
        <PaperProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </PaperProvider>
      </SafeAreaProvider>
      // </ContractKitProvider>
    );
  }
}
