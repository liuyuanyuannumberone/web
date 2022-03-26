<template>
    <div class="comment">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="发表评论(最多120字)" maxlength="120" v-model="commentContent">
        </textarea>
        <mt-button type="primary" size="large" @click="postComments">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in comments" :key="item.user_name">
                <div class="cmt-title">
                    第{{index + 1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间: {{item.add_time | dateFormat}}
                </div>
                <div class="cmt-body" v-html="item.content">
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMoreInfo">加载更多</mt-button>
    </div>
</template>

<script>
  import {Toast} from 'mint-ui';
  export default{
    data(){
      return {
        pageIndex: 1,  //默认展示第一页数据
        comments: [],   //所有的评论数据
        comments1: [
          {user_name: '匿名用户11', add_time: new Date(), content: "我是谁"},
          {user_name: '匿名用户12', add_time: new Date(), content: "我来自哪里"},
          {user_name: '匿名用户13', add_time: new Date(), content: "我为神么在这里"},
          {user_name: '匿名用户14', add_time: new Date(), content: "我的未来的目标究竟在哪里"},
          {user_name: '匿名用户15', add_time: new Date(), content: "应该如何实现自己的目标"},
          {user_name: '匿名用户16', add_time: new Date(), content: "考研真的重要么"},
          {user_name: '匿名用户17', add_time: new Date(), content: "我们为什么要考研"},
          {user_name: '匿名用户18', add_time: new Date(), content: "考研了还会考博士么"},
          {user_name: '匿名用户19', add_time: new Date(), content: "研究生好毕业么"},
          {user_name: '匿名用户20', add_time: new Date(), content: "工作的目的是神么"},
        ], //模拟加载更多数据
        commentContent: '',
      }
    },
    props: ['transid'],
    created(){
      this.getComments();
    },
    methods: {
      getComments(){
        this.comments = [
          {user_name: '匿名用户1', add_time: new Date(), content: "我是谁"},
          {user_name: '匿名用户2', add_time: new Date(), content: "我来自哪里"},
          {user_name: '匿名用户3', add_time: new Date(), content: "我为神么在这里"},
          {user_name: '匿名用户4', add_time: new Date(), content: "我的未来的目标究竟在哪里"},
          {user_name: '匿名用户5', add_time: new Date(), content: "应该如何实现自己的目标"},
          {user_name: '匿名用户6', add_time: new Date(), content: "考研真的重要么"},
          {user_name: '匿名用户7', add_time: new Date(), content: "我们为什么要考研"},
          {user_name: '匿名用户8', add_time: new Date(), content: "考研了还会考博士么"},
          {user_name: '匿名用户9', add_time: new Date(), content: "研究生好毕业么"},
          {user_name: '匿名用户10', add_time: new Date(), content: "工作的目的是神么"},
        ];
        //vue-resource 请求评论详情
          /*    this.$http.get("api/getcomponents/" + this.transid + "?pageindex=" + this.pageIndex).then(res => {
           if (res.body.status === 0) {
           //            this.comments = res.body.message;
           //新数据不会被覆盖,而是追加;
           this.comments = this.comments.concat(res.body.message);
           } else {
           Toast('新闻评论加载失败!');
           }
           })*/
      },
      getMoreInfo(){   //加载更多
        this.pageIndex++;
        //数组加数组/某个数组中的元素(根据数组索引)----拼接数组
        //此方法使用方便
          /* for (var i = 0; i < this.comments1.length; i++) {
           this.comments.push(this.comments1[i]);
           //        this.comments=this.comments.concat(this.comments1[i]);
           }*/
        this.comments = this.comments.concat(this.comments1);

        //vue-resource实现
//        this.getComments();
      },
      postComments(){   //发表评论--校验发表内容是否为空
        if (!this.commentContent.trim()) {
          Toast('评论内容不能为空');
          return;
        }
        var comment = {user_name: '匿名用户', add_time: new Date(), content: this.commentContent};
        this.comments.unshift(comment);
        this.commentContent = '';

        //vue-resource 发表评论
        //定义提交时候，表单中的数据格式{emulateJSON:true},已经全局配置数据表单提交格式
          /*     this.$http.post('api/postcomments/' + this.transid,{content: this.commentContent.trim()}).then(res => {
           if (res.body.status === 0) {
           var comment={user_name:'匿名用户',add_time:new Date(),content:this.commentContent};
           this.comments.unshift(comment);
           this.commentContent='';
           } else {
           Toast('发表评论失败!');
           }
           })*/
      }
    }
  }
</script>

<style lang="scss" scoped>
    .comment {
        h3 {
            margin-top: 34px;
            font-size: 18px;
        }
        textarea {
            margin-bottom: 0;
            font-size: 14px;
            height: 85px;
        }
        .cmt-list {
            margin: 5px 0;
            .cmt-item {
                font-size: 13px;
                .cmt-title {
                    line-height: 30px;
                    background-color: #ccc;
                }
                .cmt-body {
                    text-indent: 2em;
                    line-height: 35px;
                }
            }
        }
    }
</style>