package com.demonew.ui;

import com.demonew.ui.view.InfoView;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import androidx.annotation.NonNull;

/**
 * @author lc
 * @description:
 * @date :2025/4/8 20:10
 */
public class InfoViewManager extends SimpleViewManager<InfoView> {
    @NonNull
    @Override
    public String getName() {
        return "infoViewManagers";
    }

    @NonNull
    @Override
    protected InfoView createViewInstance(@NonNull ThemedReactContext mContext) {
        return new InfoView(mContext);
    }
}
