//
//  RNTImpressionViewManager.m
//  ButtonIntegration
//
//  Created by Gaston Montes on 11/09/2020.
//

#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import <React/RCTLog.h>

#import "RNTImpressionViewManager.h"
#import "RNTImpressionView.h"
#import "OfferDetail.h"

@implementation RNTImpressionViewManager

RCT_EXPORT_MODULE(RNTImpressionView)

- (UIView *)view {
  return [[RNTImpressionView alloc] init];
}

/// Configure the impression view with the given values.
/// @param reactViewTag Number - The ID of the react view.
/// @param url String - The URL for the Brand offer.
/// @param offerID String - The offer Id provided by the Button Personalization API.
/// @param rate Double - The rate visible to the user on your offer view.
/// @param rateIsFixed Bool - If the button rate type is fixed (true) or percentage (false). A percentage or fixed rate offer.
RCT_EXPORT_METHOD(configureWithDetails:(nonnull NSNumber *)reactTag
                  url:(NSString *)url
                  offerID:(NSString *)offerID
                  rate:(double)rate
                  isRateFixed:(BOOL)isFixed
                  creativeType:(NSString *)creativeType) {
  [self.bridge.uiManager addUIBlock:^(RCTUIManager *uiManager, NSDictionary<NSNumber *, UIView *> *viewRegistry) {
    UIView *view = viewRegistry[reactTag];
    
    if (!view || ![view isKindOfClass:[RNTImpressionView class]]) {
      RCTLogError(@"Cannot find NativeView with tag #%@", reactTag);
      return;
    }
    
    RNTImpressionView *impressionView = (RNTImpressionView *)view;
    OfferDetail *details = [[OfferDetail alloc] initWithURL:url
                                                    offerID:offerID
                                                       rate:rate
                                                rateIsFixed:isFixed
                                          offerCreativeType:creativeType];
    [impressionView configureWith:details];
  }];
}

@end
