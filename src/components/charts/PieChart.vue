<template>
  <base-chart :options="chartOptions" :title="title" :width="width" :height="height" />
</template>

<script>
// 作者：json
import BaseChart from './BaseChart.vue'

export default {
  name: 'PieChart',
  components: {
    BaseChart
  },
  props: {
    // 图表标题
    title: {
      type: String,
      default: '饼图'
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
    // 饼图数据
    data: {
      type: Array,
      required: true
    },
    // 是否显示图例
    showLegend: {
      type: Boolean,
      default: true
    },
    // 是否环形图
    isDonut: {
      type: Boolean,
      default: false
    },
    // 是否显示标签
    showLabel: {
      type: Boolean,
      default: true
    },
    // 是否显示百分比
    showPercentage: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    chartOptions() {
      return {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          show: this.showLegend,
          orient: 'horizontal',
          top: 10,
          textStyle: {
            color: '#fff'
          },
          data: this.data.map(item => item.name)
        },
        series: [
          {
            name: this.title,
            type: 'pie',
            radius: this.isDonut ? ['50%', '70%'] : '70%',
            center: ['50%', '55%'],
            avoidLabelOverlap: true,
            itemStyle: {
              borderRadius: 4,
              borderColor: 'rgba(6, 30, 93, 0.5)',
              borderWidth: 2
            },
            label: {
              show: this.showLabel,
              formatter: this.showPercentage ? '{b}: {d}%' : '{b}',
              color: '#fff'
            },
            labelLine: {
              show: this.showLabel,
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.5)'
              }
            },
            data: this.data
          }
        ]
      }
    }
  }
}
</script>