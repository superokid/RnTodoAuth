import React, {useState} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import Button from '../components/Button';
import Todo from '../pages/Todo/Todo';

const RouteWrapper = () => {
  const [isAuth, setAuth] = useState(false);

  const handleAuth = async () => {
    try {
      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Login with Biometrics',
        disableDeviceFallback: false,
        cancelLabel: 'Cancel',
      });

      if (biometricAuth.success) {
        setAuth(true);
      }
    } catch (err) {
      Alert.alert('login error', JSON.stringify(err));
    }
  };

  if (isAuth) {
    return <Todo />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Authentication to Proceed</Text>
      <Button text="Go to Settings" onPress={handleAuth} />
    </View>
  );
};

export default RouteWrapper;

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 18,
    color: '#000',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
});
