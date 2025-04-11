package com.demonew.ui.view;


import android.content.Context;
import android.graphics.Color;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.bumptech.glide.Glide;
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
    private ImageView mIvBack;

    public NavigationBarLayout(Context context) {
        super(context);
        initView(context);
        this.context = context;
        mTvExport = (TextView) findViewById(R.id.tv_export);
        mTvTitle = (TextView) findViewById(R.id.tv_title);
        mIvBack = (ImageView) findViewById(R.id.iv_back);
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

    public void setTitleColor(String color) {
        Toast.makeText(getContext(), "设置文字颜色了", Toast.LENGTH_SHORT).show();
        mTvTitle.setTextColor(Color.parseColor(color));
    }

    public void setPhoto(String url) {
        Log.e("lc", url);
        Glide.with(this).load(url).into(mIvBack);
    }
}
