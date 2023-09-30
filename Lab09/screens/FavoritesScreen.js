import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavoritesScreen = (props) => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
  const filteredMeals = useSelector(state => state.meals.filteredMeals)
  const favMeals = filteredMeals.filter((meal) => favoriteMeals.includes(meal.id))
  return (
    <MealList
      listData = {favMeals}
      navigation = {props.navigation}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
