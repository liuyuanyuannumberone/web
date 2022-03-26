<template>
  <div class="hello">
    <h1 :class="{content:flag}">{{msg}}</h1>
    <h1 :class="[contentClassNameVar]">{{msg}}</h1>
    <h1 :style="{color:activeColor}">{{msg}}</h1>
    <h1 :style="[styleColor]">{{msg}}</h1>
    <slot>
      <span style="color: red;">如果父组件没有插入内容，我这样可以设置默认的显示内容</span>
    </slot>
  </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                flag: true,
                contentClassNameVar: 'content',
                activeColor:'yellow',
                styleColor:{
                    color:'yellow'
                }
            }
        },
        mounted() {

        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .content {
    color: red;
  }
</style>
