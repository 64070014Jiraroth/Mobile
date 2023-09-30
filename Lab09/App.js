import React from "react";
import { StyleSheet } from "react-native";
// import คอมโพเนนต์ที่จำเป็น
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyNavigator from "./navigation/MyNavigator";

import {createStore, combineReducers} from 'redux';
import { Provider } from "react-redux";
import mealsReducer from "./store/reducers/mealsReducer";

const rootReducer = combineReducers({
  meals: mealsReducer
})
const store = createStore(rootReducer);

const MealsNavigator = createNativeStackNavigator();

export default function App() {
  return <Provider store={store}><MyNavigator /></Provider>;
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
