<!--
 * @Author: daidai
 * @Date: 2022-03-04 09:23:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-07 11:05:02
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\index.vue
-->
<template>
	<div class="contents">
		<div class="contents" style="display: flex;">
			<div class="contetn_left">
				<ItemWrap class="contetn_left-top contetn_lr-item monitor-content" title="基础信息">

					<div class="equipment-status">
						<div class="equipment-name">
							<div class="equipment-left">电梯编号</div>
							<div class="equipment-right">01420</div>
						</div>
					</div>
					<div class="equipment-status">
						<div class="equipment-name">
							<div class="equipment-left">电梯地址</div>
							<div class="equipment-right">东北大学博士后公寓电梯</div>
						</div>
					</div>
					<div class="equipment-status">
						<div class="equipment-name">
							<div class="equipment-left">电梯品牌</div>
							<div class="equipment-right">安诚电梯</div>
						</div>
					</div>
					<div class="equipment-status">
						<div class="equipment-name">
							<div class="equipment-left">电梯类型</div>
							<div class="equipment-right">曳引驱动乘客电梯</div>
						</div>
					</div>

				</ItemWrap>

				<ItemWrap class="contetn_left-top contetn_lr-item monitor-content" title="维保信息">

					<div class="equipment-status">
						<div class="equipment-name">
							<div class="equipment-left">维保单位</div>
							<div class="equipment-right">辽宁安诚电梯设备销售有限公司</div>
						</div>
					</div>

					<div class="equipment-status">
						<div class="equipment-name">
							<div class="equipment-left">下次维保日期</div>
							<div class="equipment-right">2026年7月</div>
						</div>
					</div>
				</ItemWrap>

			</div>



			<div class="contetn_center">
				<ItemWrap class="contetn_center-top" title="电梯实施运行状态">
					<div class="video-container">
						<div class="video-corner-borders">
							<img src="../../../public/video/WechatIMG1631.jpg"/>
						</div>
					</div>
				</ItemWrap>
			</div>


			<div class="contetn_right">

				<ItemWrap class="contetn_left-bottom contetn_lr-item" title="电梯运行信息" style="padding: 0 10px 16px 10px">
					<div class="equipment-status">
						<div class="equipment-name">
							<div class="equipment-left">运行状态</div>
							<div class="equipment-right" style="color:#40a9ff ;">上行</div>
						</div>
					</div>
					<div class="equipment-status">
						<div class="equipment-name">
							<div class="equipment-left">轿厢振动</div>
							<div class="equipment-right">正常</div>
						</div>
					</div>
					<div class="equipment-status">
						<div class="equipment-name">
							<div class="equipment-left">运行声音</div>
							<div class="equipment-right" style="color: #faad14">正常</div>
						</div>
					</div>
					<div class="equipment-status">
						<div class="equipment-name">
							<div class="equipment-left">性能等级</div>
							<div class="equipment-right" style="color:#52c41a ;">III</div>
						</div>
					</div>
					<div class="equipment-status">
						<div class="equipment-name">
							<div class="equipment-left">性能评价</div>
							<div class="equipment-right">一般</div>
						</div>
					</div>

				</ItemWrap>


				<ItemWrap class="contetn_left-bottom contetn_lr-item" title="电梯能耗数据">
					<div>
						<data-card v-for="(card, index) in energyCards" :key="index" :title="card.title"
							:value="card.value" :unit="card.unit" :icon="card.icon" :value-color="card.valueColor"
							:footer="card.footer" :trend-type="card.trendType" :trend-value="card.trendValue" />
					</div>
				</ItemWrap>
			</div>


		</div>
		<div class="content-name">
			<ItemWrap class="contetn_left-bottom contetn_lr-item" style="font-size: 20px;" title="电梯维保建议">
				<div class="content-info">
					<p>电梯运行状态一般，无明显故障，但存在性能下降迹象。</p>
					<p>建议提前检查，结合维保计划适当增加保养频次，及时处理潜在隐患，确保设备运行安全可靠</p>
				</div>
			</ItemWrap>
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
	import DataCard from '../../components/DataCard.vue'
	// import LineChart from '../components/charts/LineChart.vue'
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
			// LineChart,
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
					xData: ['注塑机', '装配线', '包装机', '测试设备', '物流设备', '其他'],
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
						title: '开关门次数',
						value: '1247',
						unit: '次',
						icon: 'el-icon-pie-chart',
						valueColor: '#40a9ff',
					},
					{
						title: '运行次数',
						value: '1052',
						unit: '次',
						icon: 'el-icon-s-operation',
						valueColor: '#52c41a',

					},
					{
						title: '运行距离',
						value: '43',
						unit: 'km',
						icon: 'el-icon-s-data',
						valueColor: '#faad14',

					},
					{
						title: '运行时间',
						value: '9',
						unit: '小时',
						icon: 'el-icon-time',
						valueColor: '#52c41a',
					}
				],
				// 质量问题TOP5
				qualityIssues: [{
						type: '表面划痕',
						count: 156,
						percentage: 28.5,
						status: 'processing',
						statusText: '处理中'
					},
					{
						type: '尺寸偏差',
						count: 124,
						percentage: 22.6,
						status: 'processing',
						statusText: '处理中'
					},
					{
						type: '组装不良',
						count: 98,
						percentage: 17.9,
						status: 'solved',
						statusText: '已解决'
					},
					{
						type: '材料缺陷',
						count: 87,
						percentage: 15.9,
						status: 'solved',
						statusText: '已解决'
					},
					{
						type: '功能异常',
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
			width: 540px;
			box-sizing: border-box;
			// padding: 16px 0;
			// height: 100%;
		}

		.contetn_center {
			width: 720px;
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
			margin-top: 10px;
			width: 100%;
			display: flex;
			flex-direction: column;

			// 添加视频容器样式
			.video-container {
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 20px;
				
				.video-corner-borders {
				  position: relative;
				}
				
				.video-corner-borders::before,
				.video-corner-borders::after {
				  content: '';
				  position: absolute;
				  width: 20px;
				  height: 20px;
				  border: 2px solid #99fffe;
				}
				
				.video-corner-borders::before {
				  top: 0;
				  left: 0;
				  border-right: none;
				  border-bottom: none;
				}
				
				.video-corner-borders::after {
				  bottom: 0;
				  right: 0;
				  border-left: none;
				  border-top: none;
				}
				
				img{
					width: 600px;
					height: 550px;
					// border-radius: 5%;
				}
				
			
			}
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

	.monitor-content {
		// flex: 1;
		// display: grid;
		// grid-template-columns: 40% 60%;
		// gap: 15px;
		// overflow: hidden;
		// height: inherit;

	}

	.equipment-status {
		// background: rgba(6, 30, 93, 0.5);
		// border: 1px solid #1d4584;
		border-radius: 4px;
		padding: 12px;
		display: flex;
		flex-direction: column;

	}

	.contetn_right {
		.equipment-status {
			// background: rgba(6, 30, 93, 0.5);
			// border: 1px solid #1d4584;
			border-radius: 4px;
			padding: 5px 10px 5px 10px;
			display: flex;
			flex-direction: column;

		}
	}


	.equipment-name {
		font-weight: bold;
		margin-bottom: 10px;
		color: #fff;
		font-size: 20px;
		padding-bottom: 10px;
		border-bottom: 1px solid rgba(29, 69, 132, 0.3);

		.equipment-left {
			float: left;
		}

		.equipment-right {
			float: right;
		}
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
		font-size: 12px;
		margin-bottom: 5px;
	}

	.detail-item .label {
		color: rgba(255, 255, 255, 0.7);
	}

	.detail-item .value {
		color: #fff;
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
		border-bottom: 1px solid #1d4584;
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