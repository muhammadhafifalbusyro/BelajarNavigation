import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const navigateToLogin = () => {
    navigation.navigate('LoginScreen');
  };
  const replaceToLogin = () => {
    navigation.replace('LoginScreen');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Splash Screen</Text>
      <Button title="Navigate to login" onPress={navigateToLogin} />
      <Button title="Replace to login" onPress={replaceToLogin} />
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

export default SplashScreen;
