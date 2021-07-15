import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { LinearTextGradient } from "react-native-text-gradient";

const App = () => {


  return (
    <SafeAreaView>
      <View>
      <LinearTextGradient
  style={{ fontWeight: "bold", fontSize: 72 }}
  locations={[0, 1]}
  colors={["red", "blue"]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
>
  Fancy
</LinearTextGradient>;
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading:{
    marginLeft: 32,
    marginTop: 40,
    color:'#000'
  },  
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
