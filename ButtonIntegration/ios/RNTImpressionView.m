//
//  RNTImpressionView.m
//  ButtonIntegration
//
//  Created by Gaston Montes on 11/09/2020.
//

#import "RNTImpressionView.h"

@import Button;

@interface RNTImpressionView ()

@property (nonatomic, strong) BTNImpressionView *impressionView;

@end

@implementation RNTImpressionView

- (instancetype)init {
  self = [super init];
  
  if (self != nil) {
    self.backgroundColor = UIColor.redColor;
  }
  
  return self;
}

#pragma mark - View life cycle.
- (void)layoutSubviews {
  self.impressionView = [[BTNImpressionView alloc] initWithCreativeType:BTNCreativeTypeHero];
  self.impressionView.backgroundColor = UIColor.greenColor;
  [self addSubview:self.impressionView];
  
  // Add constraints.
  self.impressionView.translatesAutoresizingMaskIntoConstraints = NO;
  
  [self.impressionView.topAnchor constraintEqualToAnchor:self.topAnchor constant:0].active = YES;
  [self.impressionView.leftAnchor constraintEqualToAnchor:self.leftAnchor constant:0].active = YES;
  [self.impressionView.topAnchor constraintEqualToAnchor:self.bottomAnchor constant:0].active = YES;
  [self.impressionView.rightAnchor constraintEqualToAnchor:self.rightAnchor constant:0].active = YES;
  
  self.impressionView.frame = self.frame;
}

@end
