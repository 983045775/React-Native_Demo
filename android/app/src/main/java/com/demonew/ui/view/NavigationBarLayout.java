package com.demonew.ui.view;


import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.demonew.R;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import kotlin.random.Random;

/**
 * @author lc
 * @description:
 * @date :2025/4/11 15:35
 */
public class NavigationBarLayout extends LinearLayout implements View.OnClickListener {

    private TextView mTvExport, mTvTitle;
    private Context context;

    public NavigationBarLayout(Context context) {
        super(context);
        initView(context);
        this.context = context;
        mTvExport = (TextView) findViewById(R.id.tv_export);
        mTvTitle = (TextView) findViewById(R.id.tv_title);
        mTvExport.setOnClickListener(this);
    }

    private void initView(Context context) {
        LayoutInflater.from(context).inflate(R.layout.layout_info, this);
    }

    @Override
    public void onClick(View view) {
        if (view == mTvExport) {
            int i = Random.Default.nextInt();
            String title = "随机变一个 = " + i;
            mTvTitle.setText(title);
            WritableMap writableMap = Arguments.createMap();
            writableMap.putString("title", title);
            ((ReactContext) context).getJSModule(RCTEventEmitter.class).receiveEvent(getId(), "onTitleChange", writableMap);
        }
    }
}
