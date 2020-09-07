package com.buttonintegration;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


import com.usebutton.sdk.Button;
import com.usebutton.sdk.impression.CreativeType;
import com.usebutton.sdk.impression.ImpressionView;
import com.usebutton.sdk.impression.VisibleRateType;
import com.usebutton.sdk.impression.OfferDetails;

public class ButtonIntegrator extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    ButtonIntegrator(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "ButtonIntegrationExample";
    }

    @ReactMethod
    public void configureSDK(String appId, boolean debug) {
        if (BuildConfig.DEBUG) {
            Button.debug().setLoggingEnabled(true);
        }
        Button.debug().setVisualDebuggingEnabled(debug);

        Button.configure(this.reactContext.getApplicationContext(), appId);
    }

    @ReactMethod
    public void setIdentifier(String userId) {
        Button.user().setIdentifier(userId);
    }

    @ReactMethod
    public void clearAllData() {
        Button.clearAllData();
    }

    @ReactMethod
    public void addImpression(String url, String visibleRateType, float visibleRate, String offerId) {
        ImpressionView impressionView = new ImpressionView(this.reactContext.getApplicationContext());
        impressionView.setCreativeType(CreativeType.HERO);

        VisibleRateType getVisibleRateType = visibleRateType.equals("fixed") ? VisibleRateType.FIXED : VisibleRateType.PERCENT;

        OfferDetails offerDetails = new OfferDetails.Builder(url, offerId, visibleRate, getVisibleRateType).build();

        impressionView.configureWith(offerDetails);
    }
}
