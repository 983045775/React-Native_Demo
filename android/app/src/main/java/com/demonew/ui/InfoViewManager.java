package com.demonew.ui;

import android.widget.LinearLayout;

import com.demonew.ui.view.InfoView;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;

import androidx.annotation.NonNull;

/**
 * @author lc
 * @description:
 * @date :2025/4/8 20:10
 */
public class InfoViewManager extends ViewGroupManager<LinearLayout> {
    @NonNull
    @Override
    public String getName() {
        return "infoViewManagers";
    }

    @NonNull
    @Override
    protected LinearLayout createViewInstance(@NonNull ThemedReactContext mContext) {
        return new InfoView(mContext);
    }
}
