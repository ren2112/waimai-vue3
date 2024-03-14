<template>
    <Header title="账号管理"/>
    <div>
        <!-- v-model为了绑定数据，v-bind为了绑定html的属性（如class，name）的名称，也就是说其属性是动态的 -->
        <van-field v-model="name" label="昵称" placeholder="请输入昵称" />
        <van-field v-model="sign" label="个性签名" placeholder="请输入个性签名" />
        <van-field v-model="pass" label="密码" placeholder="请输入密码" />
    </div>
    <van-button type="primary" color="#ffc400" round block class="save-btn"
    @click="save">保存</van-button>
    <van-button type="primary" color="#ffc400" round block class="save-btn"
    @click="logOut">退出登录</van-button>
</template>

<script>
import { reactive,toRefs } from 'vue';
import Header from '../../components/Header.vue'
import { Toast } from 'vant';
import { useRouter } from 'vue-router';
export default{
    components:{
        Header
    },
    setup(){

        const router=useRouter()
        const data=reactive({
            name:'',
            sign:"不错",
            pass:''
        })

        // 保存修改个人信息
        const save=()=>{
            if(data.name&&data.pass){
                let userInfo=JSON.parse(localStorage.userInfo)
                let newUserInfo={
                    user:data.name||userInfo.name,
                    pass:data.pass||userInfo.pass
                }
                localStorage.setItem('userInfo',JSON.stringify(newUserInfo));
                Toast("修改成功！")
                router.push('/mine')
            }
            else{
                Toast("请输入内容！")
            }
        }

        // 登出
        const logOut=()=>{
            localStorage.removeItem('isLogin')
            Toast("退出成功")
            router.push('/login')
        }

        return{
            ...toRefs(data),
            save,
            logOut
        }
    }
}
</script>

<style lang="less" scoped>
.save-btn {
  width: 80%;
  margin: 20px auto;
}
</style>