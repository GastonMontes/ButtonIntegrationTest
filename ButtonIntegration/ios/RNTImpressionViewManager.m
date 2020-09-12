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
/// @param detailsURL String - The URL for the Brand offer.
/// @param offerID String - The offer Id provided by the Button Personalization API.
/// @param visibleRate Double - The rate visible to the user on your offer view.
/// @param rateIsFixed Bool - If the button rate type is fixed (true) or percentage (false). A percentage or fixed rate offer.
/// @param reactViewTag Number - The ID of the react view.
RCT_EXPORT_METHOD(configureWithDetailsURL:(NSString *)detailsURL
                  offerID:(NSString *)offerID
                  visibleRate:(NSUInteger)visibleRate
                  rateIsFixed:(double)rateIsFixed
                  reactViewTag:(NSNumber *)reactViewTag) {
  [self.bridge.uiManager addUIBlock:^(RCTUIManager *uiManager, NSDictionary<NSNumber *,UIView *> *viewRegistry) {
    UIView *view = viewRegistry[reactViewTag];
    
    if (!view || ![view isKindOfClass:[RNTImpressionView class]]) {
      RCTLogError(@"Cannot find NativeView with tag #%@", viewRegistry);
      return;
    }
    
    OfferDetail *details = [[OfferDetail alloc] initWithURL:detailsURL
                                                    offerID:offerID
                                                       rate:visibleRate
                                                rateIsFixed:rateIsFixed];
    
    RNTImpressionView *impressionView = (RNTImpressionView *)view;
    [impressionView configureWith:details];
  }];
}

RCT_EXPORT_METHOD(configureWithDetails:(nonnull NSNumber *)reactTag
                  commandID:(NSInteger)commandID
                  commandArgs:(NSArray<id> *)commandArgs) {
  [self.bridge.uiManager addUIBlock:^(RCTUIManager *uiManager, NSDictionary<NSNumber *,UIView *> *viewRegistry) {
    UIView *view = viewRegistry[reactTag];
    
    if (!view || ![view isKindOfClass:[RNTImpressionView class]]) {
      RCTLogError(@"Cannot find NativeView with tag #%@", reactTag);
      return;
    }
    
    RNTImpressionView *impressionView = (RNTImpressionView *)view;
    NSLog(impressionView.description);
  }];
  
}

@end
