<template>
    <div class="good-info">
        <h2>{{id}}.图文介绍{{info.title}}</h2>
        <hr>
        <div class="content" v-html="info.content">
        </div>
    </div>
</template>
<script>
  export default{
    data(){
      return {
        id: this.$route.params.id,
        info: {},
      }
    },
    created(){
      this.getGoodsDesc();
    },
    methods: {
      getGoodsDesc(){
          /*  this.$http.get('api/goods/getdesc/' + this.id).then(res => {
           if (res.body.status === 0) {
           this.info = res.body.message[0];
           } else {
           console.log("error");
           }
           })*/
      },
    },
  }
</script>
<style lang="scss" scoped>
    .good-info {
        padding:4px;
        h2 {
            font-size: 16px;
            color: #226aff;
            text-align: center;
            margin: 15px 0;
        }
        .content {
            img {
                width: 100%;
            }
        }
    }
</style>