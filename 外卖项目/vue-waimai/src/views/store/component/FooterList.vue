<template>
    <!-- 由于只有点菜栏（index为0）有侧边栏，因此需要使用v-if -->
    <div class="food-list" v-if="index===0">
        <!-- 侧边选择栏 -->
        <van-tree-select
        v-model:main-active-index="activeIndex"
        height="88vw"
        :items="items"
        @click-nav="navClick"
        >
        <!-- @click-nav="navClick"是vant提供的api -->
            <!-- 侧边选择栏选择后对应右边内容 -->
            <template #content>
                <div v-for="(item,index) in subItem" :key="index" class="item-bg">
                    <ListItem :item="item" :handleAdd="handleAdd" :handleChange="handleChange"/>
                </div>
            </template>
        </van-tree-select>
    </div>

    <!-- index不为0，非点菜 -->
    <div v-else>
        {{ foodData.content }}
    </div>
</template>

<script>
import { reactive,toRefs } from 'vue';
import FoodListItem from './FoodListItem.vue'
import ListItem from '../../../components/ListItem.vue'


export default{
    props:['index','foodData'],

    components:{
    FoodListItem,
    // 最后真正只用到下面这个
    ListItem,
},

    setup(props){
        let data=reactive({
            // 为vant的侧栏必需，表示被选中的侧栏的下标
            activeIndex:0,
            // 侧栏分类数量由items的数量决定
            items:[],
            // subItem:获取children数据（就是该选中侧栏的商品数据）
            subItem:[]
        })

        //需要初始化侧栏文本 
        const initData=()=>{
            let newArray=[];
            // 开始遍历storeData里面的data的items，以获取text
            // 加“？”是为了确保有该属性，否则不走
            // 这个函数本来就只是为了初始化items的
            props.foodData?.items?.forEach((item,index)=>{
                newArray.push({
                    text:item.text
                })
                // 由navclick函数调用后根据activeindex来选需要的那个index，表示将要展示选中侧栏部分的商品
                if(data.activeIndex===index){
                    data.subItem=item.children
                }       
            })
            // 初始化data里面的items（侧边栏数组）
            data.items=newArray
        }
        initData()//还需要调用！为了初始化

        // 定义侧栏点击事件
        const navClick=(i)=>{
            data.activeIndex=i;
            // 每点击一次都会调用
            initData()
        }

        //handleAdd的定义,用来更改item.add的状态，1为可以显示icon，否则不显示
        const handleAdd=(id)=>{
            data.subItem.forEach((item,index)=>{
                // subitem的每一个菜会传到子组件foodlistitem里面，
                if(item.id===id){
                    item.add=false;
                    // 不加这个会导致点击icon后出现步进器，且为1，但是此时num都没更新为1,
                    item.num+=1;
                } 
            })
        }

        // 为了同步store里面的数据data经过步数器的修改同步
        const handleChange=(value,detail)=>{
            // 从组件获得id来遍历对比看看改的是那个id的num并且更新
            // detail是来自ListItem的:name="item.id"
            data.subItem.forEach((item)=>{
                if(item.id===detail.name){
                    item.num=value;
                }
            })
            // console.log(data.subItem);
        }

        return{
            ...toRefs(data),
            navClick,
            handleAdd,
            handleChange,
        }
    }
}
</script>

<style lang="less" scoped>
.food-list {
  margin-top: 20px;
  .item-bg {
    padding: 10px;
  }
}
/deep/ .van-tree-select__item--active {
    color: #ffc400;
}
/deep/ .van-sidebar-item--select::before {
    background-color: #ffc400;
}
</style>