<template>
    <div class="home">
        <!-- 内容 -->
        <div class="content">

            <!-- 页头 -->
            <div class="header">
                <div class="text">外卖</div>
                <div class="location">
                    <van-icon name="location-o" />
                    <span>定位</span>
                    <van-icon name="arrow" />
                </div>
            </div>

            <!-- 页头下面的内容 -->
            <div class="main">

                <!-- 上半部分的内容包括搜索和分类 -->
                <div class="main-bg">

                    <!-- 搜索 -->
                    <div class="search">
                        <input type="text" />
                        <div class="search-text">搜索</div>
                    </div>

                    <div class="sort">
                        <div class="big-sort">
                            <!-- 开始遍历data里面的big_sort数据 -->
                            <div v-for="(item, index) in big_sort" :key="index">
                                <!-- 使用阿里巴巴矢量图 -->
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="`#${item.icon}`"></use>
                                </svg>
                                {{ item.name }}
                            </div>
                        </div>
                        <div class="small-sort">
                            <!-- 开始遍历data里面的small_sort数据 -->
                            <div v-for="(item, index) in small_sort" :key="index">
                                <!-- 使用阿里巴巴矢量图 -->
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="`#${item.icon}`"></use>
                                </svg>
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 栏目 -->
                <!--  vant的tab组件需要 -->
                <van-tabs v-model:active="active" class="van-tabs">
                    <!-- 每一个van-tab表示一个表分类 -->
                    <van-tab v-for="(item,index) in centent_nav_list"
                    :title="item.tab" :key="index">
                        <!-- 传每个tab里面的data数据 -->
                        <nav-list :navList="item.data"/>
                    </van-tab>
                    
                </van-tabs>

            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import  Footer  from "../../components/Footer.vue";
import { reactive,toRefs,ref } from "vue";
import NavList from './components/NavList.vue'
import { onMounted } from "vue";
import axios from 'axios'
import {getApiHomeData} from '../../api/api'
export default{
    components:{
        Footer,
        NavList
    },
    setup(){
        let data=reactive({
          big_sort: [],
          small_sort: [],
          centent_nav_list: []
        })
        // 通过axios请求获取data
        const getHomeData=()=>{
            getApiHomeData().then(res=>{
                console.log(res);
                data.small_sort=res.small_sort;
                data.big_sort=res.big_sort;
                data.centent_nav_list=res.centent_nav_list
            })
        //   axios.get('/home/getHomeData').then((res)=>{
        //     // 注意：res.data是响应体的内容
        //     console.log(res.data);
        //     const{code,homeData}=res.data
        //     // 当code是200表示请求成功响应成功，将data的内容赋值
        //     if(code===200){
        //       data.small_sort=homeData.small_sort;
        //       data.big_sort=homeData.big_sort;
        //       data.centent_nav_list=homeData.centent_nav_list
        //     }
        //   })
        }
        // 渲染时调用gethomedata请求
        onMounted(()=>{
          getHomeData()
        })

        // vant的tab组件需要
        const active=ref(0)
        return {
            ...toRefs(data),
            // vant的tab组件需要
            active
        }
    }
}
</script>

<style lang="less" scoped>
// lang="less"表示使用less的语言规范来写css
.home{
    display: flex;
    flex-flow: column;
    height: 100%;
    font-size: 12px;
    .content{
        flex: 1;
        overflow-y: auto;
        // 页头的样式
        .header{
            background-image: linear-gradient(#ffc400,white);
            display: flex;
            justify-content: space-between;
            // flex后垂直对齐
            align-items: center;
            padding: 20px 20px 40px 20px;
            .text{
                font-size: 20px;
                font-weight: 600;
            }
            .location{
                span{
                    margin: 0 5px;
                }
                font-size: 14px;
            }
        }
        // 页头下面内容的样式
        .main{
            margin-top: -30px;//上移，使其嵌入header
            .main-bg{
                background-image: linear-gradient(#fff,#f5f5f5);
                padding: 10px 20px 0 20px;
                border-radius: 30px 30px 0 0;
                // 搜索部分样式
                .search{
                    position: relative;
                    // 搜索框样式
                    input{
                        width: 100%;
                        border: 1px solid #ffc400;
                        border-radius: 20px;
                        height: 30px;
                    }
                    // 搜索按钮样式
                    .search-text{
                        position: absolute;
                        right: -6px;
                        top: 1px;
                        background-color: #ffc400;
                        border-radius: 16px;
                        width: 50px;
                        height: 32px;
                        // 设置字体行距（首行按照盒子顶算起）
                        line-height: 32px;
                        //设置字体
                        font-size: 14px;
                        // 字体居中,如果不是flex就用这种方式居中
                        text-align: center;
                    }
                }
                // 分类部分样式
                .sort{
                    padding: 20px 0;
                    // 大分类部分样式
                    .big-sort{
                        display: flex;
                        div{
                            flex:1;
                            display: flex;
                            // 垂直居中
                            justify-content: center;
                            flex-flow: column;
                            align-items: center;
                            .icon{
                                width: 50px;
                                height: 50px;
                                margin-bottom: 5px;
                            }
                        }
                    }
                    // 小分类部分样式
                    .small-sort{
                        display: flex;
                        flex-wrap: wrap;
                        margin-top: 20px;
                        div{
                            display: flex;
                            justify-content: center;
                            flex-flow: column;
                            align-items: center;
                            width: 20%;
                        }
                        .icon{
                            width: 30px;
                            height: 30px;
                            margin: 10px;
                        }
                    }
                }
            }
            .van-tabs{
                padding: 0 20px 10px;
            }
        }
    }
}
// 样式穿透：表示需要修改vant（任何库）自带的属性样式的写法
// 注意，只有lang="less"的时候可以用
/deep/ .van-tabs__wrap{
    border-radius: 10px;
}
</style>