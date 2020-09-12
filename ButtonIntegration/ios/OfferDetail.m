//
//  OfferDetail.m
//  ButtonIntegration
//
//  Created by Gaston Montes on 11/09/2020.
//

#import "OfferDetail.h"

@interface OfferDetail ()

@property (nonatomic, copy) NSString *offerDetailURL;
@property (nonatomic, copy) NSString *offerDetailID;
@property (nonatomic, assign) double offerDetailRate;
@property (nonatomic, assign) BTNVisibleRateType offerDetailType;

@end

@implementation OfferDetail

#pragma mark - Initialization.
- (instancetype)initWithURL:(NSString *)url offerID:(NSString *)offerID rate:(NSUInteger)rate rateIsFixed:(BOOL)isFixed {
  self = [super init];
  
  if (self != nil) {
    _offerDetailURL = url;
    _offerDetailID = offerID;
    _offerDetailRate = rate;
    _offerDetailType = (isFixed) ? BTNVisibleRateTypeFixed : BTNVisibleRateTypePercent;
  }
  
  return self;
}

@end
