/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import AuthScreen from "../screens/AuthScreen";

import NotFoundScreen from "../screens/NotFoundScreen";

import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import { AuthParameterList, RootStackParamList } from "../types";
import { useAccount } from "../hooks/useAccount";
import AccountContext from "../app";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      // linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const [account, setAccount] = React.useState<Account | null>(null);

  function setAcc(acc: Account) {
    setAccount(acc);
    console.debug("called");
  }

  console.debug(account, "ACCOUNT");
  return (
    <AccountContext.Provider value={{ account, setAccount: setAcc }}>
      {/* {account == null ? (
        <AuthScreen />
      ) : ( */}
      {/* <AuthStack.Screen name="Auth" component={AuthScreen} /> */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: "Oops!" }}
        />
      </Stack.Navigator>
      {/* )} */}
    </AccountContext.Provider>
  );
}
