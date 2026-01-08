<!--
 * @Author: daidai
 * @Date: 2022-03-04 09:23:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-07 11:05:02
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\index.vue
-->
<template>
	<div class="contents">
		<div class="content-name">
			<ItemWrap class="contetn_left-bottom contetn_lr-item" style="font-size: 20px; height: 280px;"
				title="电梯数据监控">
				<div class="energy-header">
					<data-card v-for="(card, index) in energyCards" :key="index" :title="card.title" :value="card.value"
						:unit="card.unit" :icon="card.icon" :value-color="card.valueColor" :footer="card.footer"
						:trend-type="card.trendType" :trend-value="card.trendValue" />
				</div>
			</ItemWrap>
		</div>
		<div class="contents" style="display: flex;">
			<div class="contetn_left">
				<ItemWrap class="contetn_left-top contetn_lr-item monitor-content" title="设备运行信息"
					style="height: 660px;">

					<div class="equipment-status">
						<div class="status-header">
							<h3>设备运行状态</h3>
							<div class="status-legend">
								<span class="legend-item">
									<span class="dot running"></span>运行中
								</span>
								<span class="legend-item">
									<span class="dot idle"></span>空闲
								</span>
								<span class="legend-item">
									<span class="dot maintenance"></span>维护中
								</span>
								<span class="legend-item">
									<span class="dot fault"></span>故障
								</span>
							</div>
						</div>

						<div class="equipment-list">
							<div v-for="(item, index) in equipmentList" :key="index" class="equipment-item">
								<div class="equipment-name">{{ item.name }}</div>
								<div class="equipment-info">
									<div class="status-indicator" :class="item.status"></div>
									<div class="equipment-details">
										<div class="detail-item">
											<span class="label">运行时间:</span>
											<span class="value">{{ item.runTime }}</span>
										</div>
										<div class="detail-item">
											<span class="label">效率:</span>
											<span class="value">{{ item.efficiency }}%</span>
										</div>
										<div class="detail-item">
											<span class="label">温度:</span>
											<span class="value"
												:class="{'warning': item.temperature > 75}">{{ item.temperature }}°C</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>


				</ItemWrap>



			</div>


			<div class="contetn_center" style="width: 1050px;">
				<div class="contetn_center">
					<div style="display: flex; justify-content: space-between; gap: 10px;">
						<div style="flex: 1;display: flex;">
							<ItemWrap class="contetn_center-top" title="电梯故障类型" style="display: flex;">

								<RightCenter />
							</ItemWrap>
						</div>

						<div style="flex: 1; display: flex;">
							<ItemWrap class="contetn_center-top" title="电梯故障处理TOP5" style=" width: 100%;">
								<div class="chart-item quality-table-container">
									<div class="quality-table">
										<table>
											<thead>
												<tr>
													<th>序号</th>
													<th>问题类型</th>
													<th>发生次数</th>
													<th>占比</th>
													<th>状态</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="(item, index) in qualityIssues" :key="index">
													<td>{{ index + 1 }}</td>
													<td>{{ item.type }}</td>
													<td>{{ item.count }}</td>
													<td>{{ item.percentage }}%</td>
													<td>
														<span
															:class="['status', item.status]">{{ item.statusText }}</span>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</ItemWrap>
						</div>
					</div>
				</div>


				<div class="contetn_right">

					<ItemWrap class="contetn_left-bottom contetn_lr-item" title="设备运行效率趋势" style="width: 1050px;">
						<div class="monitor-charts">
							<div class="chart-row">
								<div class="chart-item">
									<line-chart title="设备运行效率趋势" :x-data="efficiencyTrendData.xData"
										:series="efficiencyTrendData.series" height="230px" width="1000px" />
								</div>
							</div>
						</div>
					</ItemWrap>
				</div>


			</div>


		</div>


	</div>



</template>

