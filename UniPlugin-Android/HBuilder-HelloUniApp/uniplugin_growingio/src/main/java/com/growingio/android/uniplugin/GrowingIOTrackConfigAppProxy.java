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
 * 插件使用入口
 */
public class GrowingIOTrackConfigAppProxy implements UniAppHookProxy {
    private static final String TAG = "TrackAppProxy";

    @Override
    public void onCreate(Application application) {
        try {
            PackageManager pm = application.getPackageManager();
            ApplicationInfo appInfo = pm.getApplicationInfo(application.getPackageName(), PackageManager.GET_META_DATA);
            String accountId = appInfo.metaData.getString("growing_android_account_id");
            String urlScheme = appInfo.metaData.getString("growing_android_url_scheme");
            if (TextUtils.isEmpty(accountId) || TextUtils.isEmpty(urlScheme)) {
                throw new IllegalArgumentException("accountId and urlScheme must not be null");
            }
            Configuration configuration = new Configuration();
            configuration.setProjectId(accountId);
            configuration.setURLScheme(urlScheme);
            boolean isDebug = appInfo.metaData.getBoolean("growing_android_debug", false);
            configuration.setDebugMode(isDebug);
            configuration.setTestMode(isDebug);
            String channel = appInfo.metaData.getString("growing_channel");
            if (!TextUtils.isEmpty(channel)) {
                configuration.setChannel(channel);
            }
            String zone = appInfo.metaData.getString("growing_zone");
            if (!TextUtils.isEmpty(zone)) {
                configuration.setZone(zone);
            }
            String gtaHost = appInfo.metaData.getString("growing_gta_host");
            if (!TextUtils.isEmpty(gtaHost)) {
                configuration.setGtaHost(gtaHost);
            }
            String dataHost = appInfo.metaData.getString("growing_data_host");
            if (!TextUtils.isEmpty(dataHost)) {
                configuration.setDataHost(dataHost);
            }
            String reportHost = appInfo.metaData.getString("growing_report_host");
            if (!TextUtils.isEmpty(reportHost)) {
                configuration.setReportHost(reportHost);
            }
            String wsHost = appInfo.metaData.getString("growing_ws_host");
            if (!TextUtils.isEmpty(wsHost)) {
                configuration.setWsHost(wsHost);
            }
            String trackerHost = appInfo.metaData.getString("growing_tracker_host");
            if (!TextUtils.isEmpty(trackerHost)) {
                configuration.setTrackerHost(trackerHost);
            }
            boolean rnMode = appInfo.metaData.getBoolean("growing_tracker_rnmode", true);
            configuration.setRnMode(rnMode);

            GrowingIO.startWithConfiguration(application, configuration);
        } catch (Throwable t) {
            Log.d(TAG, t.getMessage());
        }

    }

    @Override
    public void onSubProcessCreate(Application application) {
        //子进程初始化回调
    }
}
