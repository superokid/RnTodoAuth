import React, {PropsWithChildren} from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {}

const Layout: React.FC<PropsWithChildren<Props>> = ({children}) => {
  return <View style={styles.bg}>{children}</View>;
};

export default Layout;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
