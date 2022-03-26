<template>
    <div class="mui-numbox" data-numbox-min='1' style="height:25px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initCount" @change="countChanged" ref="numbox"
               readonly>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
  import mui from'../../../lib/mui/js/mui.min'
  export default{
    data(){
      return {}
    },
    props: ['initCount', 'goodsId'],
    mounted(){
      mui('.mui-numbox').numbox();     //初始化numberbox
    },
    methods: {
      countChanged(){
//        console.log(this.$refs.numbox.value);
        this.$store.commit('updateGoodsInfo', {id: this.goodsId, count: this.$refs.numbox.value});
      },
    },
  }
</script>
<style lang="scss" scoped>

</style>
