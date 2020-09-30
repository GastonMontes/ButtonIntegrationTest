package com.buttonintegration;

import android.content.Context;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.usebutton.sdk.Button;
import com.usebutton.sdk.purchasepath.PurchasePath;
import com.usebutton.sdk.purchasepath.PurchasePathListener;
import com.usebutton.sdk.purchasepath.PurchasePathRequest;

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

    @ReactMethod
    public void purchaseRequest(String url, String offerID, String publisherReference) {
        // Step 1 - Create a Purchase Path request
        PurchasePathRequest request = new PurchasePathRequest(url);

        // Step 2 - Associate the offerId
        request.setOfferId(offerID);

        // Optionally associate a unique token (e.g. campaign Id)
        request.setPubRef(publisherReference);

        // Step 3 - Fetch a Purchase Path object
        Button.purchasePath().fetch(request, new PurchasePathListener() {
            @Override
            public void onComplete(@Nullable PurchasePath purchasePath, @Nullable Throwable throwable) {
                // Step 4 - Start Purchase Path flow
                if (purchasePath != null) {
                    purchasePath.start(reactContext);
                }
            }
        });
    }
}
