package com.demonew.ui;

import android.widget.LinearLayout;

import com.demonew.ui.view.InfoView;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

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

    @ReactProp(name = "photo")
    public void setPhoto(InfoView view, String url) {
        view.setUrl(url);
    }

    @ReactProp(name = "name")
    public void setName(InfoView view, String name) {
        view.setName(name);
    }

    @ReactProp(name = "desc")
    public void setDesc(InfoView view, String desc) {
        view.setDesc(desc);
    }

    @Nullable
    @Override
    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder()
                .put("change",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", "change")
                        )
                ).build();
    }
}
