<template>
    <Header title="地址管理"/>
    <van-address-list
    :list="list"
    default-tag-text="默认"
    @add="onAdd"
    @edit="onEdit"
    />
</template>

<script>
import { reactive,toRefs } from 'vue'
import Header from '../../components/Header.vue'
import { useStore } from 'vuex'
import { onMounted } from 'vue'
import {useRouter} from 'vue-router'

export default{
    components:{
        Header
    },
    setup(){
        const store=useStore()
        const router=useRouter()
        const data=reactive({
            list:[]
        })
        // 增加地址
        const onAdd=()=>{
            // 跳转至编辑地址页面
            router.push({
                path:'/addressedit',
                query:{
                    type:"add"
                }
            })
        }
        // 编辑地址,item表示当前被选中的一栏地址
        const onEdit=(item)=>{
            // 跳转至编辑地址页面
            router.push({
                path:'/addressedit',
                query:{
                    id:item.id,
                    type:"edit"
                }
            })
        }

        const init=()=>{
            data.list=store.state.userAddress.map((item)=>{
                return{
                    id:item.id,
                    name:item.name,
                    tel:item.tel,
                    // 拼接地址
                    // 使用加号连接字符串的方式可能会在复杂的情况下导致代码可读性差，容易出错。
                    address:`${item.province}${item.city}${item.county}${item.addressDetail}`,
                    isDefault:item.isDefault
                }
            })
        }

        onMounted(()=>{
            init()
        })
        return {
            onAdd,
            onEdit,
            ...toRefs(data)
        }
    }
}
</script>

<style lang="less" scoped>
/deep/ .van-button--danger {
  background-color: #ffc400;
  border-color: #ffc400;
}
/deep/ .van-switch--on {
  background-color: #ffc400;
}
/deep/ .van-radio__icon {
  display: none;
}
</style>