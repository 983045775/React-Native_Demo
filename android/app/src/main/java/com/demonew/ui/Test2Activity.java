package com.demonew.ui;

import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

import com.demonew.R;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

/**
 * @author lc
 * @description:
 * @date :2025/4/17 14:04
 */
public class Test2Activity extends AppCompatActivity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.test2_activity);
        TextView mTvTitle = (TextView) findViewById(R.id.tv_test2_title);
        Intent intent = getIntent();
        if (intent.getExtras() != null) {
            if (intent.getExtras().getString("title") != null) {
                String title = intent.getExtras().getString("title");
                mTvTitle.setText(title);
            }
        }

    }
}
