<template>
    <div class="goods-list">
        <!--以前的老方式，暂且不用，换一个-->
        <!-- <router-link class="goods-item" v-for="item in goodslist " :key="item.id" :to="'/home/goodsinfo/'+item.id" tag="div">
             <img :src="item.img_url" alt="">
             <h1 class="title">{{item.title}}</h1>
             <div class="info">
                 <p class="price">
                     <span class="now">{{item.sell_price}}</span>
                     <span class="old">{{item.market_price}}</span>
                 </p>
                 <p class="sell">
                     <span>热卖中</span>
                     <span>剩{{item.stock_quantity}}件</span>
                 </p>
             </div>
         </router-link>-->
        <div class="goods-item" v-for="item in goodslist " :key="item.id" @click="goDetail(item.id)">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">{{item.sell_price}}</span>
                    <span class="old">{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </p>
            </div>
        </div>

        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
  import {Toast} from 'mint-ui';
  import mobile01 from '../../common/images/goodsimage/mobile01.jpg'
  import mobile02 from '../../common/images/goodsimage/mobile02.png'
  import mobile03 from '../../common/images/goodsimage/mobile03.jpg'
  import mobile04 from '../../common/images/goodsimage/mobile04.jpg'
  import mobile05 from '../../common/images/goodsimage/mobile05.jpg'
  import mobile06 from '../../common/images/goodsimage/mobile06.jpg'
  import mobile07 from '../../common/images/goodsimage/mobile07.jpg'
  export default{
    data(){
      return {
        pageindex: 1,
        goodslist: [],
      }
    },
    created(){
      this.getGoodsList();
    },
    methods: {
      getGoodsList(){
        this.goodslist = [
          {
            id: 1, title: "小米(Mi)  小米Note 16G双网通版", img_url: mobile01, sell_price: '￥2199', market_price: '￥2199',
            stock_quantity: 60,
          },
          {
            id: 2, title: "小米(Mi)  小米Note 16G双网通版", img_url: mobile02, sell_price: '￥2199', market_price: '￥2199',
            stock_quantity: 60,
          },
          {
            id: 3, title: "小米(Mi)  小米Note 16G双网通版", img_url: mobile03, sell_price: '￥2199', market_price: '￥2199',
            stock_quantity: 60,
          },
          {
            id: 4, title: "小米(Mi)  小米Note 16G双网通版", img_url: mobile04, sell_price: '￥2199', market_price: '￥2199',
            stock_quantity: 60,
          },
          {
            id: 5, title: "小米(Mi)  小米Note 16G双网通版", img_url: mobile05, sell_price: '￥2199', market_price: '￥2199',
            stock_quantity: 60,
          },
          {
            id: 6, title: "小米(Mi)  小米Note 16G双网通版", img_url: mobile06, sell_price: '￥2199', market_price: '￥2199',
            stock_quantity: 60,
          },
          {
            id: 7, title: "小米(Mi)  小米Note 16G双网通版", img_url: mobile07, sell_price: '￥2199', market_price: '￥2199',
            stock_quantity: 60,
          },
        ];
        //vue-resource获取商品列表
          /*  this.$http.get('api/getgoods/?pageindex=' + this.pageindex).then(res => {
           if (res.body.status === 0) {
           this.goodslist =this.goodslist.concat(res.body.message);
           } else {
           Toast('加载图片列表失败！');
           }
           })*/
      },
      getMore(){
        this.pageindex++;
        this.getGoodsList();
      },
      goDetail(id){
        console.log(this);  //输出vue router
//         this.$router.push('/home/goodsinfo/'+id);  //第一种
//         this.$router.push({path:'/home/goodsinfo/'+id}); //第二种
        this.$router.push({name: 'goodsinfo', params: {id}})  //第三种  /*params: { id: id }}*/
      },
    },
  }
</script>

<style lang="scss" scoped>
    .goods-list {
        display: flex;
        flex-flow: row wrap;
        padding: 7px;
        justify-content: space-between;
        .goods-item {
            width: 49%;
            margin: 4px 0;
            padding: 2px;
            display: flex;
            flex-direction: column; /*纵向布局因为有些title长*/
            justify-content: space-between;
            min-height: 293px;
            /*flex:1;*/
            /*flex:1 1 48%; 也可以*/
            border: 1px solid #ccc;
            box-shadow: 0 0 6px #ccc;
            .title {
                font-size: 14px;
                font-weight: bolder;

            }
            img {
                width: 100%;
            }
            .info {
                background-color: #eee;

                p {
                    padding: 5px;
                    margin: 0;
                }
                .price {
                    .now {
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .old {
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }
                .sell {
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                }
            }
        }
    }

</style>