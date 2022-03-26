<template>
    <div class="goods-info">
        <!---->
        <el-transfer></el-transfer>
        <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        <!---->
        <!--商品轮播图区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swipe :carouselList="carousel" :isfull="false"></swipe>
                </div>
            </div>
        </div>
        <!--/商品轮播图区域-->
        <!--商品购买区域-->
        <div class="mui-card">
            <div class="mui-card-header">{{goodsinfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价:
                        <del>{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价:<span
                            class="now_price">{{goodsinfo.sell_price}}</span>
                    </p>
                    <p>购买数量:
                        <numberbox @getCount="getSelectionCount" :max="goodsinfo.stock_quantity"></numberbox>
                    </p>
                    <div class="sell">
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    </div>
                </div>
            </div>
        </div>
        <!--/商品购买区域-->
        <!--商品参数区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号:{{goodsinfo.goods_no}}</p>
                    <p>库存情况:{{goodsinfo.stock_quantity}}件</p>
                    <p>上架时间:{{goodsinfo.add_time | dateFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <!--br不生效，证明父级元素采用flex布局-->
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
        <!--/商品参数区域-->
    </div>
</template>
<script>
  import {Toast} from 'mint-ui';
  import swipe from '../childcomponents/swipe.vue'
  import GoodsInfo_numberbox from '../childcomponents/goodsInfo_numberbox.vue'
  import mobile05 from '../../common/images/goodsimage/mobile05.jpg'
  import mobile06 from '../../common/images/goodsimage/mobile06.jpg'
  import mobile07 from '../../common/images/goodsimage/mobile07.jpg'
  export default{
    components: {
      swipe,
      'numberbox': GoodsInfo_numberbox,
    },
    data(){
      return {
        id: this.$route.params.id,
        carousel: [],
        goodsinfo: {},
        ballFlag: false,
        selectedCount: 1,  //默认一件
      }
    },
    created(){
      this.getCarousel();
      this.getGoodsInfo();
    },
    methods: {
      getCarousel(){
        this.carousel = [
          {id: 1, src: mobile05},
          {id: 2, src: mobile06},
          {id: 3, src: mobile07},
        ];
        this.carousel.forEach(item => {
          item.img = item.src;
        });

        // vue-resource 获取轮播图
          /*        this.$http.get("/api/getimages" + this.id).then(res => {
           if (res.body.status === 0) {
           res.body.message.forEach(item => {
           item.img = item.src;
           });
           this.carousel = res.body.message;
           /*因为swipe封装为组件,只认识img属性*!/
           } else {
           Toast('图片详情加载失败');
           }
           })*/
      },
      getGoodsInfo(){
        this.goodsinfo = {
          title: "小米(MI)小米Note 16G双网通版",
          market_price: "￥2399",
          sell_price: "￥2199",
          goods_no: "8938293293290",
          stock_quantity: "15",
          add_time: new Date()
        }
        //vue-resource 获取商品详情
          /* this.$http.get('api/goods/getinfo/' + this.id).then(res => {
           if (res.body.status === 0) {
           this.goodsinfo = res.body.message[0];
           } else {
           Toast('商品详情加载失败');
           }
           })*/
      },
      goDesc(id){
        this.$router.push({name: 'goodsdesc', params: {id}})
      },
      goComment(id){
        this.$router.push({name: 'goodscomment', params: {id}});
      },
      addToShopCar(){
        this.ballFlag = !this.ballFlag;
        var goodsinfo = {
          id: this.id,
          count: this.selectedCount,
          price: this.goodsinfo.sell_price,
          selsected: true,
        };  //拼接出一个保存到vuex的对象;
        this.$store.commit('addToCar', goodsinfo);
      },
      beforeEnter(el){
        el.style.transform = "translate(0,0)";   //开始小球定位的位置，初始位置
      },
      enter(el, done){
        el.offsetWidth;
          /*小球动画优化思路:transform最终位置写死在一定分辨率和滚动条未滚动的情况下，
           *    1.得到徽标的(x1,y1),小球初始化的时候的(x2,y2);translate(x1-x2,y1-y2);
           *     2.domObject.getBoundingClientRect();
           *     操作DOM的时候可以拿到页面上的所有东西与组件没有关系；
           * */
        const ballPosition = this.$refs.ball.getBoundingClientRect();
        const badgePosition = document.getElementById('badge').getBoundingClientRect();
        const xDist = badgePosition.left - ballPosition.left;
        const yDist = badgePosition.top - ballPosition.top;
        el.style.transform = `translate(${xDist}px,${yDist}px)`;
//          el.style.transform = "translate(95px,282px)";
        el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68) ";
        done();
      },
      afterEnter(el){
        this.ballFlag = !this.ballFlag;
      },
      getSelectionCount(count){
//        console.log(count);// 无法输出
        this.selectedCount = count;
//        console.log(this.selectedCount);
      },
    },
  }
</script>
<style lang="scss" scoped>
    .goods-info {
        background-color: #eee;
        overflow: hidden;
        .now_price {
            color: red;
            font-size: 16px;
            font-weight: bold;
        }
        .sell {
            margin: 8px auto;
        }
        .mui-card-header, .mui-card-footer {
            display: block;
            button {
                margin: 10px 0;
            }
        }
        .ball {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            z-index: 99;
            top: 386px;
            left: 143px;
            /*transform:translate(95px,282px);*/
        }
    }
</style>
