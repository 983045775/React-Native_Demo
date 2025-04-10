package com.demonew.ui.view;

import android.content.Context;
import android.graphics.Color;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Button;
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
 * @date :2025/4/8 20:02
 */
public class InfoView extends LinearLayout {
    private ImageView mIvPhoto;
    private TextView mTvName, mTvDesc;
    private Button mBtnClick;

    public InfoView(Context context) {
        super(context);
        initView(context);
        mIvPhoto = (ImageView) findViewById(R.id.iv_photo);
        mTvName = (TextView) findViewById(R.id.tv_name);
        mTvDesc = (TextView) findViewById(R.id.tv_desc);
        mBtnClick = (Button) findViewById(R.id.btn_click);
        mBtnClick.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View view) {
                click();
            }
        });
    }

    private void initView(Context context) {
        LayoutInflater.from(context).inflate(R.layout.view_info, this);
    }


    public void setUrl(String url) {
        Glide.with(this).load(url).into(mIvPhoto);
    }
    public void setNameColor(String color) {
        Toast.makeText(getContext(),"设置文字颜色了",Toast.LENGTH_SHORT).show();
        mTvName.setTextColor(Color.parseColor(color));
    }

    public void click() {
        ReactContext mContext = (ReactContext) getContext();
        WritableMap writableMap = Arguments.createMap();
        writableMap.putString("shape", "yuan" + Random.Default.nextInt());
        mContext.getJSModule(RCTEventEmitter.class).receiveEvent(getId(), "onChange", writableMap);
    }

    public void setName(String name) {
        mTvName.setText(name);

    }

    public void setDesc(String desc) {
        mTvDesc.setText(desc);
    }

    public void setNameName(String names) {
        mTvName.setText(names);
    }
}
