package com.buttonintegration.Expose;

import android.content.Context;
import android.util.AttributeSet;

import com.buttonintegration.Model.OfferDetail;
import com.usebutton.sdk.impression.ImpressionView;
import com.usebutton.sdk.impression.OfferDetails;

public class RNTImpressionView extends ImpressionView {
    // Initialization.
    public RNTImpressionView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    // Button configuration function.
    public void configureWithDetails(OfferDetail detail) {
        OfferDetails details = new OfferDetails.Builder(detail.getOfferDetailURL(), detail.getOfferDetailID(), (float)detail.getOfferDetailRate(), detail.getOfferDetailType()).build();
        this.setCreativeType(detail.getOfferCreativeType());
        this.configureWith(details);
    }
}
