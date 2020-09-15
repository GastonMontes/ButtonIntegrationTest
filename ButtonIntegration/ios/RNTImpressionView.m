//
//  RNTImpressionView.m
//  ButtonIntegration
//
//  Created by Gaston Montes on 11/09/2020.
//

#import "RNTImpressionView.h"
#import "OfferDetail.h"

@import Button;

@interface RNTImpressionView ()

@property (nonatomic, strong) BTNImpressionView *impressionView;

@end

@implementation RNTImpressionView

- (instancetype)init {
  self = [super init];
  
  if (self != nil) {
    // Add a random color to the background of the view.
    CGFloat red = ( arc4random_uniform(256) / 255.0 );
    CGFloat green = ( arc4random_uniform(256) / 255.0 );
    CGFloat blue = ( arc4random_uniform(256) / 255.0 );
    self.backgroundColor = [UIColor colorWithRed:red green:green blue:blue alpha:1.0];
  }
  
  return self;
}

#pragma mark - ImpressionView functions.
- (void)createImpressionView {
  self.impressionView = [[BTNImpressionView alloc] initWithFrame:self.bounds];
  [self addSubview:self.impressionView];
  
  // Add constraints.
  self.impressionView.translatesAutoresizingMaskIntoConstraints = NO;
  
  [self.impressionView.topAnchor constraintEqualToAnchor:self.topAnchor constant:0].active = YES;
  [self.impressionView.leftAnchor constraintEqualToAnchor:self.leftAnchor constant:0].active = YES;
  [self.impressionView.topAnchor constraintEqualToAnchor:self.bottomAnchor constant:0].active = YES;
  [self.impressionView.rightAnchor constraintEqualToAnchor:self.rightAnchor constant:0].active = YES;
}

#pragma mark - Configuaration functions.
- (void)configureWith:(OfferDetail *)offerDetail {
  if (self.impressionView == nil) {
    [self createImpressionView];
  }
  
  BTNOfferDetails *details = [BTNOfferDetails detailsWithURL:offerDetail.offerDetailURL
                                                     offerId:offerDetail.offerDetailID
                                                 visibleRate:offerDetail.offerDetailRate
                                                    rateType:offerDetail.offerDetailType];
  self.impressionView.creativeType = offerDetail.offerCreativeType;
  [self.impressionView configureWithDetails:details];
}

@end