<script>
	import LeftTop from './left-top.vue'
	import LeftCenter from "./left-center.vue";
	import LeftBottom from "./left-bottom.vue";
	import CenterMap from "./center-map.vue";
	import CenterBottom from "./center-bottom.vue";
	import RightTop from "./right-top.vue";
	import RightCenter from "./right-center.vue";
	import RightBottom from "./right-bottom.vue";

	// 作者：json
	import DataCard from '../../components/DataCard2.vue'
	import LineChart from '../../components/charts/LineChart.vue'
	// import BarChart from '../components/charts/BarChart.vue'
	// import PieChart from '../components/charts/PieChart.vue'

	export default {
		name: 'equipment',
		components: {
			LeftTop,
			LeftCenter,
			LeftBottom,
			CenterMap,
			RightTop,
			RightCenter,
			RightBottom,
			CenterBottom,
			DataCard,
			LineChart,
			// BarChart,
			// PieChart
		},
		data() {
			return {
				// 效率趋势数据
				efficiencyTrendData: {
					xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
					series: [{
						name: '设备效率',
						data: [88, 86, 90, 89, 91, 90, 92, 93, 91, 94, 93, 95],
						color: '#40a9ff'
					}]
				},

				// 维护记录数据
				maintenanceData: {
					xData: ['电梯', '电梯', '电梯', '测试设备', '物流设备', '其他'],
					series: [{
							name: '计划维护',
							data: [5, 3, 4, 2, 3, 1],
							color: '#40a9ff'
						},
						{
							name: '紧急维护',
							data: [2, 1, 2, 1, 0, 1],
							color: '#f5222d'
						}
					]
				},
				// 顶部卡片数据
				energyCards: [{
						title: '本月总能耗',
						value: '256.8',
						unit: 'MWh',
						icon: 'el-icon-lightning',
						valueColor: '#40a9ff',
						footer: '较上月',
						trendType: 'down',
						trendValue: '3.2%'
					},
					{
						title: '单位产品能耗',
						value: '0.42',
						unit: 'kWh/台',
						icon: 'el-icon-s-operation',
						valueColor: '#52c41a',
						footer: '较上月',
						trendType: 'down',
						trendValue: '5.1%'
					},
					{
						title: '碳排放量',
						value: '128.4',
						unit: '吨',
						icon: 'el-icon-cloudy',
						valueColor: '#faad14',
						footer: '较上月',
						trendType: 'down',
						trendValue: '3.2%'
					},
					{
						title: '节能率',
						value: '12.5',
						unit: '%',
						icon: 'el-icon-s-data',
						valueColor: '#52c41a',
						footer: '较上年同期',
						trendType: 'up',
						trendValue: '2.3%'
					}
				],
				// 设备列表
				equipmentList: [{
						name: '电梯 #1',
						status: 'running',
						runTime: '12h 4500m',
						efficiency: 96,
						temperature: 38
					},
					{
						name: '电梯 #2',
						status: 'running',
						runTime: '8h 3000m',
						efficiency: 94,
						temperature: 32
					},
					{
						name: '电梯 #3',
						status: 'running',
						runTime: '10h 1500m',
						efficiency: 92,
						temperature: 35
					},
					{
						name: '电梯 #4',
						status: 'idle',
						runTime: '0h 0m',
						efficiency: 0,
						temperature: 35
					},
					{
						name: '电梯 #5',
						status: 'running',
						runTime: '11h 2000m',
						efficiency: 90,
						temperature: 32
					},
					{
						name: '电梯 #6',
						status: 'maintenance',
						runTime: '0h 0m',
						efficiency: 0,
						temperature: 30
					},
					{
						name: '测试设备 #1',
						status: 'running',
						runTime: '9h 5000m',
						efficiency: 95,
						temperature: 38
					},
					{
						name: '测试设备 #2',
						status: 'fault',
						runTime: '0h 0m',
						efficiency: 0,
						temperature: 32
					}
				],
				// 效率趋势数据
				efficiencyTrendData: {
					xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
					series: [{
						name: '设备效率',
						data: [88, 86, 90, 89, 91, 90, 92, 93, 91, 94, 93, 95],
						color: '#40a9ff'
					}]
				},
				// 质量问题TOP5
				qualityIssues: [{
						type: '人为因素',
						count: 156,
						percentage: 28.5,
						status: 'processing',
						statusText: '处理中'
					},
					{
						type: '门系统故障',
						count: 124,
						percentage: 22.6,
						status: 'processing',
						statusText: '处理中'
					},
					{
						type: '控制系统故障',
						count: 98,
						percentage: 17.9,
						status: 'solved',
						statusText: '已解决'
					},
					{
						type: '外部原因',
						count: 87,
						percentage: 15.9,
						status: 'solved',
						statusText: '已解决'
					},
					{
						type: '其他原因',
						count: 83,
						percentage: 15.1,
						status: 'processing',
						statusText: '处理中'
					}
				]
			}
		},
		filters: {
			numsFilter(msg) {
				return msg || 0;
			},
		},
		created() {},

		mounted() {},
		methods: {

		},
	};
