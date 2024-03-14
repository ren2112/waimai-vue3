<template>
    <!-- 用于处理每个data里面的单个内容（菜）,包含菜图，菜名 -->
    <div class="item" @click="toStore">
        <!-- 图片 -->
        <img :src="itemContent.pic" />
        <!-- 文字 -->
        <div class="item-right">
            <div class="title">{{ itemContent.title }}</div>
            <div class="sales">{{ itemContent.sales }}</div>
            <div class="price">{{ itemContent.price }}</div>
            <div class="label">
                <div v-for="(item,index) in itemContent.label" :key="index">
                    {{ item }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 对于每个菜品，点击都需要跳转，又不是像router-link一样的超链接，因此使用useRouter，用router.push实现跳转
import {useRouter} from "vue-router"
export default{
    props:['itemContent'],
    setup(){
        const router=useRouter();
        const toStore=()=>{
            router.push('/store')
        }
        return{
            toStore
        }
    }
}
</script>

<style lang="less" scoped>
.item{
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    padding: 10px;
    img{
        widows: 120px;
        height: 120px;
        border-radius: 10px;
        margin-right: 20px;
    }
    .item-right{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        .title{
            font-size: 18px;
        }
        .label{
            display: flex;
            div{
                background-color: #ffc400;
                padding: 2px 5px;
                border-radius: 5px;
            }
            div:not(:first-child){
                margin-left: 5px;
            }
        }
    }
}
// .item:not(:first-child){
//     padding-top: 10px;
// }
</style>