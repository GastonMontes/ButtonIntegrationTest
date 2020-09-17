package com.buttonintegration.Expose;

import android.widget.LinearLayout;

import androidx.annotation.NonNull;

import com.buttonintegration.BuildConfig;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManager;
import com.usebutton.sdk.Button;

import java.util.Arrays;
import java.util.List;

public class RNTImpressionViewManager extends SimpleViewManager<RNTImpressionView> {
    public static final String REACT_CLASS = "RNTImpressionView";
    ReactApplicationContext mCallerContext;

    // Initialization.
    public RNTImpressionViewManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }

    // SimpleViewManager reimplemented methods.
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @NonNull
    @Override
    protected RNTImpressionView createViewInstance(@NonNull ThemedReactContext reactContext) {
        return new RNTImpressionView(mCallerContext, null);
    }

    public List<ViewManager> createViewManagers(
            ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(new RNTImpressionViewManager(reactContext));
    }

    // ImpressionView configuration
    @ReactMethod
    public void configureWithDetails(String appId, boolean debug) {
        this.bridge
    }
}