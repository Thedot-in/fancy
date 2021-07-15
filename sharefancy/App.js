import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { FAB } from 'react-native-paper';

const App = () => {


  return (
    <SafeAreaView>
      <View>
        <Text style={styles.heading}>
          Fancy.
        </Text>
      </View>
      <FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={() => console.log('Pressed')}
  />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
  },
  heading:{
    marginLeft: 32,
    marginTop: 40,
    fontSize: 30,
    color:'#0083BE',
    fontWeight:'bold'
  },  
 
});

export default App;
