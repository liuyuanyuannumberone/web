<template>
    <div class="photoinfo">
        <div v-for="item in photoinfo" :key="item.id">
            <h3>{{id}}:{{item.title}}</h3>
            <p class="subtitle">
                <span>发表时间:{{item.add_time | dateFormat}}</span>
                <span>点击:{{item.click}}次</span>
            </p>
            <hr>
            <!--缩略区-->
            <div class="thumbs">
            <vue-preview :slides="list" @close="handleClose"></vue-preview>
            </div>
            <!--/缩略区-->
            <!--图片内容区-->
            <div class="content" v-html="item.content"></div>
            <!--/图片内容区-->
            <!--评论子组件-->
            <comment :transid="id"></comment>
            <!--/评论子组件-->
        </div>
    </div>
</template>
<script>
  import {Toast} from 'mint-ui';
  import comment from '../childcomponents/comment.vue'

  export default{
    components: {
      comment,
    },
    data(){
      return {
        id: this.$route.params.id,
        photoinfo: [],
        list: [],
      }
    },
    created(){
      this.getPhotoInfo();
      this.getThumbs();
    },
    methods: {
      getPhotoInfo(){
        this.photoinfo = [{
          id: 1,
          title: "马云为何如此有钱",
          add_time: new Date(),
          click: 255,
          content: "因为我有想法，能坚持下去，并且坚持不懈，我的英语也不错，更重要的原因是我穷"
        }];
        //vue-resource 获取图片详情
          /*  this.$http.get('api/getimage/'+this.id).then(res=>{
           if(res.body.status===0){
           this.photoinfo=res.body.message[0];
           }else{
           Toast('图片详情加载失败!');
           }
           })*/
      },
      handleClose () {
        console.log('close event')
      },
      getThumbs(){
        this.list = [
            /*
             * src	main (large) image
             msrc	small image
             alt	image replacement text
             w	image width
             h	image height
             * */
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 600,
            h: 400
          }
        ];
        //vue-resource
          /*this.$http.get('api/getthumbimages/' + this.id).then(res => {
           if (res.body.status === 0) {
           //循环每个图片数据，添加属性
           res.body.message.forEach(item => {
           item.w = 600;
           item.h = 400;
           });
           this.list = res.body.message;
           } else {
           Toast('缩略图加载失败!');
           }
           })*/
      },
    },
  }
</script>

<style lang="scss" scoped>
    .photoinfo {
        padding: 3px;
        h3 {
            color: #26A2FF;
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle {
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }
        .thumbs{
            .my-gallery{
                margin:10px;
                box-shadow:0 0 8px #999;
            }
        }
        .content {
            font-size: 13px;
            line-height: 30px;
        }
    }
</style>