<template>
	<view class="button-sp-area">
		<button type="primary" plain="true" @click="startTest()">初始化SDK</button>
		<button type="primary" plain="true" @click="enableTest()">开启采集</button>
		<button type="primary" plain="true" @click="disableTest()">关闭采集</button>
		<button type="primary" plain="true" @click="trackTest()">发送track事件</button>
	</view>
</template>

<script>
	const modal = uni.requireNativePlugin('modal');
	const growing = uni.requireNativePlugin('GrowingIO-Track');
	export default {
		data() {
			return {
				title: ''
			}
		},
		onLoad() {

		},
		methods: {
			startTest() {
				// 支持如下配置
				// enableLog 是否开始调试日志
				// androidEnableAndroidId 是否采集androidId
				// androidEnableImei 是否采集imei
				// androidEnableOaid 是否采集oaid
				// androidEnableReadClipBoard 是否开启延迟深度链接（涉及获取剪切板）
				growing.startWithAccountId('9a7f70313f66fb62', {'enableLog':true, 'androidEnableAndroidId': false, 'androidEnableOaid': false, 'androidEnableReadClipBoard': false})
			},
			enableTest() {
				growing.enableDataCollect();
			},
			disableTest() {
				growing.disableDataCollect();
			},
			trackTest() {
				growing.printLog('这是 GrowingIO 模块的消息');
			    growing.track({'eventId':'login'});
			},
		}
	}
</script>

<style>
	button {
		margin-top: 30upx;
		margin-bottom: 30upx;
	}

	.button-sp-area {
		margin: 0 auto;
		width: 60%;
	}

	.content {
		text-align: center;
		height: 400upx;
	}

	.wrapper {
		flex-direction: column;
		justify-content: center;
	}

	.button {
		width: 200px;
		margin-top: 30px;
		margin-left: 20px;
		padding-top: 20px;
		padding-bottom: 20px;
		border-width: 2px;
		border-style: solid;
		border-color: #458B00;
		background-color: #458B00;
	}

	.text {
		font-size: 30px;
		color: #666666;
		text-align: center;
	}
</style>
