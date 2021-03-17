<template>
	<view class="button-sp-area">
		<button type="primary" plain="true" @click="growingTest()">点击显示Toast</button>
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
			growingTest() {
			    growing.track({'eventId':'login'});
			    growing.printLog('这是 GrowingIO 模块的消息');
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
