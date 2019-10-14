import React from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';

import Routes from '~/routes';

import Background from '~/components/Background';

export default function App() {
  return (
    <>
      <Background>
        <StatusBar barStyle="light-content" backgroundColor="#22202c" />
        <SafeAreaView style={styles.container}>
          <Routes />
        </SafeAreaView>
      </Background>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
