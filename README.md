# DCloud-growingio
* DCloud封装growingio sdk插件

## 集成文档
* HBuilderX中在manifest.json中选择本地原生插件配置, 并将必填字段进行填写
    * growing_android_account_id 即项目id, 可在官网查看
    * growing_ios_account_id 即项目id, 可在官网查看
    * growing_android_url_scheme 即android项目的urlscheme
    * 其余字段均为可选字段, 除debug字段外(默认为非debug模式), 服务器地址配置默认都是当前SaaS地址(无需额外配置)
* HBuilderX中配置唤醒urlscheme
    * manifest.json中选择App常用其它设置
        * Android设置中UrlSchemes配置官网提供的android项目urlscheme
        * iOS设置中UrlSchemes配置官网提供的ios项目urlscheme
    
```Vue.js
gio = uni.requireNativePlugin('GrowingIO-Track')
gio.track({'eventId':'activate'});

//自定义参数
gio.track({
   "eventId": "custom",
   "eventLevelVariable": {
      "grow_index": "苹果",
      "grow_click": 14
   }
});
```

## 关于插件说明
插件位于 release 文件夹下。  
该插件用于 HBuilder 云打包使用，而且仅在云打包情况下，manifest.json 下的参数设置才能在app中生效。

若是自己使用工具（Android Studio 或者 Xcode）打包可以参考 [UniPlugin-Android](https://github.com/growingio/growing-sdk-uniapp/tree/main/UniPlugin-Android) 和 [UniPlugin-iOS](https://github.com/growingio/growing-sdk-uniapp/tree/main/UniPlugin-iOS) 两个例子进行集成。

## 版本信息
* Uni SDK 基于 3.6.4 版本
* Android SDK 基于 2.9.13 版本
* iOS SDK 基于 2.9.13 版本

## 注意信息
iOS Demo 需要下载对应版本 Uni SDK 到 UniPlugin-iOS/SDK目录中

## 自定义基座运行 UnipluginDemo
* 新增nativeplugins文件，并将release/GrowingIO-Track移动到该目录下
* 重新构建自定义基座