<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<button @tap="setDataCollectionEnabled">关闭采集</button>
		<button @tap="setLoginUserId">设置用户ID</button>
		<button @tap="cleanLoginUserId">清除用户ID</button>
		<button @tap="setLocation">设置经纬度</button>
		<button @tap="trackCustomEvent">测试埋点</button>
		<button @tap="setLoginUserAttributes">设置用户属性</button>
		<button @tap="getDeviceId">获取设备ID</button>
		<button @tap="trackPage">发送预定义page事件</button>
	</view>
</template>

<script>
	import * as GrowingIO from "@/uni_modules/GrowingIO-Track"

	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
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
		},
		methods: {
			setDataCollectionEnabled() {
				GrowingIO.setDataCollectionEnabled(false)
			},
			setLoginUserId() {
				GrowingIO.setLoginUserId('user_id', 'user_key')
			},
			cleanLoginUserId() {
				GrowingIO.cleanLoginuserId()
			},
			setLocation() {
				GrowingIO.setLocation(100.0, 100.0)
			},
			trackCustomEvent() {
                GrowingIO.trackCustomEvent('event_name', {
					'attr_key': 'attr_value'
				})
            },
			setLoginUserAttributes() {
				GrowingIO.setLoginUserAttributes({
					'attr_key': 'attr_value'
				})
			},
			getDeviceId() {
				GrowingIO.getDeviceId()
				.then(data => {
					console.log(data);
				}).catch(e => {
					console.log(e);
				})
			},
			trackPage() {
				GrowingIO.trackPage('首页', {
					'page_key': 'page_value'
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
