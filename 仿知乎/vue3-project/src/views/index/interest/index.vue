<script setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router';
const router=useRouter()
const approvalHandle=(v)=>{
    // console.log(1);
    v.approval=!v.approval
    if(v.approval){
        v.favour++
    }
    else{
        v.favour--;
    }
}

const goDetail=(v)=>{
    var v_json=JSON.stringify(v)
    router.push({
        path:'/details',
        query:{
            item:v_json
        }
    })
}

const handleClose = (done) => {
    done();
    dialogVisible.value = false;
    router.push({
        path:'/details',
        query:{
            id:1
        },
        hash:'#'
    })
}

const dialogVisible = ref(false)
const topstorylist=ref([
    {
        img:'/src/assets/image/pic5.png',
        name:'苗先生',
        title:'我是标题1',
        articleitem:'在上面的例子中，当你导航到 /parent/child 路由时，父级路由 ParentComponent 会保留在视图中，同时子路由111111111111111111111111111111111111111111111111ChildComponent 也会显示在视图中',
        id:1,
        favour:88,
        approval:false,
        like:false
    },
    {
        img:'/src/assets/image/pic6.jpg',
        name:'xiao先生',
        title:'我是标题2',
        articleitem:'在上面的例子中，当你导航到 /parent/child 路由时，父级路由 ParentComponent 会保留在视图中，同时子路由111111111111111111111111111111111111111111111111ChildComponent 也会显示在视图中',
        id:2,
        favour:812,
        approval:false,
        like:false
    },
    {
        img:'/src/assets/image/pic7.jpg',
        name:'lei先生',
        title:'我是标题3',
        articleitem:'在上面的例子中，当你导航到 /parent/child 路由时，父级路由 ParentComponent 会保留在视图中，同时子路由111111111111111111111111111111111111111111111111ChildComponent 也会显示在视图中',
        id:3,
        favour:8,
        approval:false,
        like:false
    },
])

</script>

<template>
<div class="Topstory-content">
    <ul>
        <li v-for="v in topstorylist" :key="i">
            <!-- 内容 -->
            <div @click="goDetail(v)">
                <!-- 内容头 -->
                <div class="topstory-hd">
                    <img :src="v.img" alt="">
                    <span>{{ v.name }}</span>
                </div>
                <!-- 内容体-标题 -->
                <h2 class="topstory-title">{{v.title}}</h2>
                <div class="topstory-articleitem">
                    {{ v.articleitem }}
                </div>
            </div>
            <!-- 收藏点赞等操作显示 -->
            <div class="topstory-actions">
                <ul>
                    <li>
                        <div :class="v.approval?'approval-active':'approval'" @click="approvalHandle(v)">
                            <svg class="icon-font">
                                <use xlink:href="#icon-xiangshang1"></use>
                            </svg>{{ v.approval?'已赞成':'赞成' }}  {{v.favour }}
                        </div>
                        <div class="down-arrow">
                            <svg class="icon-font">
                                <use xlink:href="#icon-xiangxia1"></use>
                            </svg>
                        </div>
                    </li>

                    <li>
                        <svg class="icon-font">
                            <use xlink:href="#icon-shouye"></use>
                        </svg>
                        <span>11条评论</span>
                    </li>

                    <li>
                        <svg class="icon-font">
                            <use xlink:href="#icon-share-s"></use>
                        </svg>
                        <span>分享</span>
                    </li>

                    <li @click="dialogVisible = true">
                        <svg class="icon-font" >
                            <use xlink:href="#icon-shoucang"></use>
                        </svg>
                        <span>收藏</span>
                    </li>

                    <li :class="v.like?'approve-like':''" @click="v.like=!v.like">
                        <svg class="icon-font">
                            <use xlink:href="#icon-xihuan"></use>
                        </svg>
                        <span v-if="v.like">取消喜欢</span>
                        <span v-else>喜欢</span>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
    <!-- 收藏时弹出的对话框 -->
    <el-dialog
        v-model="dialogVisible"
        title="添加收藏"
        width="30%"
        :before-close="handleClose"
    >
        <span>你可以创建多个收藏夹，分类收藏</span>
        <template #footer>
        <div class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="dialogVisible = false">
            收藏
            </el-button>
        </div>
        </template>
    </el-dialog>
</div>
</template>

<style scoped>

</style>
