<template>
    <div class="newsInfo">
        <h3 class="title">{{newsInfo.id}}.{{newsInfo.title}}</h3>
        <p class="subtitle">
            <span>{{newsInfo.add_time | dateFormat}}</span>
            <span>点击:{{newsInfo.click}}次</span>
        </p>
        <hr>
        <!--内容区-->
        <div class="content" v-html="newsInfo.content"></div>
        <!--/内容区-->
        <!--评论子组件-->
        <comment :transid="this.id"></comment>
        <!--/评论子组件-->
    </div>
</template>

<script>
  import {Toast} from 'mint-ui';
  import  img01 from '../../common/images/carouselimg/01.jpg'

  //导入子组件
  import comment from '../childcomponents/comment.vue'

  export default{
    components: {
      comment,
//      'comment-box': comment,
    },
    data(){
      return {
        id: this.$route.params.id,//将url地址中传递过来的url值挂载到data上
        newsInfo: {},
      }
    },
    created(){
      this.getNewsInfo();
    },
    methods: {
      getNewsInfo(){
        this.newsInfo = {
          id: this.id,
          title: "新闻标题",
          click: 2,
          add_time: new Date(),
          content: '一名在曼谷的男子在按摩店睡着了，他认为自己不需要付钱，而要求外交部与店方交涉。一名男子致电问波兰是否有吸血鬼，因为他在网上认识的女生，在首次约会前问他甚么血型一人则在意大利问大使馆可否为他们举行婚礼，并寻门票去见教皇。一名在加那利群岛的人叫外交部说服酒店替他更换房间因为一只猫在他的床上小便。<img :src="img01" alt="图片">一个在荷兰的人则看完电影后，打电话问大使馆剧情。一名印尼新德里的人问英国的高级专员公署甚么时候办公，因为他听说那儿卖素食肠。一名在科威特的男子问使领馆职员可否收养他的宠物。一名男子致电查询可否提供阿根廷女性的清单，列出他可以跟哪一名女子结婚.一名在曼谷的男子在按摩店睡着了，他认为自己不需要付钱，而要求外交部与店方交涉。一名男子致电问波兰是否有吸血鬼，因为他在网上认识的女生，在首次约会前问他甚么血型一人则在意大利问大使馆可否为他们举行婚礼，并寻门票去见教皇。一名在加那利群岛的人叫外交部说服酒店替他更换房间因为一只猫在他的床上小便。<img :src="img01" alt="图片">一个在荷兰的人则看完电影后，打电话问大使馆剧情。一名印尼新德里的人问英国的高级专员公署甚么时候办公，因为他听说那儿卖素食肠。一名在科威特的男子问使领馆职员可否收养他的宠物。一名男子致电查询可否提供阿根廷女性的清单，列出他可以跟哪一名女子结婚.一名在曼谷的男子在按摩店睡着了，他认为自己不需要付钱，而要求外交部与店方交涉。一名男子致电问波兰是否有吸血鬼，因为他在网上认识的女生，在首次约会前问他甚么血型一人则在意大利问大使馆可否为他们举行婚礼，并寻门票去见教皇。一名在加那利群岛的人叫外交部说服酒店替他更换房间因为一只猫在他的床上小便。<img :src="img01" alt="图片">一个在荷兰的人则看完电影后，打电话问大使馆剧情。一名印尼新德里的人问英国的高级专员公署甚么时候办公，因为他听说那儿卖素食肠。一名在科威特的男子问使领馆职员可否收养他的宠物。一名男子致电查询可否提供阿根廷女性的清单，列出他可以跟哪一名女子结婚.一名在曼谷的男子在按摩店睡着了，他认为自己不需要付钱，而要求外交部与店方交涉。一名男子致电问波兰是否有吸血鬼，因为他在网上认识的女生，在首次约会前问他甚么血型一人则在意大利问大使馆可否为他们举行婚礼，并寻门票去见教皇。一名在加那利群岛的人叫外交部说服酒店替他更换房间因为一只猫在他的床上小便。<img :src="img01" alt="图片">一个在荷兰的人则看完电影后，打电话问大使馆剧情。一名印尼新德里的人问英国的高级专员公署甚么时候办公，因为他听说那儿卖素食肠。一名在科威特的男子问使领馆职员可否收养他的宠物。一名男子致电查询可否提供阿根廷女性的清单，列出他可以跟哪一名女子结婚.'
        }

        //vue-resource 请求新闻详情
          /*  this.$http.get('api/getnews/' + this.id).then(res => {
           if (res.body.status === 0) {
           this.newsInfo = res.body.message[0];
           } else {
           Toast('新闻详情加载失败!');
           }
           })*/
      }
    },
  }
</script>

<style lang="scss" scoped>
    .newsInfo {
        padding: 0 4px;
        .title {
            font-size: 16px;
            color: red;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle {
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .content {
            img {
                width: 100%;
            }
        }
    }
</style>