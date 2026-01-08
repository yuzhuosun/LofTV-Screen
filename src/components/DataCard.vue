<template>
	<div class="data-card-container">
		<div class="data-card" :class="{ 'with-icon': icon }">
			<div class="card-icon" v-if="icon">
				<i :class="icon"></i>
			</div>
			<div class="card-content">
					<div class="card-title">{{ title }}</div>
				<div class="card-value" :style="{color: valueColor}">
					{{ value }}<span class="card-unit" v-if="unit">{{ unit }}</span>
				</div>
			
			</div>
		</div>
	</div>
</template>

<script>
	// 作者：json
	export default {
		name: 'DataCard',
		props: {
			// 卡片标题
			title: {
				type: String,
				required: true
			},
			// 卡片数值
			value: {
				type: [String, Number],
				required: true
			},
			// 数值单位
			unit: {
				type: String,
				default: ''
			},
			// 图标
			icon: {
				type: String,
				default: ''
			},
			// 数值颜色
			valueColor: {
				type: String,
				default: '#fff'
			},
			// 底部文字
			footer: {
				type: String,
				default: ''
			},
			// 趋势类型：up, down, flat
			trendType: {
				type: String,
				default: ''
			},
			// 趋势值
			trendValue: {
				type: String,
				default: ''
			}
		},
		computed: {
			trendIcon() {
				if (this.trendType === 'up') {
					return 'el-icon-caret-top'
				} else if (this.trendType === 'down') {
					return 'el-icon-caret-bottom'
				} else {
					return 'el-icon-minus'
				}
			}
		}
	}
</script>

<style scoped>
	.data-card-container {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		/* 可选：设置卡片之间的间距 */
		float: left;
	}

	.data-card {
		/* background: rgba(6, 30, 93, 0.5); */
		/* border: 1px solid #1d4584; */
		flex: 1;
		/* 让卡片自动填充容器宽度 */
		width: 126px;
		/* 设置最小宽度，防止过小 */
		border-radius: 4px;
		padding-top: 30px;
		height: 100%;
		flex-direction: column;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		transition: all 0.3s;
		box-sizing: border-box;
		/* 确保padding和border包含在宽度内 */
	}

	.data-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
		border-color: #40a9ff;
	}

	.data-card.with-icon {
		flex-direction: row;
	}

	.card-icon {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background: rgba(64, 169, 255, 0.2);
		display: flex;
		justify-content: center;
		align-items: center;
		/* margin-right: 15px; */
		margin: 0 auto;
	}

	.card-icon i {
		font-size: 30px;
		color: #40a9ff;
	}

	.card-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		margin-top: 18px;
		text-align: center;
	}

	.card-title {
		font-size: 18px;
		color: #fff;
		margin-bottom: 15px;
	}

	.card-value {
		font-size: 28px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.card-unit {
		font-size: 16px;
		font-weight: normal;
		margin-left: 5px;
		opacity: 0.7;
	}

	.trend {
		display: flex;
		align-items: center;
	}

</style>