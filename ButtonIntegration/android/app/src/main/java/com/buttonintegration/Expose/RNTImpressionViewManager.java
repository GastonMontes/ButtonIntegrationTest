package com.buttonintegration.Expose;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;

public class RNTImpressionViewManager extends ViewGroupManager<RNTImpressionView> {
    public static final String REACT_CLASS = "RNTImpressionView";
    ReactApplicationContext callerContext;

    // Initialization.
    public RNTImpressionViewManager(ReactApplicationContext reactContext) {
        callerContext = reactContext;
    }

    // SimpleViewManager reimplemented methods.
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @NonNull
    @Override
    protected RNTImpressionView createViewInstance(@NonNull ThemedReactContext reactContext) {
        return new RNTImpressionView(callerContext, null);
    }

    // ImpressionView configuration
    public void configureWithDetails(String url, String offerID, double rate, boolean isRateFixed, String creativeType) {
    }

    @Override
    public void receiveCommand(RNTImpressionView view, String commandId, @Nullable ReadableArray args) {
        super.receiveCommand(view, commandId, args);

        switch (commandId) {
            case "configureWithDetails":
                view.configureWithDetails(null);
                break;
        }
    }
}
