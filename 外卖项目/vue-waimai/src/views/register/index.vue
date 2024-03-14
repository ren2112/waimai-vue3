<template>
    <div class="register">
      <Header title="注册" />
      <div class="img">买团</div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="user"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="pass"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            color="#ffc400"
          >
            注册
          </van-button>
          <van-button
            round
            block
            type="info"
            color="#ffc400"
            class="register"
            @click="toLogin"
          >
            去登录
          </van-button>
        </div>
      </van-form>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import Header from '../../components/Header.vue'
import { reactive,toRefs } from 'vue'
import { Toast } from 'vant'

export default{
    components:{
        Header
    },
    setup(){
        const router=useRouter()
        const data=reactive({
            username:'',
            password:''
        })

        const register=(value)=>{
            // 新增userInfo字典
            localStorage.setItem('userInfo',JSON.stringify(value));
            Toast("注册成功");
            router.push('/login');
        }
        // 提交注册,value是表单信息，结构体形式
        const onSubmit=(value)=>{
            if(localStorage.userInfo){
                let userInfo=JSON.parse(localStorage.getItem("userInfo"));
                if(userInfo['user']===value['user']){
                    Toast("用户已存在");
                    return
                }
            }
            else{
                register(value)
            }
        }
        const toLogin=()=>{
            router.push('/login')
        }

        return{
            ...toRefs(data),
            onSubmit,
            toLogin
        }
    }
}
</script>

<style lang="less" scoped>
.register {
  .img {
    width: 200px;
    height: 200px;
    background-color: #ffc400;
    font-size: 80px;
    line-height: 200px;
    text-align: center;
    border-radius: 40px;
    margin: 20px auto;
  }
  .register {
    margin-top: 20px;
  }
}
</style>