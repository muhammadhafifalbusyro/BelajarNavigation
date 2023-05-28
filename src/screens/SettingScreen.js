import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SettingScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    color: 'black',
  },
});

export default SettingScreen;
