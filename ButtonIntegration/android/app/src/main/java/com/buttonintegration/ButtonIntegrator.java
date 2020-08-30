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
    public void initializeButtonSDKWithAppID(String appID) {
        // Debugging enabled (do not include in production)
        if (BuildConfig.DEBUG) {
            Button.debug().setLoggingEnabled(true);
        }

        Button.user().setIdentifier("UserIDPruebaIntegracion-Android");

        Button.configure(this.reactContext.getApplicationContext(), appID);
    }

    @ReactMethod
    public void reportDummyImpression() {
        ImpressionView impressionView = new ImpressionView(this.reactContext.getApplicationContext());
        impressionView.setCreativeType(CreativeType.HERO);
        impressionView.track("www.urlDePrueba-android.com", VisibleRateType.PERCENT, 0.5f, "OfferIDInexistente-Android");
    }
}
