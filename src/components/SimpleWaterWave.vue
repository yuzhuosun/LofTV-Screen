<template>
  <div class="right_top_wrap" v-if="pageflag">
    <div class="header-title">
      <h3>设备状态监控</h3>
    </div>
    
    <div class="water-wave-grid">
      <div class="wave-item">
        <SimpleWaterWave
          :value="onlineRate"
          title="在线率"
          color="#00f7f6"
        />
      </div>
      
      <div class="wave-item">
        <SimpleWaterWave
          :value="maintenanceRate"
          title="待维修率"
          color="#07f7a8"
        />
      </div>
      
      <div class="wave-item">
        <SimpleWaterWave
          :value="inspectionRate"
          title="检修率"
          color="#e3b337"
        />
      </div>
      
      <div class="wave-item">
        <SimpleWaterWave
          :value="faultRate"
          title="故障率"
          color="#f5023d"
        />
      </div>
    </div>
  </div>
  <Reacquire v-else @onclick="getData" style="line-height:200px" />
</template>

<script>
import { currentGET } from 'api/modules'
import SimpleWaterWave from './SimpleWaterWave.vue'

export default {
  name: 'RightTop',
  components: {
    SimpleWaterWave
  },
  data() {
    return {
      pageflag: true,
      timer: null,
      onlineRate: 0,
      maintenanceRate: 0,
      inspectionRate: 0,
      faultRate: 0
    };
  },
  created() {
    this.getData()
  },
  beforeDestroy() {
    this.clearData()
  },
  methods: {
    clearData() {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
    getData() {
      this.pageflag = true;
      currentGET("big2").then((res) => {
        if (res.success) {
          // 模拟数据计算百分比
          const total = res.data.totalNum || 100;
          this.onlineRate = Math.round((res.data.onlineNum / total) * 100) || 75;
          this.maintenanceRate = Math.round((res.data.offlineNum / total) * 100) || 15;
          this.inspectionRate = Math.round((res.data.alarmNum / total) * 100) || 8;
          this.faultRate = Math.round((res.data.alarmNum / total) * 50) || 2;
          
          this.switper()
        } else {
          this.pageflag = false;
          this.$Message.warning(res.msg);
        }
      });
    },
    switper() {
      if (this.timer) return;
      this.timer = setInterval(() => {
        this.getData()
      }, this.$store.state.setting.echartsAutoTime || 5000);
    }
  }
};
</script>

<style lang='scss' scoped>
.right_top_wrap {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  
  .header-title {
    text-align: center;
    margin-bottom: 15px;
    
    h3 {
      color: #00f7f6;
      font-size: 16px;
      margin: 0;
      padding: 5px 0;
      background: linear-gradient(92deg, #0072ff 0%, #00eaff 48.85%, #01aaff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  
  .water-wave-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
    height: calc(100% - 50px);
    
    .wave-item {
      background: rgba(0, 123, 255, 0.1);
      border: 1px solid rgba(0, 247, 246, 0.3);
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
    }
  }
}

// 响应式调整
@media (max-width: 1400px) {
  .water-wave-grid {
    gap: 8px !important;
  }
}
</style>