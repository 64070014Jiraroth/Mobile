import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Example01 from "./examples/Example01";
import Example02 from "./examples/Example02";
import Example03 from "./examples/Example03";
import Example04 from "./examples/Example04";
import Example05 from "./examples/Example05";
import Example06 from "./examples/Example06";
import Example07 from "./examples/Example07";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SpringScreen from "./Screens/SpringScreen";
import SequenceScreen from "./Screens/SequenceScreen";
import ParallelScreen from "./Screens/ParallelScreen";


const Tab = createBottomTabNavigator()
export default function App() {
  return (
    // <Example03/>
  <NavigationContainer>
  <Tab.Navigator>
    <Tab.Screen name="Spring" component={SpringScreen}
    options={{
      headerShown:false,
    }}
    />
    <Tab.Screen name="Seqeuence" component={SequenceScreen} 
    options={{
      headerShown:false,
    }}/>
    <Tab.Screen name="Parallel" component={ParallelScreen} 
    options={{
      headerShown:false,
    }}/>
  </Tab.Navigator>
</NavigationContainer>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
