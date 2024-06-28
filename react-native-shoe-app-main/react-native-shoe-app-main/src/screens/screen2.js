import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useFonts } from "expo-font";



const screen2 = () => {
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
  },

});

export default screen2;
