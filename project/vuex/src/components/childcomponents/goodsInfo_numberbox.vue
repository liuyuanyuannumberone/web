<template>
    <!--因为父组件在拿库存时，this.$http.get().then 是异步请求，所以是undefined， <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>父组件不知道何时才可以拿到这个异步的数据，但是总归会拿到，watch监视-->
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox">
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
  import mui from'../../../lib/mui/js/mui.min'
  export default{
    data(){
      return {}
    },
    props: ['max'],
    watch: {
      //属性监听 watch可以用在子组件中监听父组件的数据，只要父组件数据变了，子组件就可以随时监听到；
      'max': function (newVal, oldVal) {
//        console.log(newVal);
        mui('.mui-numbox').numbox().setOption('max', newVal);
      }
    },
    mounted(){
      mui('.mui-numbox').numbox();     //初始化numberbox
//      console.log(this.max);
    },
    methods: {
      //change事件触发，只要文本框的值发生改变，就会触发这个函数
      countChanged(){
//        console.log(this.$refs.numbox.value);
        this.$emit('getCount', parseInt(this.$refs.numbox.value));
      }
    },
  }
</script>
<style lang="scss" scoped>

</style>
