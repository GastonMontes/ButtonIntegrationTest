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

@end
