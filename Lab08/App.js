import { StatusBar } from 'expo-status-bar';
import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing, Image } from "react-native";

import MainScreen from './screens/mainScreen';
import Example01 from "./examples/Example01";
import Example02 from "./examples/Example02";
import Example03 from "./examples/Example03";
import Example04 from "./examples/Example04";


export default function App() {
  return <MainScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
