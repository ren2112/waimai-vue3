<script setup>
import {useRoute} from "vue-router";
// const route=useRoute();
const route = useRoute();
const jsonString = route.query.item;
const item = JSON.parse(jsonString);


</script>

<template>
    <div class="content">
        <div class="content-card">
            <h1 class="title">{{item.title}}</h1>
            <div class="user-info">
                <img :src="item.img" class="touxiang">
                <span>{{item.name}}</span>
            </div>
            <p class="article">{{item.articleitem}}</p>

            
        </div>
    </div>
</template>

<style scoped>
.content{
    display: flex;
    justify-content: center;
    padding-left:100px;
    width: 1000px;
}

.content-card{
    width: 800px;
    padding: 0 50px;
    margin-top: 30px;
    left: 20%;
}

.user-info{
    display: flex;
    align-items: center;
}

.touxiang{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}
</style>
