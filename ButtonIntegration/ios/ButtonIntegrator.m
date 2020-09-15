//
//  ButtonIntegrator.m
//  ButtonIntegration
//
//  Created by Gaston Montes on 30/08/2020.
//


#import "ButtonIntegrator.h"

@import Button;

@implementation ButtonIntegrator

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(configureSDK:(NSString *) appId:(BOOL *)debug) {
  [[Button debug] setLoggingEnabled:YES];
  [[Button debug] setVisualDebuggingEnabled:debug];

  [Button configureWithApplicationId:appId completion:^(NSError *error) {
    if (error != nil) {
      NSLog(@"Error al inicializar la SDK de Button.");
    }
  }];
}

RCT_EXPORT_METHOD(setIdentifier:(NSString *)userId) {
  [[Button user] setIdentifier:userId];
}

RCT_EXPORT_METHOD(clearAllData) {
  [Button clearAllData];
}

RCT_EXPORT_METHOD(addImpression:(NSString *)url:(NSString *)visibleRateType:(double)visibleRate:(NSString *)offerId) {
  dispatch_async(dispatch_get_main_queue(), ^{
    BTNImpressionView *impressionView = [[BTNImpressionView alloc] initWithCreativeType:BTNCreativeTypeHero];

    BTNOfferDetails *details = [BTNOfferDetails detailsWithURL:url offerId:offerId visibleRate:visibleRate rateType:([visibleRateType isEqualToString:@"fixed"]) ? BTNVisibleRateTypeFixed : BTNVisibleRateTypePercent];

    [impressionView configureWithDetails:details];
  });
}

@end
