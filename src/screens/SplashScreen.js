import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SplashScreen = () => {
  const navigation = useNavigation();
  const navigateToLogin = () => {
    navigation.navigate('LoginScreen');
  };
  const replaceToLogin = () => {
    navigation.replace('LoginScreen');
  };
  useEffect(() => {
    // / Untuk mengatur otomatis jalan fungsi
    setTimeout(() => {
      replaceToLogin();
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Icon name="aperture" size={30} color={'green'} />
      <Text style={styles.title}>Splash Screen</Text>
      {/* <Button title="Navigate to login" onPress={navigateToLogin} />
      <Button title="Replace to login" onPress={replaceToLogin} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
