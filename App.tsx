/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigators from './components/navigators/Navigations';

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Navigators />
    </SafeAreaView>
  );
};
const styles: any = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
export default App;
