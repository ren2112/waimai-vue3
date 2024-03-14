<template>
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>

</template>

<script setup>
import Header from './header.vue';

</script>

<style scoped>

</style>