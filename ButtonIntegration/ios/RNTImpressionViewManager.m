//
//  RNTImpressionViewManager.m
//  ButtonIntegration
//
//  Created by Gaston Montes on 11/09/2020.
//

#import "RNTImpressionViewManager.h"
#import "RNTImpressionView.h"

@implementation RNTImpressionViewManager

RCT_EXPORT_MODULE(RNTImpressionView)

- (UIView *)view {
  return [[RNTImpressionView alloc] init];
}

@end
