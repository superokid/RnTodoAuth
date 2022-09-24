import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Button from '../components/Button';
import Layout from '../components/Layout';

const RouteWrapper = () => {
  const handleAuth = () => {};

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
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
});
