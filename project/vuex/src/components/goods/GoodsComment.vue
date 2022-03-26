<template>
    <div>
        <h2>{{id}}.商品评论</h2>
        <comment :transid="id"></comment>
    </div>
</template>
<script>
  import comment from '../childcomponents/comment.vue'
  export default{
    components: {
      comment,
    },
    data(){
      return {
        id: this.$route.params.id,
      }
    },
    methods: {},
  }
</script>
<style lang="scss" scoped>

</style>