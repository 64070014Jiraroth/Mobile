import React from "react";
import { View, Text, Button, StyleSheet, Platform, FlatList,} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";

const CategoryMealsScreen = ({ route, navigation }) => {

//redux
const availableMeals = useSelector(state => state.meals.filteredMeals)

  const catId = route.params.id;

  const displayedMeals = 
  // MEALS.filter(
  availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <MealList style={styles.screen}
      listData = {displayedMeals}
      navigation = {navigation}
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

export default CategoryMealsScreen;
