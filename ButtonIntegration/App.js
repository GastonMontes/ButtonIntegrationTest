/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NativeModules, Button } from 'react-native';

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
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <Button onPress={() => { 
              var buttonIntegrator = NativeModules.ButtonIntegrator;
              buttonIntegrator.initializeButtonSDKWithAppID('app-72cfec8514b9e0f9')
              }
            } title="Inicializar Button" />
            <Button onPress={() => { 
              var buttonIntegrator = NativeModules.ButtonIntegrator;
              buttonIntegrator.reportDummyImpression()
              }
            } title="Reportar impresión" />
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
