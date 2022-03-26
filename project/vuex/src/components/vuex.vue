<template>
    <div>
        <el-input v-model="$store.state.count" placeholder="请输入内容"></el-input>
        <el-input v-model="$store.state.data[0]" placeholder="请输入内容"></el-input>
        <el-button type="primary" @click="add()">增加</el-button>
        <el-button type="primary" @click="del()">减小</el-button>
        <el-button type="primary" @click="postData()">把数据给了store</el-button>
        <el-button type="primary" @click="getData()">再把数据从store中拿回来</el-button>
        <el-button type="primary" @click="post()">数组</el-button>
        <!--<p>{{$store.state.count}}</p>-->
        <p>{{$store.getters.optCount}}</p>
        <ul v-for="item in $store.state.list" :key="item.id">
            <li>{{item.label}}</li>
        </ul>
    </div>
</template>
<script>
  export default{
    data(){
      return {}
    },
    methods: {
      add(){
        //千万不要这么用，不符合vuex的设计理念,不要改原来store的数据，拿到就可以了;
//        this.$store.state.count++;
        this.$store.commit('increment'); //与this.$emit()类似
      },
      del(){
        this.$store.commit('substact',3);
      },
      postData(){
        this.$store.commit('acceptData',[1,2,3]);
        this.$store.commit('change',[{id:1,label:'你是'},{id:2,label:'垃圾'}])
      },
      getData(){
        console.log(this.$store.state.count);
        console.log(this.$store.state.data);
        console.log(this.$store.getters.pushData);
      },
      post(){
          this.$store.commit('listData',[{id:1,label:'liuyuayuan'},{id:2,label:'你真帅'}])
      }
    },
  }
</script>
<style lang="scss" scoped>

</style>


<!--

store中的数据只能通过this.$store.state.***来访问


-->