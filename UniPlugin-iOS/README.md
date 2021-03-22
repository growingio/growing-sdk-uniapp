# uniapp iOS集成文档


可以直接通过依赖插件来集成。

## 依赖 Library

请结合 [官方参考文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/ios) 来集成

1. 在你的 xcode 项目中导入 GrowingIOUniPlugin 库；
2. 按照参考文档，将项目与 GrowingIOUniPlugin 库建立连接；
3. 在 GrowingIOUniPlugin 中引入 GrowingIO sdk，集体可以查看 [GrowingIO iOS Sdk 集成](https://docs.growingio.com/v3/developer-manual/sdkintegrated/ios-sdk/auto-ios-sdk)。具体的代码配置在 `GrowingIOTrackProxy` 中。
4. 若是无法找到 `Growing.h` 文件，则需要在 Target `GrowingIOUniPlugin` => `Build Settings` => `Header Search Paths` 添加 `"$(SRCROOT)/Pods/Growing/PublicHeader"`路径并设为 recursive。
5. 在 HBuilder-Hello 项目中的 `HBuilder-uniPlugin-Info.plist` 中配置插件

```xml
<key>dcloud_uniplugins</key>
  <array>
    <dict>
      <key>hooksClass</key>
      <string>GrowingIOTrackProxy</string>
      <key>plugins</key>
      <array>
        <dict>
          <key>class</key>
          <string>GrowingIOTrackModule</string>
          <key>name</key>
          <string>GrowingIO-Track</string>
          <key>type</key>
          <string>module</string>
        </dict>
      </array>
    </dict>
  </array>
```

6. 最后可以通过运行 HBuilder 例子来查看结果。 
7. 若是运行出现无法找到 Growing 相关类的情况，则需要到 HBuilfer-uniPlugin `Target`  => `Build Phases` => `Link Binary With Libraries`  添加 `GrowingCoreKit.framework`。

## 更多说明
本例子只有 `GrowingIOUniplugin` 库 和 `HBuilder-Hello` 项目。主要的项目结构请以[官方参考文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/ios)给出的例子为主，官方例子解压后将 `GrowingIOUniplugin` 库导入和`HBuilder-Hello` 项目替换掉即可。
