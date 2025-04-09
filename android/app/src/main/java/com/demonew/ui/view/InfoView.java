package com.demonew.ui.view;

import android.content.Context;
import android.view.LayoutInflater;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.bumptech.glide.Glide;
import com.demonew.R;

/**
 * @author lc
 * @description:
 * @date :2025/4/8 20:02
 */
public class InfoView extends LinearLayout {
    private ImageView mIvPhoto;
    private TextView mTvName, mTvDesc;

    public InfoView(Context context) {
        super(context);
        initView(context);
        mIvPhoto = (ImageView) findViewById(R.id.iv_photo);
        mTvName = (TextView) findViewById(R.id.tv_name);
        mTvDesc = (TextView) findViewById(R.id.tv_desc);
    }

    private void initView(Context context) {
        LayoutInflater.from(context).inflate(R.layout.view_info, this);
    }


    public void setUrl(String url) {
        Glide.with(this).load(url).into(mIvPhoto);
    }
    public void setName(String name) {
        mTvName.setText(name);
    }
    public void setDesc(String desc) {
        mTvDesc.setText(desc);
    }
}