</script>
<style lang="scss" scoped>
	// 内容
	.contents {
		display: block;

		.contetn_left,
		.contetn_right {
			width: 520px;
			box-sizing: border-box;
			// padding: 16px 0;
			// height: 100%;
		}

		.contetn_left {
			width: 820px;
			height: 100%;
		}


		.contetn_center {
			width: 1050px;
			height: auto;
			display: flex;
			flex-direction: column;
		}

		//左右两侧 三个块
		.contetn_lr-item {
			height: 310px;
			margin: 10px 0;
		}


		// 中间
		.contetn_center {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
		}

		.contetn_center-bottom {
			height: 315px;
		}

		.contetn_center-top {
			margin-top: 0px;
			width: 100%;
			display: flex;
			flex-direction: column;


		}

		//左边 右边 结构一样
		.contetn_left,
		.contetn_right {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			position: relative;


		}
	}


	.energy-header {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 15px;
		margin-bottom: 15px;
	}

	//设备效率
	.monitor-charts {
		display: flex;
		flex-direction: column;
		gap: 15px;
		width: 100%;
	}

	.chart-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 15px;
		width: 100%;
	}

	.maintenance-chart {
		height: 250px;
	}


	@keyframes rotating {
		0% {
			-webkit-transform: rotate(0) scale(1);
			transform: rotate(0) scale(1);
		}

		50% {
			-webkit-transform: rotate(180deg) scale(1.1);
			transform: rotate(180deg) scale(1.1);
		}

		100% {
			-webkit-transform: rotate(360deg) scale(1);
			transform: rotate(360deg) scale(1);
		}
	}

	.equipment-monitor {
		height: 100%;
		// display: flex;
		flex-direction: column;
	}

	.monitor-header {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 15px;
		margin-bottom: 15px;
	}


	//设备信息
	.equipment-status {
		// background: rgba(6, 30, 93, 0.5);
		// border: 1px solid #1d4584;
		border-radius: 4px;
		padding: 15px;
		display: flex;
		flex-direction: column;

	}

	.equipment-status {
		// background: rgba(6, 30, 93, 0.5);
		border: 1px solid #1d4584;
		border-radius: 4px;
		padding: 15px;
		display: flex;
		flex-direction: column;
	}

	.status-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 15px;
	}

	.status-header h3 {
		color: #40a9ff;
		margin: 0;
		font-size: 24px;
	}

	.status-legend {
		display: flex;
		gap: 10px;
	}

	.legend-item {
		display: flex;
		align-items: center;
		font-size: 20px;
		color: rgba(255, 255, 255, 0.7);
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		margin-right: 5px;
	}

	.dot.running {
		background-color: #52c41a;
	}

	.dot.idle {
		background-color: #40a9ff;
	}

	.dot.maintenance {
		background-color: #faad14;
	}

	.dot.fault {
		background-color: #f5222d;
	}

	.equipment-list {
		flex: 1;
		overflow-y: auto;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
	}

	.equipment-item {
		// background: rgba(6, 30, 93, 0.3);
		border: 1px solid rgba(29, 69, 132, 0.5);
		border-radius: 4px;
		padding: 10px;
	}

	.equipment-name {
		font-weight: bold;
		margin-bottom: 10px;
		color: #fff;
		font-size: 20px;
	}

	.equipment-info {
		display: flex;
		align-items: center;
	}

	.status-indicator {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		margin-right: 10px;
	}

	.status-indicator.running {
		background-color: #52c41a;
		box-shadow: 0 0 5px #52c41a;
	}

	.status-indicator.idle {
		background-color: #40a9ff;
		box-shadow: 0 0 5px #40a9ff;
	}

	.status-indicator.maintenance {
		background-color: #faad14;
		box-shadow: 0 0 5px #faad14;
	}

	.status-indicator.fault {
		background-color: #f5222d;
		box-shadow: 0 0 5px #f5222d;
		animation: blink 1s infinite;
	}






	@keyframes blink {
		0% {
			opacity: 1;
		}

		50% {
			opacity: 0.5;
		}

		100% {
			opacity: 1;
		}
	}

	.equipment-details {
		flex: 1;
	}

	.detail-item {
		display: flex;
		justify-content: space-between;
		font-size: 18px;
		margin-bottom: 5px;
	}

	.detail-item .label {
		color: rgba(255, 255, 255, 0.7);
	}

	.detail-item .value {
		color: #fff;
		// font-size: 26px;
	}

	.detail-item .value.warning {
		color: #f5222d;
	}

	.monitor-charts {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.chart-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 15px;
	}

	.maintenance-chart {
		height: 250px;
	}

	//电梯运行信息
	.quality-table-container {
		// background: rgba(6, 30, 93, 0.5);
		// border: 1px solid #1d4584;
		border-radius: 4px;
		padding: 15px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
	}

	.chart-title {
		color: #40a9ff;
		font-size: 16px;
		font-weight: bold;
		margin-bottom: 15px;
		padding-left: 10px;
		border-left: 3px solid #40a9ff;
	}

	.quality-table {
		flex: 1;
		overflow-y: auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	thead {
		background: rgba(29, 69, 132, 0.5);
	}

	th {
		padding: 10px;
		text-align: left;
		color: #fff;
		font-weight: normal;
		// border-bottom: 1px solid #1d4584;
	}

	td {
		padding: 10px;
		border-bottom: 1px solid rgba(29, 69, 132, 0.3);
		color: rgba(255, 255, 255, 0.8);
	}

	tr:hover td {
		background: rgba(29, 69, 132, 0.2);
	}

	//电梯维修建议
	.content-name {

		.content-info {
			padding-top: 50px;
			// padding-left: 350px;
			font-size: 30px;
			text-align: center;
			// line-height: 200px;
		}

		p {
			line-height: 50px;
		}
	}
</style>