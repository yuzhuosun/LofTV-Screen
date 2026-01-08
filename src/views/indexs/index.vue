<!--
 * @Author: daidai
 * @Date: 2022-03-04 09:23:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-07 11:05:02
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\index.vue
-->
<template>
	<div class="contents">
		<div class="contetn_left">
			<div class="pagetab">
				<!-- <div class="item">实时监测</div> -->

			</div>
			<ItemWrap class="contetn_left-top contetn_lr-item" title="实时数据统计">
				<LeftTop />

			</ItemWrap>
			<ItemWrap class="contetn_left-center contetn_lr-item" title="电梯品牌">
				<LeftCenter />
			</ItemWrap>


			<ItemWrap class="contetn_left-center contetn_lr-item" title="电梯梯龄分布">
				<LeftBottom />
			</ItemWrap>

			<!--      <ItemWrap
        class="contetn_left-bottom contetn_lr-item"
        title="设备提醒"
        style="padding: 0 10px 16px 10px"
      >
        <LeftBottom /> -->
			</ItemWrap>

		</div>
		<div class="contetn_center">
			<CenterMap class="contetn_center_top" />
			<!--      <ItemWrap class="contetn_center-bottom" title="安装计划">
        <CenterBottom />
      </ItemWrap> -->
			<ItemWrap class="contetn_center-bottom" title="实时警告">
				<div style="display: flex; width:100%; height:18px;">
					<span style="flex: 1; text-align: center;">电梯编号</span>
					<span style="flex: 1; text-align: center;">所属地址</span>
					<span style="flex: 1; text-align: center;">上报内容</span>
					<span style="flex: 1; text-align: center;">时间</span>
				</div>

				<CenterBottom />
			</ItemWrap>
		</div>


		<div class="contetn_right">

			<ItemWrap class="contetn_left-bottom contetn_lr-item" title="保养情况" style="padding: 0 10px 16px 10px">
				<RightTop />
			</ItemWrap>

			<!--     <ItemWrap
        class="contetn_left-bottom contetn_lr-item"
        title="数据统计图 "
      >
        <RightBottom />
      </ItemWrap> -->

			</ItemWrap>
			<ItemWrap class="contetn_left-bottom contetn_lr-item" title="电梯故障类型分布">
				<RightCenter />
			</ItemWrap>


			<ItemWrap class="contetn_left-bottom contetn_lr-item" title="近六个月故障趋势">
				<RightBottom />
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

	export default {
		components: {
			LeftTop,
			LeftCenter,
			LeftBottom,
			CenterMap,
			RightTop,
			RightCenter,
			RightBottom,
			CenterBottom,
		},
		data() {
			return {

			};
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
		min-height: calc(100% - 60px);

		.contetn_left,
		.contetn_right {
			width: 540px;
			box-sizing: border-box;
			// padding: 16px 0;
		}

		.contetn_center {
			width: 720px;
		}

		//左右两侧 三个块
		.contetn_lr-item {
			height: 310px;
		}

		.contetn_center_top {
			width: 100%;
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
</style>