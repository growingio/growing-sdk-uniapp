package com.growingio.android.uniplugin;

import android.app.Application;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.text.TextUtils;
import android.util.Log;

import com.growingio.android.sdk.collection.Configuration;
import com.growingio.android.sdk.collection.GrowingIO;

import io.dcloud.feature.uniapp.UniAppHookProxy;

/**
 * 作为模块代码入口
 */
public class GrowingIOTrackAppProxy implements UniAppHookProxy {
    private static final String TAG = "TrackAppProxy";

    @Override
    public void onCreate(Application application) {

        // 按照需要配置您的初始化代码,具体初始化参数可以参考官方埋点SDK文档
        // https://docs.growingio.com/docs/developer-manual/sdkintegrated/android-sdk/manunl-android-sdk
        Configuration configuration = new Configuration();
        configuration.setDeviceId("9a7f70313f66fb62");
        configuration.setURLScheme("growing.4cf6e0a04c6a7b10");
        configuration.setDebugMode(true);
        configuration.setRnMode()
        GrowingIO.startWithConfiguration(application, configuration);
    }


    @Override
    public void onSubProcessCreate(Application application) {
        //子进程初始化回调
    }
}
