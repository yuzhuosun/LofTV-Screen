<template>
  <div class="chart-container" :style="{width: width, height: height}">
    <div class="chart-title" v-if="title">{{ title }}</div>
    <div class="chart-content" ref="chartRef"></div>
  </div>
</template>

<script>
// 作者：json
import * as echarts from 'echarts'

export default {
  name: 'BaseChart',
  props: {
    // 图表配置项
    options: {
      type: Object,
      required: true
    },
    // 图表标题
    title: {
      type: String,
      default: ''
    },
    // 图表宽度
    width: {
      type: String,
      default: '100%'
    },
    // 图表高度
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
    window.addEventListener('resize', this.resizeChart)
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose()
      this.chart = null
    }
    window.removeEventListener('resize', this.resizeChart)
  },
  watch: {
    options: {
      handler(newOptions) {
        this.updateChart(newOptions)
      },
      deep: true
    }
  },
  methods: {
    // 初始化图表
    initChart() {
      if (this.$refs.chartRef) {
        this.chart = echarts.init(this.$refs.chartRef)
        this.updateChart(this.options)
      }
    },
    // 更新图表
    updateChart(options) {
      if (this.chart) {
        this.chart.setOption(options, true)
      }
    },
    // 调整图表大小
    resizeChart() {
      if (this.chart) {
        this.chart.resize()
      }
    }
  }
}
</script>

<style scoped>
.chart-container {
  /* background: rgba(6, 30, 93, 0.5); */
  /* border: 1px solid #1d4584; */
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
}

.chart-title {
  color: #40a9ff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  padding-left: 10px;
  border-left: 3px solid #40a9ff;
}

.chart-content {
  width: 100%;
  height: calc(100% - 30px);
}
</style>