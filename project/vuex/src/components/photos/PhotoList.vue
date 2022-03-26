<template>
    <div class="photoList">
        <!--顶部滑动条-->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id==1?'mui-active':'']" v-for="item in cates" :key="item.id"
                       @tap="getPhotoListByCateId(item.id)">     <!--tap为mui特有,也是点击事件，这么做因为在手机端测试顶部菜单栏没有栏目的，不显示空白-->
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <!--/顶部滑动条-->
        <!--图片列表区域-->
        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                    <div class="info-body">{{item.zhaiyao}}</div>
                </div>
            </router-link>
        </ul>
        <!--/图片列表区域-->
    </div>
</template>
<script>
  //导入mui的js文件
  /*
   * 我们在初始化滑动条的时候，导入的mui.js，但是控制台报错:`Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them`,推测mui.js中用到了'caller','callee'and 'arguments',但是在webpack打包的时候，默认是启用严格模式的，所以造成冲突。
   * 解决办法：移除严格模式:把wewbpack打包时候严格模式禁用;
   * */
  import mui from'../../../lib/mui/js/mui.min'
  import {Toast} from 'mint-ui';
  import img1 from '../../common/images/photolist/img1.jpg'
  import img2 from '../../common/images/photolist/img2.jpg'
  import img3 from '../../common/images/photolist/img3.jpg'
  import img4 from '../../common/images/photolist/img4.jpg'
  import img5 from '../../common/images/photolist/img5.jpg'
  import img6 from '../../common/images/photolist/img6.jpg'
  import img7 from '../../common/images/photolist/img7.jpg'
  import img8 from '../../common/images/photolist/img8.jpg'
  import img9 from '../../common/images/photolist/img9.jpg'
  import img10 from '../../common/images/photolist/img10.jpg'
  import img11 from '../../common/images/photolist/img11.jpg'
  import img12 from '../../common/images/photolist/img12.jpg'
  import img13 from '../../common/images/photolist/img13.jpg'
  import img14 from '../../common/images/photolist/img14.jpg'
  import img15 from '../../common/images/photolist/img15.jpg'

  export default{
    data(){
      return {
        cates: [],
        list: [],
      }
    },
    created(){
      this.getAllCategory();
      this.getPhotoListByCateId(1);
    },
    mounted(){   //初始化滑动控件---时机很重要
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      });
    },
    methods: {
      getAllCategory(){
        this.cates = [
          {id: 1, title: "全部"},
          {id: 2, title: "热点"},
          {id: 3, title: "图片"},
          {id: 4, title: "科技"},
          {id: 5, title: "娱乐"},
          {id: 6, title: "游戏"},
          {id: 7, title: "直播"},
          {id: 8, title: "体育"},
          {id: 9, title: "科技"},
          {id: 10, title: "汽车"},
          {id: 11, title: "财经"},
          {id: 12, title: "搞笑"},
        ];

        //vue-resource 请求新闻目录
          /* this.$http.get('api/getimgcategory').then(res => {
           if (res.body.status === 0) {
           res.body.message.unshift({title: "全部", id: 0});
           this.cates = res.body.message;
           } else {
           Toast('新闻列表获取失败!');
           }
           })*/
      },
      getPhotoListByCateId(cateId){
        if (cateId === 1) {
          this.list = [
            {id: 1, img_url: img1, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，所以要多注意喝水，所以要多注意喝水，所以要多注意喝水，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {id: 2, img_url: img2, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所，所以要多注意喝水，所以要多注意喝水，所以要多注意喝水，所以要多注意喝水以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {id: 3, img_url: img3, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {id: 4, img_url: img4, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {id: 5, img_url: img5, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康，所以要多注意喝水，所以要多注意喝水，所以要多注意喝水啊啊"},
            {id: 6, img_url: img6, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {id: 7, img_url: img7, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊，所以要多注意喝水，所以要多注意喝水，所以要多注意喝水，所以要多注意喝水，所以要多注意喝水，所以要多注意喝水，所以要多注意喝水，所以要多注意喝水，所以要多注意喝水啊"},
            {id: 8, img_url: img8, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜，所以要多注意喝水，所以要多注意喝水，所以要多注意喝水，所以要多注意喝水，所以要多注意喝水，所以要多注意喝水，所以要多注意喝水，所以要多注意喝水，所以要多注意喝水健康啊啊"},
            {id: 9, img_url: img9, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {
              id: 10,
              img_url: img10,
              title: "我是最帅的男人，我最大",
              zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"
            },
            {
              id: 11,
              img_url: img11,
              title: "我是最帅的男人，我最大",
              zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"
            },
            {
              id: 12,
              img_url: img12,
              title: "我是最帅的男人，我最大",
              zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"
            },
            {
              id: 13,
              img_url: img13,
              title: "我是最帅的男人，我最大",
              zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"
            },
            {
              id: 14,
              img_url: img14,
              title: "我是最帅的男人，我最大",
              zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"
            },
            {
              id: 15,
              img_url: img15,
              title: "我是最帅的男人，我最大",
              zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"
            },
          ]
          //vue-resource请求图片列表
            /*  this.$http.get('api/getimages/' + cateId).then(res => {
             if (res.body.status === 0) {
             this.list = res.body.message;
             } else {
             Toast('图片加载失败!');
             }
             })*/
        } else if (cateId === 2) {
          this.list = [
            {id: 6, img_url: img6, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {id: 7, img_url: img7, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {id: 8, img_url: img8, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {id: 9, img_url: img9, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {
              id: 10,
              img_url: img10,
              title: "我是最帅的男人，我最大",
              zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"
            },
            {
              id: 11,
              img_url: img11,
              title: "我是最帅的男人，我最大",
              zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"
            },
            {id: 1, img_url: img1, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {id: 2, img_url: img2, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {id: 3, img_url: img3, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {id: 4, img_url: img4, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {id: 5, img_url: img5, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {
              id: 12,
              img_url: img12,
              title: "我是最帅的男人，我最大",
              zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"
            },
            {
              id: 13,
              img_url: img13,
              title: "我是最帅的男人，我最大",
              zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"
            },
            {
              id: 14,
              img_url: img14,
              title: "我是最帅的男人，我最大",
              zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"
            },
            {
              id: 15,
              img_url: img15,
              title: "我是最帅的男人，我最大",
              zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"
            },
          ]
        } else {
          this.list = [
            {
              id: 15,
              img_url: img15,
              title: "我是最帅的男人，我最大",
              zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"
            },
            {
              id: 14,
              img_url: img14,
              title: "我是最帅的男人，我最大",
              zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"
            },
            {
              id: 13,
              img_url: img13,
              title: "我是最帅的男人，我最大",
              zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"
            },
            {
              id: 12,
              img_url: img12,
              title: "我是最帅的男人，我最大",
              zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"
            },
            {id: 1, img_url: img1, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {id: 2, img_url: img2, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {id: 3, img_url: img3, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {id: 4, img_url: img4, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {id: 5, img_url: img5, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {id: 6, img_url: img6, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {id: 7, img_url: img7, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {id: 8, img_url: img8, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {id: 9, img_url: img9, title: "我是最帅的男人，我最大", zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"},
            {
              id: 10,
              img_url: img10,
              title: "我是最帅的男人，我最大",
              zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"
            },
            {
              id: 11,
              img_url: img11,
              title: "我是最帅的男人，我最大",
              zhaiyao: "最近感冒·的人特别多，所以要多注意喝水，早睡觉，少玩手机多看报，生命是革命的本钱，所以要珍惜健康啊啊"
            },


          ]
        }
      }
    },
  }
</script>
<style lang="scss" scoped>
    * {
        touch-action: pan-y;
    }

    .photoList {
        .mui-control-item {
            text-decoration: none;
        }
        .photo-list {
            padding: 10px;
            padding-bottom: 0;
            list-style: none;
            li { /*图片懒加载*/
                text-align: center;
                background-color: #ccc;
                margin-bottom: 10px;
                position: relative;
                img[lazy=loading] {
                    width: 40px;
                    height: 300px;
                    margin: auto;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
                .info {
                    color: #fff;
                    text-align: left;
                    position: absolute;
                    background-color: rgba(0,0,0,0.4);
                    bottom:0;
                    max-height: 80px;
                    .info-title {
                        font-size: 14px;
                    }
                    .info-body {
                        font-size: 13px;
                    }
                }
            }
        }
    }
</style>