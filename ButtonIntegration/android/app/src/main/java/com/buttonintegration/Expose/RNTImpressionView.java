package com.buttonintegration.Expose;

import android.content.Context;
import android.util.AttributeSet;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import com.buttonintegration.Model.OfferDetail;
import com.usebutton.sdk.impression.ImpressionView;
import com.usebutton.sdk.impression.OfferDetails;

public class RNTImpressionView extends ViewGroup {
    private ImpressionView impressionView;

    // Initialization.
    public RNTImpressionView(Context context, AttributeSet attrs) {
        super(context, attrs);

        this.impressionView = new ImpressionView(context);
    }

    @Override
    protected void onLayout(boolean changed, int left, int top, int right, int bottom) {
        LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT);
        this.impressionView.setLayoutParams(layoutParams);
        this.addView(this.impressionView, 0);
    }

    // Button configuration function.
    public void configureWithDetails(OfferDetail detail) {
        OfferDetails details = new OfferDetails.Builder(detail.getOfferDetailURL(), detail.getOfferDetailID(), (float)detail.getOfferDetailRate(), detail.getOfferDetailType()).build();
        this.impressionView.setCreativeType(detail.getOfferCreativeType());
        this.impressionView.configureWith(details);
    }
}
