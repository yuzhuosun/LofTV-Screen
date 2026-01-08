<template>
  <div class="data-card" :class="{ 'with-icon': icon }">
    <div class="card-icon" v-if="icon">
      <i :class="icon"></i>
    </div>
    <div class="card-content">
      <div class="card-title">{{ title }}</div>
      <div class="card-value" :style="{color: valueColor}">
        {{ value }}<span class="card-unit" v-if="unit">{{ unit }}</span>
      </div>
      <div class="card-footer" v-if="footer">
        <span :class="['trend', trendType]" v-if="trendType">
          <i :class="trendIcon"></i> {{ trendValue }}
        </span>
        <span>{{ footer }}</span>
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
.data-card {
  /* background: rgba(6, 30, 93, 0.5); */
  border: 1px solid #1d4584;
  border-radius: 4px;
  padding: 15px;
  padding-bottom: 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  margin-top: 8px;
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
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: rgba(64, 169, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  margin-top: 30px;
}

.card-icon i {
  font-size: 30px;
  color: #40a9ff;
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  line-height: 40px;
}

.card-title {
  font-size: 20px;
  color: #FFF;
  margin-bottom: 10px;
}

.card-value {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 0px;
}

.card-unit {
  font-size: 18px;
  font-weight: normal;
  margin-left: 5px;
  opacity: 0.7;
}

.card-footer {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: space-between;
}

.trend {
  display: flex;
  align-items: center;
  font-size: 18px;
}

.trend.up {
  color: #52c41a;
}

.trend.down {
  color: #f5222d;
}

.trend.flat {
  color: #faad14;
}

.trend i {
  margin-right: 3px;
}
</style>