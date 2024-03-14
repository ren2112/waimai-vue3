<template>
    <div class="header">
        <van-icon name="arrow-left" class="icon" @click="toBack" v-if="title!=='登录'"/>
        <!-- 传参title的显示 -->
        <div>{{ title }}</div>
        <!-- 当是购物车页面传来的则显示编辑 -->
        <div class="edit" v-if="edit" @click="handleEdit">{{ 
        store.state.edit?'编辑':"完成"
        }}</div>
    </div>
</template>

<script>
import { Toast } from 'vant';
import { useRouter } from 'vue-router';
import{useStore} from 'vuex'

export default{
  props:['title','edit'],
  setup(){
    const router=useRouter()
    const store=useStore()
    const toBack=()=>{
      router.back();
    }

    // 点击编辑的事件，启动下方显示删除的信号
    const handleEdit=()=>{
      if(store.state.cartList.length){
        store.commit("changeDelete")
        store.commit("edit")
      }
      else{
        Toast.fail("请添加商品到购物车！")
      }
    }
    return{
      toBack,
      handleEdit,
      store
    }
  }
}
</script>

<style lang="less" scoped>
.header {
    background-color: #fff;
    height: 40px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #d7d7d7;
    .edit {
      font-size: 16px;
      position: absolute;
      right: 15px;
      font-weight: normal;
    }
    .icon {
      position: absolute;
      left: 10px;
    }
  }
</style>