import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import Button from '../components/Button';
import Layout from '../components/Layout';

const RouteWrapper = () => {
  const handleAuth = async () => {
    console.log('click');
    try {
      // const hasHardware = await LocalAuthentication.hasHardwareAsync();
      // console.log(hasHardware);
      const securityLevel = await LocalAuthentication.getEnrolledLevelAsync();
      console.log(securityLevel);
      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Login with Biometrics',
        disableDeviceFallback: false,
        cancelLabel: 'Cancel',
      });

      console.log(biometricAuth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Set Authentication to Proceed</Text>
        <Button text="Go to Settings" onPress={handleAuth} />
      </View>
    </Layout>
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
