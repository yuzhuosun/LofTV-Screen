<template>
  <base-chart :options="chartOptions" :title="title" :width="width" :height="height" />
</template>

<script>
// 作者：json
import BaseChart from './BaseChart.vue'

export default {
  name: 'BarChart',
  components: {
    BaseChart
  },
  props: {
    // 图表标题
    title: {
      type: String,
      default: '柱状图'
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
    // Y轴数据，支持多组柱状
    series: {
      type: Array,
      required: true
    },
    // 是否显示图例
    showLegend: {
      type: Boolean,
      default: true
    },
    // 是否横向柱状图
    horizontal: {
      type: Boolean,
      default: false
    },
    // 是否堆叠
    stack: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    chartOptions() {
      const options = {
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
            type: 'shadow'
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
        series: this.series.map(item => ({
          name: item.name,
          type: 'bar',
          stack: this.stack ? 'total' : '',
          barWidth: this.series.length > 1 ? '40%' : '60%',
          data: item.data,
          itemStyle: {
            color: item.color || undefined
          },
          label: {
            show: this.stack,
            position: 'inside',
            color: '#fff'
          }
        }))
      }

      // 根据方向设置坐标轴
      if (this.horizontal) {
        options.xAxis = {
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
        }
        options.yAxis = {
          type: 'category',
          data: this.xData,
          axisLine: {
            lineStyle: {
              color: '#1d4584'
            }
          },
          axisLabel: {
            color: '#fff'
          }
        }
      } else {
        options.xAxis = {
          type: 'category',
          data: this.xData,
          axisLine: {
            lineStyle: {
              color: '#1d4584'
            }
          },
          axisLabel: {
            color: '#fff'
          }
        }
        options.yAxis = {
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
        }
      }

      return options
    }
  }
}
</script>