import React from "react";
import { StyleSheet } from "react-native";
// import คอมโพเนนต์ที่จำเป็น
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyNavigator from "./navigation/MyNavigator";

const MealsNavigator = createNativeStackNavigator();

export default function App() {
  return <MyNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
