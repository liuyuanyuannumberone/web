<template>
    <div class="newslists">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsLists" :key="item.id">
                <router-link :to="'/home/newsinfo/'+item.id" class="textDecoration">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h2>{{item.title}}</h2>
                        <p class='mui-ellipsis'>
                            <span>{{item.add_time | dateFormat}}</span>
                            <span>点击:{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
  import {Toast} from 'mint-ui';
  import  menu1  from'../../common/images/liugongge/menu1.png'
  import  menu2  from'../../common/images/liugongge/menu2.png'
  import  menu3  from'../../common/images/liugongge/menu3.png'
  import  menu4  from'../../common/images/liugongge/menu4.png'
  import  menu5  from'../../common/images/liugongge/menu5.png'
  import  menu6  from'../../common/images/liugongge/menu6.png'
  export default{
    data(){
      return {
        newsLists: [],
      }
    },
    created(){
      this.getNewsLists();
    },
    methods: {
      getNewsLists(){
        this.newsLists = [
          {id: 1, title: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办", add_time: new Date(), click: 1, img_url: menu1},
          {id: 2, title: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办", add_time: new Date(), click: 23, img_url: menu2},
          {id: 3, title: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办", add_time: new Date(), click: 34, img_url: menu3},
          {id: 4, title: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办", add_time: new Date(), click: 101, img_url: menu4},
          {id: 5, title: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办", add_time: new Date(), click: 133, img_url: menu5},
          {id: 6, title: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办", add_time: new Date(), click: 43, img_url: menu6},
          {id: 7, title: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办", add_time: new Date(), click: 43, img_url: menu5},
          {id: 8, title: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办", add_time: new Date(), click: 43, img_url: menu4},
          {id: 9, title: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办", add_time: new Date(), click: 43, img_url: menu3},
          {id: 10, title: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办", add_time: new Date(), click: 43, img_url: menu2},
          {id: 11, title: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办", add_time: new Date(), click: 43, img_url: menu4},
          {id: 12, title: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办", add_time: new Date(), click: 43, img_url: menu4},
          {id: 13, title: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办", add_time: new Date(), click: 43, img_url: menu5},
          {id: 14, title: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办", add_time: new Date(), click: 43, img_url: menu6},
          {id: 15, title: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办", add_time: new Date(), click: 43, img_url: menu5},
          {id: 16, title: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办", add_time: new Date(), click: 43, img_url: menu4},
          {id: 17, title: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办", add_time: new Date(), click: 43, img_url: menu4},
          {id: 18, title: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办", add_time: new Date(), click: 43, img_url: menu5},
          {id: 19, title: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办", add_time: new Date(), click: 43, img_url: menu1},
        ];
        //vue-resource请求数据
          /* this.$http.get('api/newslist').then(res => {
           if (res.body.status === 0) {
           this.newsLists= res.body.message;
           } else {
           Toast('加载新闻列表失败！');
           }
           })*/
      }
    },
  }
</script>

<style lang="scss" scoped>
    .newslists {
        .mui-table-view {
            li {
                .textDecoration{
                    text-decoration: none;
                }
                h2 {
                    font-size: 14px;
                }
                .mui-ellipsis {
                    font-size: 12px;
                    color: #226aff;
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
</style>