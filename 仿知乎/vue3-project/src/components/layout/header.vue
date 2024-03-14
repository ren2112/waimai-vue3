<script setup>
import Menu from './menu.vue'
import { useRouter } from 'vue-router';
const router=useRouter();

</script>

<template>
<div class="header">
    <div class="appheader">
        <!-- 菜单栏 -->
        <Menu />
        <!-- 搜索框 -->
        <div class="header-item">
            <div class="header-search">
                <input type="text" placeholder="请输入内容" />
                <button class="button">
                    <svg class="icon-font">
                        <use xlink:href="#icon-sousuo"></use>
                    </svg>
                </button>
            </div>
            <el-button type="primary" round>提问</el-button>
        </div>

        <!-- 个人信息 -->
        <div class="header-userinfo">
            <div class="popover">
                <svg class="icon-font">
                    <use xlink:href="#icon-shouye"></use>
                </svg>
                <div class="popover-num">10</div>
                <p>消息</p>
            </div>    

            <div class="popover">
                <svg class="icon-font">
                    <use xlink:href="#icon-sixin"></use>
                </svg>
                <div class="popover-num">10</div>
                <p>私信</p>
            </div>    

            <div class="popover">
                <svg class="icon-font">
                    <use xlink:href="#icon-chuangzuozhongxin"></use>
                </svg>
                <p>创作中心</p>
            </div> 
            
            <!-- 个人头像等信息 -->
            <div class="header-profile">
                <el-dropdown>
                    <img src="@/assets/image/1.png" alt="">
                    <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item @click="$router.push('/login')">退出</el-dropdown-item>
                    </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>

</style>
