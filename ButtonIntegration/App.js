/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NativeModules, Platform, Button } from 'react-native';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const appId = Platform.OS === 'ios' ? 'app-72cfec8514b9e0f9' : 'app-046f965b5b1f83a6';
  const buttonIntegrator = NativeModules.ButtonIntegrator;
  buttonIntegrator.configureSDK(appId, true);
  buttonIntegrator.setIdentifier('65934f64-1a8f-443f-9985-f4d8d142f9db'); // hardcoded userId

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <Button onPress={() => { buttonIntegrator.addImpression('www.test-url.com', 'percent', 0.5, "Test-OfferId") }} title="Reportar impresión" />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  }
});

export default App;
