package com.buttonintegration;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.usebutton.sdk.Button;

public class ButtonIntegrator extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    ButtonIntegrator(ReactApplicationContext context) {
        super(context);

        this.reactContext = context;
    }

    @Override
    public String getName() {
        return "ButtonIntegrator";
    }

    @ReactMethod
    public void configureSDKWithAppID(String appId, boolean debug) {
        if (BuildConfig.DEBUG) {
            Button.debug().setLoggingEnabled(true);
        }

        Button.debug().setVisualDebuggingEnabled(debug);
        Button.configure(this.reactContext.getApplicationContext(), appId);
    }

    @ReactMethod
    public void setIdentifier(String userId) { Button.user().setIdentifier(userId);
    }

    @ReactMethod
    public void clearAllData() {
        Button.clearAllData();
    }
}
