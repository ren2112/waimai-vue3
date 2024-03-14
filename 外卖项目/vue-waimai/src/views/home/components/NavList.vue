<template>
<div v-for="(item,index) in navList" :key="index">
    <!-- 将data数据拆解 -->
    <nav-list-item :itemContent="item"/>
</div>
</template>

<script>
import NavListItem from './NavListItem.vue'
export default{
    props:['navList'],
    components:{
        NavListItem
    }
}
</script>

<style>
    nav-list-item:not(:first-child){
        padding-top: 10px;
    }
</style>