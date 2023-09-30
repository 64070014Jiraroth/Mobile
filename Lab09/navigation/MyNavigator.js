import React from "react";
// import library ที่จำเป็น
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

import CustomHeaderButton from "../CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/mealsAction";

// import screen ที่เกี่ยวข้อง
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

// สร้าง navigator ตามโจทย์กำหนด
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว เช่น

function MealsFavTabNavigator(){
  return(
    <Tab.Navigator screenOptions={{drawerInactiveTintColor: "lightorange"}}>
      <Tab.Screen name="Meals" component={MealNavigator} 
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => {
          return <Ionicons name="fast-food-outline" size={24} color="black" />
        }
      }}
      />
      <Tab.Screen name="Favorites" component={FavNavigator} 
      options={{
        headerShown: false,
        tabBarIcon: () => {
          return <AntDesign name="staro" size={24} color="black" />
        }
      }}
      />
    </Tab.Navigator>
  );
}

function FavNavigator() {
  return (
    <Stack.Navigator 
    screenOptions={{headerStyle: {backgroundColor: "#4a148c"}, headerTintColor: "white"}}>
      <Stack.Screen name="Your Favorites" component={FavoritesScreen}
      // options={{headerShown : false}}
      />
      <Stack.Screen name="Meals" component={CategoriesScreen} />
    </Stack.Navigator>
  );
}

function FiltersNavigator() {
  return (
    <Stack.Navigator 
    screenOptions={{headerStyle: {backgroundColor: "#4a148c"}, headerTintColor: "white"}}>
      <Stack.Screen name="Filter Meals" component={FiltersScreen} />
    </Stack.Navigator>
  )
}

// อาจกำหนด Navigator เพิ่มได้
function MainNavigator() {
  return (
    // กำหนดรายละเอียดของ navigator
    <Drawer.Navigator
      screenOptions={{drawerActiveTintColor: "orange", drawerInactiveTintColor: "gray"}}>
        <Drawer.Screen name="MealsFav" component={MealsFavTabNavigator}
        options={{
          drawerLabel: "Meals",
          headerShown: false,
        }} />
        <Drawer.Screen name="Filters" component={FiltersNavigator}
        options={{
          drawerLabel: "Filters",
          headerShown: false,
        }} />
      </Drawer.Navigator>
  );
}

function MealNavigator() {
  //redux
  const dispatch = useDispatch();
  const toggleFavoriteHandler = (mealId) => {
    dispatch(toggleFavorite(mealId));
  };

  return (

      <Stack.Navigator initialRouteName="Categories"
      screenOptions={{headerStyle: {backgroundColor: "#4a148c"}, headerTintColor: "white"}}
      >
        <Stack.Screen name="Categories" component={CategoriesScreen}
          options={{
            title: "Meal Categories",
          }}
        />
        <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen}
          options={
            ({ route }) => ({
              title: route.params.title,
            })
          }
        />
        <Stack.Screen name="MealDetail" component={MealDetailScreen}
          options={
            ({ route }) => ({
              title: route.params.title,
              headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="MealDetail" iconName="ios-star" onPress={() => {toggleFavoriteHandler(route.params.id)}} />
                </HeaderButtons> ),
            })
          }
        />
      </Stack.Navigator>
    
  )
}

// สร้าง Navigator หลัก
export default function MyNavigator() {
  return (
    <NavigationContainer>
      {MainNavigator()}
    </NavigationContainer>
  );
}
