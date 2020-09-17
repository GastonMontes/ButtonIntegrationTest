import React from 'react';
import { requireNativeComponent, UIManager, findNodeHandle } from 'react-native';

const RNTImpressionView = requireNativeComponent('RNTImpressionView');

export default class ImpressionView extends React.Component {
    configureWithDetails = (url, offerID, rate, rateFixed, creativeType) => {
        UIManager.dispatchViewManagerCommand(
          findNodeHandle(this), 
          UIManager.getViewManagerConfig('RNTImpressionView').Commands.configureWithDetails,
          [url, offerID, rate, rateFixed, creativeType],
    );
  };

  render() {
    return <RNTImpressionView {...this.props} />;
  }
}