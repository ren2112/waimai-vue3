<template>
    <div class="create-order">
        <Header title="生成订单"/>
        <van-contact-card type="edit" :tel="tel" :name="name" @click="onEdit" />
        <!-- 订单内容 -->
        <div class="content">
            <!-- 订单卡片遍历 -->
            <div v-for="(item,index) in store.state.orderList" :key="index">
                <van-card
                :num="item.num"
                :price="item.price"
                :title="item.title"
                :thumb="item.pic"
                />
            </div>
        </div>

        <!-- 支付 -->
        <div class="pay-wrap">
            <div class="price">
                <span>商品金额</span>
                <span>￥{{ totalPrice }}</span>
            </div>
            <van-button type="primary" 
            class="pay-btn" 
            block color="#ffc400"
            @click="handleCreateOrder">
                生成订单
            </van-button>
        </div>
    </div>
</template>

<script>
import { reactive,toRefs,onMounted } from 'vue';
import Header from '../../../components/Header.vue'
import {useStore} from 'vuex'
import {useRouter,useRoute} from 'vue-router'
import{Dialog} from 'vant'
export default{
    components:{
        Header
    },
    setup(){
        const router=useRouter()
        // route用来接收路由的push输送数据,区分router（用来跳转）
        const route=useRoute()
        const store=useStore()
        const data=reactive({
            tel:'1221324342',
            name:"jason",
            totalPrice:0,
        })
        // 调整地址目录页
        const onEdit=()=>{
            router.push('/address')
        }

        // 计算订单价格
        const initPrice=()=>{
            let price=0;
            if(store.state.orderList.length){
                store.state.orderList.forEach((item)=>{
                    price+=item.num*item.price
                })
            }
            data.totalPrice=price;
        }

        // 初始化用户数据（地址，姓名电话等）
        const initUser=()=>{
            store.state.userAddress.forEach((item)=>{
                if(item.isDefault){
                    data.name=item.name;
                    data.tel=item.tel
                }
            })
        }

        // 提交订单
        const handleCreateOrder=()=>{
            Dialog({
                title: '提示',
                message: '生成订单成功！',
            }).then(()=>{
                let newList=store.state.cartList.filter((item)=>{
                    // 祛除掉在购物车选中的商品（因为已经提交订单）
                    return !route.query.list.includes(item.id+"")
                })
                // 更新购物车
                store.commit('delete',newList)
                // 更新全部订单(将当前订单附加到历史订单上)
                store.commit('orderListEd')
                router.push('/order')
            })
        }

        onMounted(()=>{
            initPrice();
            initUser()
        })

        return {
            onEdit,
            ...toRefs(data),
            store,
            initPrice,
            handleCreateOrder
        }
    }
}
</script>

<style lang="less" scoped>
.create-order {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
  .pay-wrap {
    padding: 10px 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #e9e9e9;
    > div {
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
      margin: 10px 0;
      font-size: 14px;
      span:nth-child(2) {
        color: red;
        font-size: 18px;
      }
    }
    .pay-btn {
      width: 90%;
      margin: 0 auto;
    }
  }
}
</style>