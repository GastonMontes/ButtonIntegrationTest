/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import ImpressionView from './ImpressionView';

import { NativeModules, Platform, Button, Alert } from 'react-native';

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
  buttonIntegrator.configureSDKWithAppID(appId, true);
  buttonIntegrator.setIdentifier('65934f64-1a8f-443f-9985-f4d8d142f9db'); // hardcoded userId

  const impressionView1 = React.createRef();
  const impressionView2 = React.createRef();
  const impressionView3 = React.createRef();
  const impressionView4 = React.createRef();
  const impressionView5 = React.createRef();
  const impressionView6 = React.createRef();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <ImpressionView ref={impressionView1} style={{flex: 1, height: 50}}>
            <Text style={{color: 'white', textAlign: 'center'}}>Impression View 1 Content</Text>
            <Button onPress={() => Alert.alert('Impression Pressed')} title='Inside Impression' />
          </ImpressionView>
          <Button onPress={() => { impressionView1.current.configureWithDetails('url1', 'offerID1', 1.0, true, 'hero') }} title="Configure ImpressionView 1" />

          <ImpressionView ref={impressionView2} style={{flex: 1, height: 50}}>
            <Text style={{color: 'white', textAlign: 'center'}}>Impression View 2 Content</Text>
          </ImpressionView>
          <Button onPress={() => { impressionView2.current.configureWithDetails('url2', 'offerID2', 2.0, false, 'carousel') }} title="Configure ImpressionView 2" />
          
          <ImpressionView ref={impressionView3} style={{flex: 1, height: 50}}>
            <Text style={{color: 'white', textAlign: 'center'}}>Impression View 3 Content</Text>
          </ImpressionView>
          <Button onPress={() => { impressionView3.current.configureWithDetails('url3', 'offerID3', 3.0, true, 'list') }} title="Configure ImpressionView 3" />
          
          <ImpressionView ref={impressionView4} style={{flex: 1, height: 50}}>
            <Text style={{color: 'white', textAlign: 'center'}}>Impression View 4 Content</Text>
          </ImpressionView>
          <Button onPress={() => { impressionView4.current.configureWithDetails('url4', 'offerID4', 4.0, false, 'grid') }} title="Configure ImpressionView 4" />
          
          <ImpressionView ref={impressionView5} style={{flex: 1, height: 50}}>
            <Text style={{color: 'white', textAlign: 'center'}}>Impression View 5 Content</Text>
          </ImpressionView>
          <Button onPress={() => { impressionView5.current.configureWithDetails('url5', 'offerID5', 5.0, true, 'detail') }} title="Configure ImpressionView 5" />

          <ImpressionView ref={impressionView6} style={{flex: 1, height: 50}}>
            <Text style={{color: 'white', textAlign: 'center'}}>Impression View 6 Content</Text>
          </ImpressionView>
          <Button onPress={() => { impressionView6.current.configureWithDetails('url6', 'offerID6', 6.0, true, 'other') }} title="Configure ImpressionView 6" />
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
