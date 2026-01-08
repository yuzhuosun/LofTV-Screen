<!--
 * @Author: daidai
 * @Date: 2022-03-01 14:13:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-27 15:04:49
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\right-top.vue
-->


<!-- <template>
  <div class="component-list-item right-top-container">
    <div class="water-wave-chart">
      <div class="chart-box" ref="chart1"></div>
    </div>
  </div>
</template> -->
<template>
	<div class="component-list-item right-top-container">

		<div class="content-wrapper">
			<!-- 左侧文字信息 -->
			<div class="info-section">
				<div class="stats-container">
					<div class="stat-item good">
						<div class="stat-label">今日保养总数</div>
						<div class="stat-value">98台</div>
					</div>

					<div class="stat-item bad">
						<div class="stat-label">未完成</div>
						<div class="stat-value">8台</div>
					</div>
				</div>

			</div>

			<!-- 右侧水球图 -->
			<div class="water-wave-section">
				<div class="chart-box" ref="chart1"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import * as echarts from 'echarts';
	import 'echarts-liquidfill';

	export default {
		name: 'RightTop',
		data() {
			return {
				chart1: null,
				waterLevel: 0.918
			};
		},
		mounted() {
			this.$nextTick(() => {
				this.initChart();
			});
		},
		beforeDestroy() {
			if (this.chart1) {
				this.chart1.dispose();
			}
		},
		methods: {
			initChart() {
				this.chart1 = echarts.init(this.$refs.chart1);
				this.updateChart();
				window.addEventListener('resize', this.handleResize);
			},
			updateChart() {
				const option = {
					series: [{
						type: 'liquidFill',
						data: [this.waterLevel],
						radius: '90%',
						center: ['50%', '50%'],
						label: {
							show: true,
							formatter: (this.waterLevel * 100).toFixed(0) + '%',
							fontSize: 24,
							color: '#fff',
							fontWeight: 'bold'
						},
						itemStyle: {
							color: '#00c9ff',
							opacity: 0.8,
							shadowBlur: 10,
							shadowColor: '#00c9ff'
						},
						backgroundStyle: {
							color: 'rgba(0, 123, 255, 0.1)',
							borderWidth: 1,
							borderColor: 'rgba(0, 201, 255, 0.3)'
						},
						outline: {
							show: true,
							borderDistance: 0,
							itemStyle: {
								borderWidth: 2,
								borderColor: '#00c9ff'
							}
						},
						emphasis: {
							itemStyle: {
								opacity: 0.9
							}
						}
					}]
				};

				this.chart1.setOption(option);
			},
			handleResize() {
				if (this.chart1) {
					this.chart1.resize();
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	.right-top-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		padding: 10px;
		box-sizing: border-box;


		.content-wrapper {
			display: flex;
			height: calc(100% - 50px);

			// 左侧文字信息
			.info-section {
				flex: 1;
				display: flex;
				flex-direction: column;
				padding: 10px;

				.time-tabs {
					display: flex;
					margin-bottom: 20px;
					background: rgba(0, 123, 255, 0.1);
					border-radius: 4px;
					padding: 4px;


				}

				.stats-container {
					margin-top: 20px;
				
					.stat-item{
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 16px 8px;
						margin: 12px 0;
						border-bottom: 1px solid rgba(255, 255, 255, 0.1);
						border-radius: 5px;

						.stat-label {
							font-size: 18px;
							color: #fff;
						}

						.stat-value {
							font-size: 20px;
							color: #00f7f6;
							font-weight: bold;
						}
					}
					.good{
						background-color: #5f88af;
					}
					.bad{
						background-color: #d688ac;
					}
				}

			}

			// 右侧水球图
			.water-wave-section {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 10px;
				margin-top: 10px;

				.chart-box {
					width: 100%;
					height: 100%;
					max-width: 200px;
					max-height: 200px;
				}
			}
		}
	}

	// 响应式调整
	@media (max-width: 1400px) {
		.content-wrapper {
			flex-direction: column !important;

			.info-section {
				height: 60% !important;
			}

			.water-wave-section {
				height: 40% !important;

				.chart-box {
					max-width: 150px !important;
					max-height: 150px !important;
				}
			}
		}
	}
</style>