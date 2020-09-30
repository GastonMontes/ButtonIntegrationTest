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

RCT_EXPORT_METHOD(configureSDKWithAppID:(NSString *)appId visualDebug:(BOOL *)debug) {
  dispatch_async(dispatch_get_main_queue(), ^{
    [[Button debug] setLoggingEnabled:YES];
    [[Button debug] setVisualDebuggingEnabled:debug];
    
    [Button configureWithApplicationId:appId completion:^(NSError *error) {
      if (error != nil) {
        NSLog(@"Error al inicializar la SDK de Button.");
      }
    }];
  });
}

RCT_EXPORT_METHOD(setIdentifier:(NSString *)userId) {
  [[Button user] setIdentifier:userId];
}

RCT_EXPORT_METHOD(clearAllData) {
  [Button clearAllData];
}

RCT_EXPORT_METHOD(purchaseRequest:(NSString *)url offerID:(NSString *)offerID publisherReference:(NSString *)pubRef) {
  // Step 1 - Create a Purchase Path request
  NSURL *url = [NSURL URLWithString:url];
  
  if (url != nil) {
    BTNPurchasePathRequest *request = [BTNPurchasePathRequest requestWithURL:url];
    
    // Step 2 - Associate the offerId
    request.offerId = offerID;
    
    // Optionally associate a unique token (e.g. campaign Id)
     request.pubRef = pubRef;
    
    // Step 3 - Fetch a Purchase Path object
    [Button.purchasePath fetchWithRequest:request purchasePathHandler:^(BTNPurchasePath *purchasePath, NSError *error) {
      // Step 4 - Start Purchase Path flow
      [purchasePath start];
    }
  }
}

@end
