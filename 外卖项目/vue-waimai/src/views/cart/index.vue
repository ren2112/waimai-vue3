<template>
    <div class="cart">
        <Header title="购物车" :edit="true"/>
        <div class="content">
            <!-- 购物车有东西时展示的内容 -->
            <CartDetail v-if="isShow" :changeShow="changeShow"/>
            <!-- 购物车空展示的内容 -->
            <Empty v-else/>
        </div>
        <Footer />
    </div>
</template>

<script>
import  Footer  from "../../components/Footer.vue";
import Empty from '../../components/Empty.vue'
import Header from '../../components/Header.vue'
import CartDetail from './components/CartDetail.vue'
import { useStore } from "vuex";
import { onMounted,ref } from "vue";
export default{
    components:{
        Footer,
        Empty,
        Header,
        CartDetail
    },

    setup(){
        const store=useStore();
        // 用来判断购物车是否为空
        // 使用ref意味着当isShow的值发生变化时，相关的组件会自动更新以反映这个变化
        const isShow=ref(true)
        
        // 用来初始化isshow
        const init=()=>{
            if(store.state.cartList.length===0){
                isShow.value=false;
            }
        }

        // 当经过编辑导致购物车空需要修改isshow
        const changeShow=()=>{
            isShow.value=false;
        }

        // 在渲染时初始化
        onMounted(()=>{
            init();
        })

        return{
            isShow,
            changeShow
        }
    }
}
</script>

<style lang="less" scoped>
// lang="less"表示使用less的语言规范来写css
.cart{
    display: flex;
    flex-flow: column;
    height: 100%;
    .content{
        flex: 1;
        overflow-y: auto;
    }
}
</style>