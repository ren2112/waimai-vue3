<template>
    <Header :title="address"/>
    <!-- 编辑 -->
    <van-address-edit
    :area-list="areaList"
    show-delete
    show-set-default
    show-search-result
    :address-info="addressInfo"
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="onSave"
    @delete="onDelete"
    v-if="route.query.type==='edit'"/>
    <!-- 新增 -->
    <van-address-edit
    :area-list="areaList"
    show-set-default
    show-search-result
    :address-info="addressInfo"
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="onSave"
    @delete="onDelete"
    v-else/>

</template>

<script>
import { reactive,toRefs,onMounted } from 'vue';
import Header from '../../components/Header.vue'
import { useStore } from 'vuex';
import { useRoute,useRouter } from 'vue-router';
import { computed } from 'vue';
import {Toast} from 'vant'
export default{
    components:{
        Header
    },
    setup(){
        const store=useStore()
        const route=useRoute()
        const router=useRouter()
        const data=reactive({
            // 地区选择字典
            areaList:{
                province_list: {
                110000: "广东省",
                120000: "浙江省",
                },
                city_list: {
                110100: "广州市",
                110200: "深圳市",
                120100: "杭州市",
                120200: "宁波市",
                },
                county_list: {
                110101: "天河区",
                110102: "海珠区",
                120102: "上城区",
                130102: "下城区",
                }
            },
            // 表示点击编辑地址的时候按照原始数据展示以便编辑
            addressInfo:{}
        })

        // 保存地址修改，包括新增与编辑
        const onSave=(content)=>{
            if(route.query.type==='add'){
                store.commit('addaddress',content)
            }
            else{
                store.commit('editaddress',content)
            }
            Toast('保存成功！')
            setTimeout(() => {
                router.back()
            }, 1000);
        }

        const onDelete=(content)=>{
            store.commit("deleteaddress",content)
            Toast('删除成功！')
            setTimeout(() => {
                router.back()
            }, 1000);
        }
        // 地址编辑时根据传过来的id找编辑的是哪个地址
        const init=()=>{
            store.state.userAddress.forEach(item => {
                if(item.id===Number(route.query.id)){
                    data.addressInfo=item
                }
            });
        }

        // 根据address判定是地址新增还是编辑
        // 使用 computed 的目的是为了创建一个响应式的数据，该数据根据 route.query.type 的值来动态计算。这样做的好处是，当 route.query.type 的值发生变化时，address 的值会自动更新，而不需要手动去管理这种更新逻辑。
        // 如果不是computed则需要每次都要调用函数保证address会修改
        const address=computed(()=>{
            return route.query.type==='add'?'地址新增':"地址编辑"
        })

        onMounted(()=>{
            init()
        })
        return{
            ...toRefs(data),
            onSave,
            onDelete,
            address,
            route
        }
    }

}
</script>

<style lang="less" scoped>
/deep/ .van-button--danger {
  background-color: #ffc400;
  border-color: #ffc400;
}
/deep/ .van-switch--on {
  background-color: #ffc400;
}</style>