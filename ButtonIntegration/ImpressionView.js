import React from 'react';
import {requireNativeComponent} from 'react-native';

const RNTImpressionView = requireNativeComponent('RNTImpressionView');

export default class ImpressionView extends React.Component {
    configureWithDetails = (url, offerID, rate, rateFixed) => {
        UIManager.dispatchViewManagerCommand(
            ReactNative.findNodeHandle(this),
      UIManager.getViewManagerConfig('RNTImpressionViewManager').Commands
        .configureWithDetails,
      [url, offerID, rate, rateFixed],
    );
  };

  render() {
    return <RNTImpressionView />;
  }
}