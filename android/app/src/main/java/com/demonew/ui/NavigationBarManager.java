package com.demonew.ui;

import android.view.View;

import com.demonew.ui.view.NavigationBarLayout;
import com.facebook.react.bridge.ReadableArray;
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

    public static int CHANGE_COLOR = 1;
    public static int CHANGE_PHOTO = 2;

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

    @Override
    public void receiveCommand(@NonNull View view, int commandId, @Nullable ReadableArray args) {
        NavigationBarLayout layout = (NavigationBarLayout) view;
        if(commandId == CHANGE_COLOR){
            layout.setTitleColor(args.getString(0));
        }else if(commandId == CHANGE_PHOTO){
            layout.setPhoto(args.getString(0));
        }
    }

    @Nullable
    @Override
    public Map<String, Integer> getCommandsMap() {
        MapBuilder.Builder<String, Integer> map = MapBuilder.builder();
        map.put("chaneColor", CHANGE_COLOR);
        map.put("chanePhoto", CHANGE_PHOTO);
        return map.build();
    }
}
