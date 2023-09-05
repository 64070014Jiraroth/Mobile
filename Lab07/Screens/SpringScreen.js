import {React, useRef} from "react";
import { Animated, Text, View, StyleSheet, Image, Button, Easing } from "react-native";
import { screensEnabled } from "react-native-screens";

const SpringScreen = ({navigation}) => {

  const springVal = useRef(new Animated.Value(0.3)).current;

  const spring = () => {
    Animated.spring(springVal, {
      toValue: 1.5,
      friction: 2,
      // speed: 5,
      // bounciness: 10,
      useNativeDriver: true,
    }).start( ()=> {springVal.setValue(0.3);});
  };

    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: 100, height: 100, resizeMode:'contain', 
            transform:[{scale:springVal}]
        }}
          source={require('../assets/IT_Logo.png')}
        />
        
        <Button title="Spring" onPress={spring} />
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
      width: 100,
      height: 100,
      resizeMode:'contain'

    }
  });
  
  export default SpringScreen;