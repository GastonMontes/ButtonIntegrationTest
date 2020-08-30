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

RCT_EXPORT_METHOD(initializeButtonSDKWithAppID:(NSString *)appID) {
  [[Button debug] setLoggingEnabled:YES];
  
  [[Button user] setIdentifier:@"UserIDPruebaIntegracion"];
  
  [Button configureWithApplicationId:appID completion:^(NSError *error) {
    if (error != nil) {
      NSLog(@"Error al inicializar la SDK de Button.");
    }
  }];
}

RCT_EXPORT_METHOD(reportDummyImpression) {
  dispatch_async(dispatch_get_main_queue(), ^{
     BTNImpressionView *impressionView = [[BTNImpressionView alloc] initWithCreativeType:BTNCreativeTypeHero];
     [impressionView trackWithURL:@"www.urlDePrueba.com"
                  visibleRateType:BTNVisibleRateTypePercent
                      visibleRate:0.55
                          offerId:@"IDInexistente"];
  });
}

@end
