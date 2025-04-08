package com.demonew.rn;

import android.content.Context;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

public class AppModule extends ReactContextBaseJavaModule {

    public Context mContext;

    public AppModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
        this.mContext = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return "AppModule";
    }

    @ReactMethod
    public void androidToast(String content, String contentTwo, Promise promise) {
        try {
            Toast.makeText(mContext, contentTwo, Toast.LENGTH_SHORT).show();
            promise.resolve("success");
        } catch (Exception e) {
            promise.reject(e);
            throw new RuntimeException(e);
        }
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        //在这里的常量可以让rn直接拿例如
        Map<String, Object> map = new HashMap<>();
        map.put("name", "刘铖");
        map.put("age", 23);
        return map;
    }
}
