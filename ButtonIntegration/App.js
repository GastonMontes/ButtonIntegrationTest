/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import ImpressionView from './ImpressionView'

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
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <ImpressionView ref={this.impressionView1} style={{flex: 1, height: 50}} />
          <Button onPress={() => { this.impressionView1.configureWithDetails('url1', 'offerID1', 1.0, true) }} title="Configure ImpressionView 1" />

          <ImpressionView ref={this.impressionView2} style={{flex: 1, height: 50}} />
          <Button onPress={() => { this.impressionView2.configureWithDetails('url2', 'offerID2', 2.0, false) }} title="Configure ImpressionView 2" />
          
          <ImpressionView ref={this.impressionView3} style={{flex: 1, height: 50}} />
          <Button onPress={() => { this.impressionView3.configureWithDetails('url3', 'offerID3', 3.0, true) }} title="Configure ImpressionView 3" />
          
          <ImpressionView ref={this.impressionView4} style={{flex: 1, height: 50}} />
          <Button onPress={() => { this.impressionView4.configureWithDetails('url4', 'offerID4', 4.0, false) }} title="Configure ImpressionView 4" />
          
          <ImpressionView ref={this.impressionView5} style={{flex: 1, height: 50}} />
          <Button onPress={() => { this.impressionView5.configureWithDetails('url5', 'offerID5', 5.0, true) }} title="Configure ImpressionView 5" />
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
