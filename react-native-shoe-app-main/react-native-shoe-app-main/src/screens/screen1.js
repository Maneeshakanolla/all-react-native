import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useFonts } from 'expo-font';


const product_1 = require("../assets/images/products/product_1.jpg");
const product_2 = require("../assets/images/products/product_2.jpg");
const product_3 = require("../assets/images/products/product_3.jpg");
const product_4 = require("../assets/images/products/product_4.jpg");

const cart = require("../assets/images/icons/cart.png");
const compass = require("../assets/images/icons/compass.png");
const home = require("../assets/images/icons/home.png");
const mag = require("../assets/images/icons/mag.png");
const user = require("../assets/images/icons/user.png");

const face = require("../assets/images/face.jpg");



const screen1 = () => {

  const [fontsLoaded] = useFonts({
    'Cambay-Bold': require('../assets/fonts/Cambay-Bold.ttf'),
    'Cambay-BoldItalic': require('../assets/fonts/Cambay-BoldItalic.ttf'),
    'Cambay-Italic': require('../assets/fonts/Cambay-Italic.ttf'),
    'Cambay-Regular': require('../assets/fonts/Cambay-Regular.ttf'),

  });

  if (!fontsLoaded) {
    return null;
  }



  return (
    <View style={styles.container}>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default screen1;
