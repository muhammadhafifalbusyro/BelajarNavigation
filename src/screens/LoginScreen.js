import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userNameDefault = 'hafif1999';
  const passwordDefault = '12345';

  const login = () => {
    if (username == userNameDefault && password == passwordDefault) {
      navigation.navigate('MainScreen');
    } else {
      alert('Password atau username salah');
      return false;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{padding: 16}}>
        <Text style={styles.title}>Login Scren</Text>
        <TextInput
          placeholder="Username"
          placeholderTextColor={'grey'}
          style={styles.input}
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={'grey'}
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text>Login</Text>
        </TouchableOpacity>
      </ScrollView>
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
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    color: 'black',
    paddingHorizontal: 10,
    marginTop: 16,
    borderRadius: 10,
  },
  button: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
    marginTop: 16,
  },
});

export default LoginScreen;
