<template>
    <div id="login">
        <h3>这是登录子组件</h3>
    </div>
</template>
<script>

</script>

<!--scope 原理：通过css属性选择器实现-浏览器查看-->
<style scoped lang="less">  /*作用域*/
    #login {
        color: red;
    }
</style>

<style>
    #login {
        background-color:green;
        width:20%;
    }
</style>