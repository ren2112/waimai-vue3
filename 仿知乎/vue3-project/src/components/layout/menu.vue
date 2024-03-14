<script setup>
import {ref} from 'vue';
const useMenu=ref([
    {name:'首页',url:'/index'},
    {name:'知乎学堂',url:'/education'},
    {name:'发现',url:'/explore'},
    {name:'等你来答',url:'/waiting'},
])

</script>

<template>
<el-menu
:default-active="$route.path"
class="el-menu-demo"
mode="horizontal"
router
>
    <el-menu-item index="/index">
        <img src="@/assets/image/logo.png" alt="" style="width: 80px;">
    </el-menu-item>
    <el-menu-item :index="v.url" v-for="v in useMenu" :key="v.url">
        <span>{{ v.name }}</span>
    </el-menu-item>
</el-menu>
</template>

<style scoped>
.el-menu--horizontal.el-menu {
    border-bottom: var(--el-menu-border-color);
}
</style>
