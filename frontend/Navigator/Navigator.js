import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "../Screen/MainScreen";
import SettingScreen from "../Screen/SettingScreen";
import QnAScreen from "../Screen/QnAScreen";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="QnA" component={QnAScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
