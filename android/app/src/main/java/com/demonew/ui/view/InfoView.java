package com.demonew.ui.view;

import android.content.Context;
import android.view.LayoutInflater;
import android.widget.LinearLayout;

import com.demonew.R;

/**
 * @author lc
 * @description:
 * @date :2025/4/8 20:02
 */
public class InfoView extends LinearLayout {

    public InfoView(Context context) {
        super(context);
        initView(context);
    }

    private void initView(Context context) {
        LayoutInflater.from(context).inflate(R.layout.view_info, this);
    }


}
