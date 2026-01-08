<template>
  <base-chart :options="chartOptions" :title="title" :width="width" :height="height" />
</template>

<script>
// 作者：json
import BaseChart from './BaseChart.vue'

export default {
  name: 'LineChart',
  components: {
    BaseChart
  },
  props: {
    // 图表标题
    title: {
      type: String,
      default: '折线图'
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
    },
    // X轴数据
    xData: {
      type: Array,
      required: true
    },
    // Y轴数据，支持多条线
    series: {
      type: Array,
      required: true
    },
    // 是否显示图例
    showLegend: {
      type: Boolean,
      default: true
    },
    // 是否平滑曲线
    smooth: {
      type: Boolean,
      default: true
    },
    // 是否显示面积
    showArea: {
      type: Boolean,
      default: false
    },
    // 是否显示标记点
    showSymbol: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    chartOptions() {
      return {
        grid: {
          top: this.showLegend ? 50 : 30,
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          show: this.showLegend,
          top: 10,
          textStyle: {
            color: '#fff'
          },
          data: this.series.map(item => item.name)
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.xData,
          axisLine: {
            lineStyle: {
              color: '#1d4584'
            }
          },
          axisLabel: {
            color: '#fff'
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#1d4584'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(29, 69, 132, 0.3)'
            }
          },
          axisLabel: {
            color: '#fff'
          }
        },
        series: this.series.map(item => ({
          name: item.name,
          type: 'line',
          stack: item.stack || '',
          smooth: this.smooth,
          symbol: this.showSymbol ? 'emptyCircle' : 'none',
          symbolSize: 5,
          areaStyle: this.showArea ? {
            opacity: 0.3
          } : null,
          data: item.data,
          lineStyle: {
            width: 2,
            color: item.color
          },
          itemStyle: {
            color: item.color
          }
        }))
      }
    }
  }
}
</script>