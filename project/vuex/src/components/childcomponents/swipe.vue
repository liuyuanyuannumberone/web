<template>
    <div class="swipe-carousel">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in carouselList" :key="item.url">
                <img :src="item.img" alt="" :class="{'full':isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
  export default{
    props: ['carouselList','isfull'],
    data(){
      return {}
    },

    methods: {},
  }
</script>
<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;
        .mint-swipe-item {
            text-align: center;
            /*sass交替选择器，并且嵌套*/
          /*  &:nth-of-type(1) {
                background-color: red;
            }
            &:nth-of-type(2) {
                background-color: green;
            }
            &:nth-of-type(3) {
                background-color: yellow;
            }*/
            img {
                height: 100%;
                /*width: 100%;*/
            }
            .full{
                width:100%;
            }
        }
        /*.mint-swipe-item:nth-of-type(2) /:nth-child(2){
           background-color: red;
       }*/
    }
</style>