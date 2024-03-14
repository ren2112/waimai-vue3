<template>
    <div class="storeDetails">
        <!-- 使用component组件的header作为页头 -->
        <Header title="店铺"/>
        <div class="content">
            <!-- 背景图片 -->
            <div class="img"></div>
            <div class="foodSort">
                <div class="sort"></div>
                <div class="name">
                    <!-- 店铺名 -->
                    {{ title }}
                    <!-- 右边小图 -->
                    <img :src="img" alt="" class="store-img">
                </div>
                <!-- 分类栏 -->
                <van-tabs v-model:active="active" color="#ffc400">
                    <!-- 开始遍历该商铺的分类栏 -->
                    <van-tab v-for="(item,index) in storeData" :key="index" :title="item.name">
                        <!-- 使用组件展示列表，传index因为只有点菜栏（index为0）有侧边栏，因此需要使用v-if -->
                        <FooterList :index="index" :foodData="item.data"/>
                    </van-tab>
                </van-tabs>
            </div>
        </div>
        <!-- 页脚的加入购物车 -->
        <van-action-bar>
          <van-action-bar-icon icon="chat-o" text="客服" dot />
          <van-action-bar-icon icon="cart-o" text="购物车"
          :badge="store.state.cartList.length"
          @click="goCart" />
          <van-action-bar-button type="warning" text="加入购物车" @click="handleAddCart"/>
          <van-action-bar-button type="danger" text="立即购买" @click="goBuy"/>
        </van-action-bar>
    </div>
</template>

<script>
import {reactive, toRefs, ref } from "vue"
import Header from "../../components/Header.vue"
import FooterList from './component/FooterList.vue'
import {useStore} from 'vuex'
import { useRouter } from "vue-router"
import axios from 'axios'
import {getApiStoreData} from '../../api/api'
// 弹窗提示组件
import { Toast } from 'vant';
import { onMounted } from "vue"
export default{
    components:{
        Header,
        FooterList
    },
    setup(){
      let store=useStore()
      let router=useRouter()
      let data=reactive({
          title:"鱼拿酸菜鱼",
          img:"https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
          storeData: []
      })

      const active = ref(0);

      //  通过axios获取store数据
      const getStoreData=()=>{
        getApiStoreData().then((res)=>{
          data.storeData=res
        })
        // axios.get('/home/getStoreData').then((res)=>{
        //   console.log(res);
        //   const {code,storeData}=res.data
        //   if(code===200){
        //     data.storeData=storeData
        //   }
        // })
      }
      onMounted(()=>{
        getStoreData()
      })

      // 当type是buy时加入购物车同时跳转到购物车页面
      const handleAddCart=(type)=>{
        // 如果直接把newlist设置为空会导致选择每次点击加入购物车都会重置购物车
        const newList=store.state.cartList||[]
        // 寻找num大于0的菜
        data.storeData.forEach(item=>{
          item.data.items?.forEach(item=>{
            item.children.forEach(item=>{
              if(item.num>0){
                newList.push(item)
              }
            })
          })
        })
        if(newList.length===0){
          // debugger;
          Toast("请选择商品")
          return
        }
        store.commit('addcart',newList)
        type==="buy"?goCart():""
      }

      const goCart=()=>{
        router.push("/cart")
      }

      const goBuy=()=>{
        handleAddCart('buy')
      }
      return{
        ...toRefs(data),
        active,
        handleAddCart,
        store,
        goCart,
        goBuy
      }
    }
}
</script>

<style lang="less" scoped>
// 店铺样式
.storeDetails {
      height: 100%;
      display: flex;
      flex-flow: column;
      .content {
        flex: 1;
        overflow-y: auto;
        .img {
          background: url("../../assets/yuna.jpg") no-repeat center/cover;
          width: 100%;
          height: 150px;
        }
        .foodSort {
          height: 500px;
          background-color: #fff;
          margin-top: -30px;
          border-radius: 20px 20px 0 0;

          .sort {
            margin-top: 10px;
          }
          .name {
            display: flex;
            padding: 20px;
            justify-content: space-between;
            .store-img {
              width: 80px;
              height: 80px;
              border-radius: 10px;
              margin-top: -30px;
            }
          }
        }
      }
    }
</style>