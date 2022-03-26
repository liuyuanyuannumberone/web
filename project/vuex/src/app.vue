<template>
  <div class="app-container">
    <!--原来的练习组件-->
    <!--<router-link to="/account">account</router-link>
        <router-link to="/goodlist">goodlist</router-link>
        <router-link to="/vueEasyTable">vueEasyTable</router-link>
        <router-link to="/vueEasyTableTwo">vueEasyTableTwo</router-link>
        <router-link to="/tableBeautifyScrollbar">v2-tableBeautifyScrollbar</router-link>
        <router-view></router-view>-->
    <!--顶部Header区域-->
    <mt-header fixed title="Vue项目">
      <span slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>
    <!--/顶部Header区域-->
    <!--中间的路由 router-view 区域-->
    <transition>
      <router-view> </router-view>
    </transition>
    <!--/中间的路由 router-view 区域-->
    <!--底部的Tabbar-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-rename" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-rename" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-rename" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{
            $store.getters.getAllCount
          }}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-rename" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
    <!--/底部的Tabbar-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
    };
  },
  created() {
    this.flag = this.$route.path === "/home" ? false : true;
    /* if (this.$route.path !== '/home') {
         this.flag = true;
         }*/
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }, //点击后退;
  },
  watch: {
    "$route.path": function (newVal) {
      if (newVal === "/home") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden; //组件切换动画，x轴无滚动条
}

.mint-header {
  z-index: 99;
}

a:hover,
a:focus {
  text-decoration: none;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute; //消除页面离开时产生的位移
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

//该类名解决引入mui.js造成的tabbar点击无法切换的问题
.mui-bar-tab .mui-tab-item-rename.mui-active {
  color: #007aff;
}

.mui-bar-tab .mui-tab-item-rename {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item-rename .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-rename .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
