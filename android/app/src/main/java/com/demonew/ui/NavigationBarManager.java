package com.demonew.ui;

import android.view.View;

import com.demonew.ui.view.NavigationBarLayout;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;

import java.util.Map;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

/**
 * @author lc
 * @description:
 * @date :2025/4/11 15:34
 */
public class NavigationBarManager extends ViewGroupManager {
    @NonNull
    @Override
    public String getName() {
        return "NavigationBarManager";
    }

    @NonNull
    @Override
    protected View createViewInstance(@NonNull ThemedReactContext context) {
        return new NavigationBarLayout(context);
    }


    @Nullable
    @Override
    public Map<String, Object> getExportedCustomBubblingEventTypeConstants() {
        MapBuilder.Builder<String, Object> map = MapBuilder.builder();
        map.put("onTitleChange", MapBuilder.of("phasedRegistrationNames", MapBuilder.of("bubbled", "onTitleChange")));
        return map.build();
    }
}
