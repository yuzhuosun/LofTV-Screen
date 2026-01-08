<template>
  <header class="header">
    <div class="header-title">
      <h1>沈阳市电梯运行状态监管平台</h1>
      <div class="header-time">{{ currentTime }}</div>
    </div>
    <div class="header-nav">
      <ul class="nav-list">
        <li 
          v-for="(item, index) in navItems" 
          :key="index"
          :class="['nav-item', { active: activeIndex === index }]"
          @click="changeNav(index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
// 作者：json
export default {
  name: 'Header',
  data() {
    return {
      currentTime: '',
      timer: null,
      activeIndex: 0,
      navItems: [
        { name: '首页', path: '/index' },
        { name: '设备监控', path: '/equipment' },
        { name: '数据管理', path: '/data' }
      ]
    }
  },
  created() {
    this.updateTime()
    this.timer = setInterval(this.updateTime, 1000)
    this.updateActiveIndex()
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  watch: {
    '$route': {
      handler: 'updateActiveIndex',
      immediate: true
    }
  },
  methods: {
    updateTime() {
      const now = new Date()
      const year = now.getFullYear()
      const month = String(now.getMonth() + 1).padStart(2, '0')
      const day = String(now.getDate()).padStart(2, '0')
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      
      this.currentTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    },
    updateActiveIndex() {
      const currentPath = this.$route.path
      const index = this.navItems.findIndex(item => item.path === currentPath)
      if (index !== -1) {
        this.activeIndex = index
      }
    },
    changeNav(index) {
      this.activeIndex = index
      this.$router.push(this.navItems[index].path)
    }
  }
}
</script>

<style scoped>
.header {
  height: 80px;
  background: linear-gradient(to right, rgba(2, 12, 31, 0.7), rgba(2, 12, 31, 0.9), rgba(2, 12, 31, 0.7));
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  border-bottom: 1px solid #1d4584;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.header-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}

.header-title h1 {
  color: #40a9ff;
  font-size: 24px;
  text-shadow: 0 0 10px rgba(64, 169, 255, 0.5);
  letter-spacing: 2px;
  margin: 0;
}

.header-time {
  color: #fff;
  font-size: 16px;
}

.header-nav {
  height: 40px;
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  padding: 0 30px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
}

.nav-item:hover {
  color: #40a9ff;
}

.nav-item.active {
  color: #40a9ff;
  font-weight: bold;
}

.nav-item.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  height: 3px;
  background-color: #40a9ff;
  box-shadow: 0 0 5px #40a9ff;
}
</style>