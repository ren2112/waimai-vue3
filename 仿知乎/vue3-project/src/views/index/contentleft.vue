<script setup>
import {ref} from 'vue';
const lists=ref([
    {name:'关注',url:'/index/interest'},
    {name:'推荐',url:'/index/recommend'},
    {name:'热榜',url:'/index/hotlist'},
    {name:'视频',url:'/index/video'},
])
</script>

<template>
<div class="content-left">
    <div class="card">
        <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        router
        >
            <el-menu-item :index="v.url" v-for="v in lists" :key="v.url">
                <span>{{ v.name }}</span>
            </el-menu-item>
        </el-menu>

        <router-view/>
    </div>
</div>
</template>

<style scoped>

</style>
