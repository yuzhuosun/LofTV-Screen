<template>
  <base-chart :options="chartOptions" :title="title" :width="width" :height="height" />
</template>

<script>
// 作者：json
import BaseChart from './BaseChart.vue'

export default {
  name: 'GaugeChart',
  components: {
    BaseChart
  },
  props: {
    // 图表标题
    title: {
      type: String,
      default: '仪表盘'
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
    // 当前值
    value: {
      type: Number,
      required: true
    },
    // 最大值
    max: {
      type: Number,
      default: 100
    },
    // 最小值
    min: {
      type: Number,
      default: 0
    },
    // 单位
    unit: {
      type: String,
      default: '%'
    },
    // 颜色
    color: {
      type: Array,
      default: () => ['#5470c6', '#91cc75', '#fac858']
    }
  },
  computed: {
    chartOptions() {
      return {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}' + this.unit
        },
        series: [
          {
            name: this.title,
            type: 'gauge',
            min: this.min,
            max: this.max,
            radius: '85%',
            center: ['50%', '55%'],
            progress: {
              show: true,
              width: 18
            },
            axisLine: {
              lineStyle: {
                width: 18,
                color: [
                  [0.3, this.color[0]],
                  [0.7, this.color[1]],
                  [1, this.color[2]]
                ]
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              length: 15,
              lineStyle: {
                width: 2,
                color: '#1d4584'
              }
            },
            axisLabel: {
              distance: 25,
              color: '#fff',
              fontSize: 12
            },
            anchor: {
              show: true,
              showAbove: true,
              size: 20,
              itemStyle: {
                borderWidth: 8
              }
            },
            pointer: {
              icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
              length: '60%',
              width: 6,
              offsetCenter: [0, '5%'],
              itemStyle: {
                color: 'auto'
              }
            },
            detail: {
              valueAnimation: true,
              fontSize: 20,
              color: '#fff',
              offsetCenter: [0, '30%'],
              formatter: '{value}' + this.unit
            },
            data: [
              {
                value: this.value
              }
            ]
          }
        ]
      }
    }
  }
}
</script>