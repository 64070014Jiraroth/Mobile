import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing, Image } from "react-native";

const SequenceScreen = ({navigation}) => {

  const animVal = useRef(new Animated.Value(1)).current; // Initial value for opacity: 0
  const spinAnim = useRef(new Animated.Value(0)).current;


  
  const fadeIn = () => {
    Animated.sequence([
      Animated.timing(animVal, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      }),
      Animated.timing(animVal, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        }),
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        // easing: Easing.bounce,
        })
    ]).start( ()=>{spinAnim.setValue(0)}); };
   
    const spin = spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
      });

  return (
    <View style={styles.container}>
    <Animated.View style={{opacity: animVal}}>
      <Animated.Image
        style={
          [styles.img, {transform:[{rotate:spin}]} ]
        }
        source={require('../assets/IT_Logo.png')}
      />
      
    </Animated.View>
    <Button title="RUN SEQUENCE" onPress={fadeIn} />
      </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "space-around",
    },
    img: {
      width: 100, height: 100, resizeMode:'contain',
    }
  });
  
  export default SequenceScreen;