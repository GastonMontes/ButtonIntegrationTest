/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import ImpressionView from './ImpressionView';

import {NativeModules, Platform, Button, Alert} from 'react-native';

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
  const appId =
    Platform.OS === 'ios' ? 'app-72cfec8514b9e0f9' : 'app-046f965b5b1f83a6';
  const buttonIntegrator = NativeModules.ButtonIntegrator;
  buttonIntegrator.configureSDKWithAppID(appId, true);
  buttonIntegrator.setIdentifier('65934f64-1a8f-443f-9985-f4d8d142f9db'); // hardcoded userId

  const impressionView1 = React.createRef();

  const mission = {
    brandName: 'Banana Republic',
    brandLogo:
      'https://speed-partners.syw.net/content/partners/202_walmart.jpg',
    brandDescription:
      "Members can now earn points by shopping Walmart through Shop Your Way. Browse Walmart's large selection at everyday low prices in categories like home and outdoor, electronics, clothingand other everyday essentials like household and personal care products.",
    brandCategories: ['Department Stores'],
    provider: 'nonbutton',
    offerCode: 'SOP972894_LF_BRND',
    image: 'https://speed-partners.syw.net/content/partners/202_new-image.jpg',
    name: 'Earn 28 points per dollar',
    description:
      'Shop in your favorite store and earn extra points on everything that’s in the store.',
    termsAndConditions:
      'Your points will be added to your Shop Your Way account 10 days after you complete your purchase. Earning everyday rewards on everyday purchases is now even easier with Shop Your Way! See Target.com for any discount and shipping details.',
    callToActionUrl: 'https://www.walmart.com/',
    pointsAwarded: {
      redemptionValue: 28,
      redemptionType: 'PointsPerDollar',
      conditions: [
        {
          category: 'Department Stores',
          redemptionValue: 28,
          redemptionType: 'PointsPerDollar',
        },
      ],
    },
    offerId: 'SYWMAX_Brand_70',
    validFrom: '2020-09-07T02:00:00Z',
    validUntil: '2021-10-01T02:00:59Z',
    rank: 243,
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <ImpressionView ref={impressionView1} style={{flex: 1, height: 50}}>
            <View style={styles.body}>
              <Text
                style={{
                  fontSize: 26,
                  color: '#262C2F',
                  marginBottom: 15,
                }}>
                {mission.brandDescription}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#909BA0',
                  lineHeight: 24,
                }}>
                {mission.description}
              </Text>

              <Text
                style={{
                  fontSize: 20,
                  color: '#262C2F',
                  marginBottom: 20,
                }}>
                How it works?
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 10,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#909BA0',
                    lineHeight: 24,
                    marginRight: 60,
                  }}>
                  Click on “Shop now” and just buy whatever you want. You’ll get
                  🚀 BOOSTED points in cashback on eligible purchases.
                </Text>
              </View>
              <View style={{flexDirection: 'row', paddingVertical: 10}}>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#909BA0',
                    lineHeight: 24,
                    marginRight: 60,
                  }}>
                  Stack your benefits purchasing with your SYW Credit card.
                </Text>
              </View>
              <View style={{flexDirection: 'row', paddingVertical: 10}}>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#909BA0',
                    lineHeight: 24,
                    marginRight: 60,
                  }}>
                  Remember to create and use your {mission.brandName} loyalty
                  card to earn extra points.
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 20,
                  color: '#262C2F',
                  marginBottom: 20,
                }}>
                Terms & Conditions
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#909BA0',
                  lineHeight: 24,
                }}>
                {mission.termsAndConditions}
              </Text>
            </View>
          </ImpressionView>
          <Button
            onPress={() => {
              impressionView1.current.configureWithDetails(
                'https://www.target.com/',
                'offer-G1YuJWxyAmVV0_1D0F1GaHDu2afTZsL7jwPFOhqOHsm0wmIFw3HBC',
                1.0,
                true,
                'hero',
              );
            }}
            title="Configure ImpressionView 1"
          />
          <Button
            onPress={() => {
              purchaseRequest = buttonIntegrator.purchaseRequest(
                'https://www.target.com/',
                'offer-G1YuJWxyAmVV0_1D0F1GaHDu2afTZsL7jwPFOhqOHsm0wmIFw3HBC',
                '',
              );
              console.log(purchaseRequest);
            }}
            title="Get Purchase path request"
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
