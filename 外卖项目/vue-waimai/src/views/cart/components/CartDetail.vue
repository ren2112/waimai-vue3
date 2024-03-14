<template>
    <div class="cartDetail">
        <div class="content">
            <!-- @change="groupChange"是vant的api -->
            <van-checkbox-group v-model="checked" ref="checkboxGroup" @change="groupChange">
                <div v-for="(item,index) in store.state.cartList" :key="index">
                    <!-- 通过遍历展示购物车的内容showCheckBox="true"为了在购物车展示复选框（因为在store里面不会展示复选框） -->
                    <ListItem :item="item" :handleChange="handleChange" :showCheckBox="true"/>
                </div>
            </van-checkbox-group>
        </div>
        <!-- 提交订单部分 -->
        <van-submit-bar :price="allPrice" 
        button-text="结算" 
        @submit="onSubmit" 
        class="submit-all"
        button-color="#ffc400"
        v-if="store.state.isDelete">
            <van-checkbox v-model="submitChecked" 
            checked-color="#ffc400" 
            @click="choseAll">
                全选
            </van-checkbox>
            <template #tip>
                你的收货地址不支持配送, <span @click="onClickLink">修改地址</span>
            </template>
        </van-submit-bar>

        <div class="buy" v-else>
            <div class="left">
                <van-checkbox v-model="submitChecked" 
                checked-color="#ffc400" 
                @click="choseAll">
                    全选
                </van-checkbox>
            </div>
            <div class="delete" @click="handleDelete">删除</div>
        </div>
    </div>
</template>

<script>
import {reactive, toRefs,onMounted,computed} from "vue"
import {useStore} from 'vuex'
import ListItem from '../../../components/ListItem.vue'
import {Toast} from 'vant'
import {useRouter} from 'vue-router'

export default{
    props:['changeShow'],

    components:{
        ListItem
    },
    setup(props){
        const router=useRouter()
        const store=useStore()
        const data=reactive({
            // 复选框需要,checked数组里面有id的表示该id的被选中
            checked:[],
            // 结算部分需要,当1表示全选框被选中
            submitChecked:true
        })
        // 同步更新购物车中的num
        const handleChange=(value,detail)=>{
            store.state.cartList.map(item=>{
                if(item.id==detail.name){
                    item.num=value;
                }
            })
        }

        const init=()=>{
            // 由于组件里有van-checkbox :name="item.id"，又因为根据checked出现的名字来勾选，因此需要id转化为数组给checked
            // 全选
            data.checked=store.state.cartList.map((item)=>item.id)
        }

        onMounted(()=>{
            init();
        })

        // 结算
        const onSubmit=()=>{
            if(data.checked.length){
                store.commit('pay',updateData())
                router.push({
                    path:"/createorder",
                    // 传输购物车当前选中数据，因为提交订单之后需要删除已提交的数据
                    query:{
                        list:data.checked
                    }
                })
            }
            else{
                Toast.fail("请选择结算商品！")
            }
        }
        
        // 定义全选函数
        const choseAll=()=>{
            // 当没选全
            if(data.checked.length!==store.state.cartList.length){
                init();
            }
            // 当选全了，要取消全选
            else{
                data.checked=[];
            }          
        }

        // 实现有没选中的就取消全选
        const groupChange=(result)=>{
            // result表示在这组复选框里被选中的元素
            if(result.length===store.state.cartList.length){
                data.submitChecked=true
            }
            else data.submitChecked=false;
        }

        // 求价格
        const allPrice=computed(()=>{
            let countList=updateData();
            let sum=0;
            countList.forEach((item)=>{
                sum+=item.num*item.price;
            })
            return sum*100;
        })
        
        // 因为求价格是筛选checked里面有的，而删除是筛选checked没选中的，因此可以用一个函数实现，传参来区分
        const updateData=(type)=>{
            return store.state.cartList.filter((item)=>{
                // 从购物车筛选出选中的数据
                // 表示遍历的item里面看看有无其id在data.checked里面，有则返回（delete相反,因为没选中的才保留）
                return type==='delete'? !data.checked.includes(item.id):data.checked.includes(item.id)
            })
        }

        // 删除购物车
        const handleDelete=()=>{
            if(data.checked.length){
                store.commit("delete",updateData('delete'))
                data.checked=[]
                // 购物车无数据时
                if(!store.state.cartList.length){
                    //当经过编辑导致购物车空需要修改isshow
                    props.changeShow();
                    // 将页头的完成转为编辑
                    store.commit("edit",'delete')
                }
            }
            else{
                Toast.fail("请选择要删除的商品")
            }
        }
        return{
            ...toRefs(data),
            store,
            handleChange,
            choseAll,
            onSubmit,
            groupChange,
            allPrice,
            handleDelete
        }
    }
}
</script>

<style lang="less" scoped>
.cartDetail {
    font-size: 14px;
    flex: 1;
    position: relative;
    overflow-y: auto;
    padding: 20px 20px 55px;
    .submit-all {
      position: fixed;
      bottom: 46px;
    }

    .buy {
      position: fixed;
      bottom: 48px;
      right: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
      background-color: #fff;
      border-radius: 10px;
      height: 50px;
      align-items: center;
      padding: 0 16px;
      box-sizing: border-box;
      .left {
        display: flex;
        align-items: center;
      }
      .delete {
        color: #fff;
        background-color: #ffc400;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 600;
        width: 110px;
        height: 40px;
        text-align: center;
        line-height: 40px;
      }
    }

    .content {
      padding: 10px;
      background-color: #fff;
      border-radius: 10px;
    }
  }
</style>