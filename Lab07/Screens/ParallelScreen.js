import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing, Image } from "react-native";

const ParallelScreen = ({navigation}) => {

    const springVal = useRef(new Animated.Value(0.8)).current;
    const textVal = useRef(new Animated.Value(0)).current;

    const spring = () => {
        Animated.parallel([
        Animated.spring(springVal, {
          toValue: 1.5,
          friction: 2,
          duration: 1000,
          // speed: 5,
          // bounciness: 10,
          useNativeDriver: true,
        }),
        Animated.timing(textVal, {
            toValue: 1,
            duration: 1000,
            bounce: Easing.bounce,
            useNativeDriver: true
        }),
    ]).start( ()=> {springVal.setValue(0.8);textVal.setValue(0);});
      };

      const slide = textVal.interpolate({
        inputRange: [0, 0.3, 0.6, 1],
        outputRange: [0, 100, -100, 0],
        });


    return (
        <View style={styles.container}>
            <Animated.Image
                style={{
                    width: 100, height: 100, resizeMode:'contain', 
                    transform:[{scale:springVal}]
                }}
                source={require('../assets/IT_Logo.png')}
                />
            <Animated.Text style={{transform:[{translateX:slide}]}}>“Welcome to Faculty of IT!</Animated.Text>
            <Button title="RUN PARALLEL" onPress={spring}/>
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
  });
  
  export default ParallelScreen;