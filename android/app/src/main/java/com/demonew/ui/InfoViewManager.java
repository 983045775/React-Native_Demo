package com.demonew.ui;

import android.util.Log;
import android.widget.LinearLayout;
import android.widget.Toast;

import com.demonew.ui.view.InfoView;
import com.facebook.react.bridge.ReadableArray;
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

    private final int SET_COLOR = 0;
    private final int SET_NAME = 1;

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

    /**
     * 注册本地给RN发送命令集
     *
     * @return
     */
    @Nullable
    @Override
    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder()
                .put("onChange",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", "onChange")
                        )
                ).build();
    }

    /**
     * 接收后, 处理命令集
     */
    @Override
    public void receiveCommand(@NonNull LinearLayout view, int commandId, @Nullable ReadableArray args) {
        Log.e("lc", "设置文字颜色了");
        InfoView mInfoView = (InfoView) view;
        switch (commandId) {
            case SET_COLOR:
                mInfoView.setNameColor(args.getString(0));
                break;
            case SET_NAME:
                mInfoView.setNameName(args.getString(0));
                break;

        }
        super.receiveCommand(view, commandId, args);
    }

    /**
     * 注册RN给本地发送命令集
     *
     * @return
     */
    @Nullable
    @Override
    public Map<String, Integer> getCommandsMap() {
        Map<String, Integer> map = MapBuilder.of("setColor", SET_COLOR,
                "setName", SET_NAME);
        return map;
    }
}
