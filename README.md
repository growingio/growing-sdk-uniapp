### DCloud-growingio
* DCloud封装growingio sdk插件

### 集成文档
* HBuilderX中在manifest.json中选择App原生插件配置, 并将必填字段进行填写
    * growing_android_account_id 即项目id, 可在官网查看
    * growing_ios_account_id 即项目id, 可在官网查看
    * growing_android_url_scheme 即android项目的urlscheme
    * 其余字段均为可选字段, 除debug字段外(默认为非debug模式), 服务器地址配置默认都是当前SaaS地址(无需额外配置)
* HBuilderX中配置唤醒urlscheme
    * manifest.json中选择App常用其它设置
        * Android设置中UrlSchemes配置官网提供的android项目urlscheme
        * iOS设置中UrlSchemes配置官网提供的ios项目urlscheme
* 其它调用请参考[官方文档](https://docs.growingio.com/v3/developer-manual/sdkintegrated/otherframe-sdk/weex-sdk)
    * 因为都是基于weex的, 所有调用上是相同的, 仅需参考文档中调用方式(即仅参考文档中第二部分调用, 忽略第一部分集成)
    
```Vue.js
gio = uni.requireNativePlugin('GrowingIO-Tracker')
gio.track({'eventId':'activate'});
```