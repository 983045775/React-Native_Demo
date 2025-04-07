package com.demonew;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

public class MainActivity extends ReactActivity {

    /**
     * 返回JavaScript中注册的主组件名称。用于调度组件的渲染
     */
    @Override
    protected String getMainComponentName() {
        return "demoNew";
    }

    /**
     * 返回[ReactActivityDelegate]实例。我们使用[DefaultReactActivityDelegate]
     * 允许通过[fabricEnabled]布尔标志启用新架构（New Architecture）
     */
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new DefaultReactActivityDelegate(
                this,
                getMainComponentName(),
                DefaultNewArchitectureEntryPoint.getFabricEnabled()
        );
    }
}
