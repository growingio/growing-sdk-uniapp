# uniapp Android集成文档

[官方参考文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/android)

两种方式：一种为依赖 Android Module 模式，可参考app 查看，另一种引入 aar 包，可参考app2查看。

## 方式一：依赖 Android Module

1. 在你的Android Studio 项目中导入 uniplugin_growingio 模块；
2. 在 app 模块的 build.gradle 中添加模块

```gradle
// 添加uni-app插件
implementation project(':uniplugin_growingio')
```

3. 在 `uniplugin_growingio` 模块的 `GrowingIOTrackAppProxy` 类里面进行 growingIo sdk 的初始化，具体可以参考[GrowingIO sdk 文档](https://docs.growingio.com/docs/developer-manual/sdkintegrated/android-sdk/manunl-android-sdk)

4. 在 app 模块下的 assets 的 dcloud_uniplugins.json 中添加插件

```json
{
  "nativePlugins": [
    {
      "hooksClass": "com.growingio.android.uniplugin.GrowingIOTrackAppProxy",
      "plugins": [
        {
          "type": "module",
          "name": "GrowingIO-Track",
          "class": "com.growingio.android.uniplugin.GrowingIOTrackModule"
        }
      ]
    }
  ]
}
```

5. 最后在你的vue文件中调用

```js
const growing = uni.requireNativePlugin('GrowingIO-Track');
growing.track({'eventId':'login'});
growing.printLog('这是 GrowingIO 模块的消息');
````

6. 最后根据官方调用原生插件的过程，将通过 HBuilderX 发行的 www 文件夹覆盖到 app 模块下的 www 后就可以运行查看结果。
[官方插件调试教程](https://nativesupport.dcloud.net.cn/NativePlugin/course/android?id=%e6%8f%92%e4%bb%b6%e8%b0%83%e8%af%95)

## 方式二：引入 aar 包

1. 在 你的项目的 libs 下放入 `growingio-uniplugin.aar` 包
2. 在 `build.gradle` 添加依赖

```groovy
//最新版本的growingio 埋点sdk 版本
implementation "com.growingio.android:vds-android-agent:track-2.9.13"
```

3. 在 `AndroidManifest.xml` 中配置项目

```xml
    <!--    growingIO 配置设置开始    -->
    <meta-data
        android:name="growing_android_account_id"
        android:value="9a7f70313f66fb62" />

    <meta-data
        android:name="growing_android_url_scheme"
        android:value="growing.4cf6e0a04c6a7b10" />

    <meta-data
        android:name="growing_android_debug"
        android:value="true" />

    <!--    growingIO 配置设置结束    -->
```
更多配置对应表

|  参数   | sdk 方法  |
|  ----  | ----  |
| growing_android_account_id  | setDeviceId |
| growing_android_url_scheme  | setURLScheme |
| growing_android_debug  | setDebugMode |
| growing_channel  | setChannel |
| growing_zone  | setZone |
| growing_gta_host  | setGtaHost |
| growing_data_host  | setDataHost |
| growing_report_host  | setReportHost |
| growing_ws_host  | setWsHost |
| growing_tracker_host  | setTrackerHost |
| growing_tracker_rnmode  | setRnMode |

4. 在 assets 的 dcloud_uniplugins.json 中添加插件

```json
{
  "nativePlugins": [
    {
      "hooksClass": "com.growingio.android.uniplugin.GrowingIOTrackConfigAppProxy",
      "plugins": [
        {
          "type": "module",
          "name": "GrowingIO-Track",
          "class": "com.growingio.android.uniplugin.GrowingIOTrackModule"
        }
      ]
    }
  ]
}
```