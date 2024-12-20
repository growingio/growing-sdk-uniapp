# GrowingIO-Track
* 基于 uts 插件封装原生SDK

### 开发文档
[UTS 语法](https://uniapp.dcloud.net.cn/tutorial/syntax-uts.html)
[UTS API插件](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
[UTS 组件插件](https://uniapp.dcloud.net.cn/plugin/uts-component.html)
[Hello UTS](https://gitcode.net/dcloud/hello-uts)

 ### 集成步骤
1. 在根目录下新建 uni_modules 目录，如果已经存在可以直接进行 2
2. 将 GrowingIO-Track 插件目录复制到 uni_modules 目录下

#### 自定义基座
* 以下两种方式均支持进行相关测试工作
	* GrowingIO-Track 依赖的原生配置或三方SDK在运行至标准基座时不能生效，如需正常调用请使用自定义基座​请使用运行中自定义基座的方式打包好基座，然后运行时选择对应自定义基座
	* 官方支持 uts-ios/uts-android 扩展配置好相关环境，可以直接在iOS模拟器上进行相关测试

### 数据查看
* android
1. android 可以通过 android studio 中 logcat 或者 adb 查看相关SDK日志
* iOS
1. 在 GrowingIO-Track/utsdk/app-ios/config.json 中按照如下配置

```json
{
  "deploymentTarget": "10.0",
  "dependencies-pods": [
  	{
  	  "name": "GrowingAnalytics/Tracker",
  	  "version": "4.6.0-beta.1"
  	},
  	{
  	  "name": "GrowingAnalytics/UniApp",
  	  "version": "4.6.0-beta.1"
  	}
    // 增加 GIOKit 配置，用于查看相关 SDK 日志，避免携带到 release 环境
    // 目前不支持 pod 额外配置，官方群反馈后续版本会支持，目前请上线 releae 时请手动删除相关配置
    {
	  "name": "GrowingToolsKit",
	  "version": "2.0.2"
    }
  ]
}
```
2. 在 GrowingIO-Track/utsdk/app-ios/index.uts 中放开如下内容注释初始化 GIOKit
```uts
import { GrowingToolsKit } from 'GrowingToolsKit'
GrowingToolsKit.start()
```

### SDK API
#### startWithConfiguration
* 初始化 SDK，相关配置项如下

| 配置项                   | 参数类型  | 是否必填 | 默认值  | 说明  | 版本 |
| :-----------------------| :------: | :------: | :------: | :------ | :------ |
| accountId             | string           |    是    | null  | 项目ID，每个应用对应唯一值 | -     |
| dataSourceId          | string           |    是    | null  | 应用的DataSourceId，唯一值        |  -  |
| urlScheme             | string           |    是    | null  | 应用特有的URLScheme，用于外部应用拉起应用，如圈选   | -          |
| dataCollectionServerHost  | string       |    否    | null  | 服务端部署后的 ServerHost     |  -  |
| debugEnabled              | boolean         |    否    | false | 调试模式，会打印SDK log，抛出错误异常，在线上环境请关闭 | - |
| cellularDataLimit         | number          |    否    | 10    | 每天发送数据的流量限制，单位MB        | -  |
| dataUploadInterval        | number          |    否    | 15    | 数据发送的间隔，单位秒                | -          |
| sessionInterval           | number          |    否    | 30   | 会话后台留存时长，单位秒  |  - |
| dataCollectionEnabled     | boolean         |    否    | true  | 是否采集数据               |  - |
| dataValidityPeriod        | number         |    否    | 7  | 设置为上报数据在数据库的缓存时间，单位天               |  - |
| idMappingEnabled          | boolean         |    否    | false  | 是否开启多用户身份上报               |  - |
| channel                   | string         |    否    | null  | 设置应用的分发渠道               |  - |
| setImeiEnabled          | boolean         |    否    | false  | 是否采集IMEI信息，默认不采集              |  - |
| setAndroidIdEnabled          | boolean         |    否    | false  | 是否采集ANDROID_ID信息，默认不采集              |  - |
| setRequireAppProcessesEnabled          | boolean         |    否    | false  | 是否允许获取多进程ID               |  - |

* 参考代码如下
```js
import * as GrowingIO from "@/uni_modules/GrowingIO-Track"

GrowingIO.startWithConfiguration({
	accountId: 'a12345678',
	urlScheme: 'u12345678',
	dataSourceId: 'd12345678',
	debugEnabled: true,
	cellularDataLimit: 10 + 1,
	dataUploadInterval: 15 + 1,
	sessionInterval: 30 + 1,
	dataValidityPeriod: 7 + 1,
	dataCollectionEnabled: true,
	dataCollectionServerHost: "https://napi.growingio.com",
	idMappingEnabled: false,
	channel: 'App Store',
	androidIdEnabled: false,
	imeiEnabled: false,
	requireAppProcessesEnabled: false
})
```

#### setDataCollectionEnabled
* 打开或关闭数据采集

| 参数      | 参数类型  | 说明                                                 |
| :-------- | :-------- | :--------------------------------------------------- |
| `enabled` | `boolean` | `true`打开数据采集，`false`关闭数据采集，默认 `true` |

* 参考代码如下
```js
import * as GrowingIO from "@/uni_modules/GrowingIO-Track"

GrowingIO.setDataCollectionEnabled(false)
```


#### setLoginUserId
* 当用户登录之后调用，设置登录用户ID(注意：参数不可省略，参见注意事项)

| 参数      | 参数类型 | 说明                                                            |
| :-------- | :------- | :-------------------------------------------------------------- |
| `userId`  | `string` | 长度限制大于0且小于等于1000，如果大于长度1000将只截取前1000长度 |
| `userKey` | `string` | 适用于ID-MAPPING,可设置 `userId` 的类型,可选填                  |

* 参考代码如下
```js
import * as GrowingIO from "@/uni_modules/GrowingIO-Track"

GrowingIO.setLoginUserId('user_id', 'user_key')
// 不需要 userKey 参数时 传入 null
GrowingIO.setLoginUserId('user_id', null)
```

#### cleanLoginUserId
* 当用户登出之后调用，清除已经设置的登录用户ID。

* 参考代码如下
```js
import * as GrowingIO from "@/uni_modules/GrowingIO-Track"

GrowingIO.cleanLoginuserId()
```

#### setLocation
* 设置用户当前的地理位置，基于WGS-84坐标

| 参数        | 参数类型 | 说明           |
| :---------- | :------- | :------------- |
| `latitude`  | `number` | 地理坐标点纬度 |
| `longitude` | `number` | 地理坐标点经度 |

* 参考代码如下
```js
import * as GrowingIO from "@/uni_modules/GrowingIO-Track"

GrowingIO.setLocation(100.0, 100.0)
```

#### trackCustomEvent
* 发送一个埋点事件；注意：在添加发送的埋点事件代码之前，需在CDP平台事件管理界面创建埋点事件以及关联事件属性；
* 如果事件属性需关联维度表，请在事件属性下关联维度表（ CDP平台版本>= 2.1 ）
* 注意：参数不可省略，参见注意事项

| 参数         | 参数类型              | 说明                                                                                             |
| :----------- | :-------------------- | :----------------------------------------------------------------------------------------------- |
| `eventName`  | `string`              | 事件名，事件标识符                                                                               |
| `attributes` | `UTSJSONObject` | 事件发生时所伴随的属性信息；当事件属性关联有维度表时，属性值为对应的维度表模型ID(记录ID)（可选） |

* 参考代码如下
```js
import * as GrowingIO from "@/uni_modules/GrowingIO-Track"

GrowingIO.trackCustomEvent('event_name', {
	'attr_key': 'attr_value'
})

// 不需要 attributes 参数时 传入 null
GrowingIO.trackCustomEvent('event_name', null)
```

#### setLoginUserAttributes
* 发送登录用户属性事件，用于用户信息相关分析；
* 在添加发送用户属性事件代码之前，需在CDP平台用户管理界面创建用户属性。

| 参数         | 参数类型              | 说明         |
| :----------- | :-------------------- | :----------- |
| `attributes` | `UTSJSONObject` | 用户属性信息 |

* 参考代码如下
```js
import * as GrowingIO from "@/uni_modules/GrowingIO-Track"

GrowingIO.setLoginUserAttributes({
	'attr_key': 'attr_value'
})
```

#### getDeviceId
* 获取设备ID，又称为匿名用户ID，SDK 自动生成用来定义唯一设备。
* 如果没有初始化SDK 或者关闭采集开关可能返回值为null，且可能有IO操作。

* 参考代码如下
```js
import * as GrowingIO from "@/uni_modules/GrowingIO-Track"

GrowingIO.getDeviceId()
.then(data => {
	console.log(data);
}).catch(e => {
	console.log(e);
})
```

#### trackPage
* 发送预置 Page 事件，数据端会依据 Page 事件计算对应访问时长

| 参数         | 参数类型              | 说明         |
| :----------- | :-------------------- | :----------- |
| `pageName` | `string` | 页面名称 |
| `attributes` | `UTSJSONObject` | 页面属性信息 |

* 参考代码如下
```js
GrowingIO.trackPage('首页', {
	'page_key': 'page_value'
})
```

### 注意事项
1. 由于 uts 中 函数表达式定义的函数不支持默认值，并且直接导出的方法在android中无法支持默认值 [ISSUE-13341](https://issues.dcloud.net.cn/pages/issues/detail?id=13341) (4.29存在该问题，4.35.2024112402-alpha版本问题已经修复)，所以 trackCustomEvent 和 setLoginUserId 不能缺省参数调用
2. 建议升级 4.36，缺省参数可不传，目前事件属性、用户属性、页面属性均要求key、value为string类型

### 常见问题
1. android 本地编译出现找不到类找不到或其他编译错误，尝试删除 HBuilderX 相关缓存以及 gradle 缓存
```
cd /Users/xxx/Library/Application\ Support/HBuilder\ X/
rm -rf android_third_lib
rm -rf .uts-development-android

cd /Users/growingio/.gradle/caches/modules-2/files-2.1
rm -rf com.growingio.android
```

2. iOS 本地编译出现 cocopods 找不到对应库，uniapp 指定 source 'https://cdn.cocoapods.org/'
```
# Xcode 新建一个项目，指定 source 执行 pod install
source 'https://cdn.cocoapods.org/'
# Uncomment the next line to define a global platform for your project
# platform :ios, '9.0'

target 'Simple' do
  # Comment the next line if you don't want to use dynamic frameworks
  use_frameworks!

  # Pods for Simple
pod 'GrowingAnalytics/Tracker', '4.6.0-beta.1'
pod 'GrowingAnalytics/UniApp', '4.6.0-beta.1'
pod 'GrowingToolsKit', '2.0.2'

end
```