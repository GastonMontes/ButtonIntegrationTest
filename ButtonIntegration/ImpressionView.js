import React from 'react';
import {requireNativeComponent, UIManager, findNodeHandle} from 'react-native';

const RNTImpressionView = requireNativeComponent('RNTImpressionView');

export default class ImpressionView extends React.Component {
    configureWithDetails = (url, offerID, rate, rateFixed) => {
        UIManager.dispatchViewManagerCommand(
          findNodeHandle(this),
      UIManager.getViewManagerConfig('RNTImpressionViewManager').Commands
        .configureWithDetails,
      [url, offerID, rate, rateFixed],
    );
  };

  render() {
    return <RNTImpressionView {...this.props} />;
  }
}