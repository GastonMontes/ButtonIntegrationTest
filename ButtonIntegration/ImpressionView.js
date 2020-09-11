import React from 'react';
import { requireNativeComponent } from 'react-native';

module.exports = requireNativeComponent('RNTImpressionView');

class ImpressionView extends React.Component {
    render() {
        return <RNTImpressionView />;
    }
}