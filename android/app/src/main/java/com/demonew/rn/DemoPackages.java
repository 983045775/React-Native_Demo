package com.demonew.rn;

import androidx.annotation.NonNull;

import com.demonew.ui.InfoViewManager;
import com.demonew.ui.NavigationBarManager;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class DemoPackages implements ReactPackage {
    @NonNull
    @Override
    public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext mContext) {
        List<NativeModule> NativeModules = new ArrayList<>();
        NativeModules.add(new AppModule(mContext));
        return NativeModules;
    }

    @NonNull
    @Override
    public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactApplicationContext) {
        List<ViewManager> viewManagers = new ArrayList<>();
        viewManagers.add(new InfoViewManager());
        viewManagers.add(new NavigationBarManager());
        return viewManagers;
    }
}
