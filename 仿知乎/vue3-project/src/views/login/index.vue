
<template>
<div class="login">
    <el-form :model="form" label-width="120px">
        <div class="login-img">
            <img src="@/assets/image/v2.png" alt="">
        </div>
        <div class="login-item">
            <div class="loginleft">
                <p class="loginleft-title">打开知乎App</p>
                <!-- 二维码部分 -->
                <div class="loginleft-erm">
                    <img src="@/assets/image/ITM920.jpg" alt="">
                </div>
    
                <p class="loginleft-message">其他扫码方式：微信</p>
    
                <ul>
                    <li><el-button round>下载知乎app</el-button></li>
                    <li><el-button round>开通机构号</el-button></li>
                    <li><el-button round>无障碍模式</el-button></li>
                </ul>
            </div>
    
            <div class="loginright">
                <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                    
                    <el-tab-pane label="账号登录" name="first">
                        <el-input v-model="form.name" placeholder="请输入手机/用户名"/>
                        <el-input v-model="form.password" type="password" placeholder="请输入密码"/>
                        <el-button type="primary" @click="onsubmit">登录</el-button>
                        <div class="otherwise">
                            <div class="otherwise-title">其他方式登录</div>
                            <ul>
                                <li>
                                    <svg class="icon-font">
                                        <use xlink:href="#icon-weixin"></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg class="icon-font">
                                        <use xlink:href="#icon-QQ"></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg class="icon-font">
                                        <use xlink:href="#icon-shejiaotubiao-06"></use>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </el-tab-pane>

                    <el-tab-pane label="注册" name="second">
                        <el-input v-model="form.input3" placeholder="请输入手机/用户名"/>
                        <div class="code-btn">
                            <el-input v-model="form.input4" placeholder="请输入验证码"/>
                            <el-link type="primary">获取验证码</el-link>
                        </div>
                        <el-input v-model="form.input5" type="password" placeholder="请设置密码"/>
                        <el-button type="primary" @click="onsubmit">注册</el-button>
                        <p class="aggreement">注册即代表同意用户协议</p>
                    </el-tab-pane>
                </el-tabs>
            </div>
    
        </div>
    
    </el-form>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const activeName = ref('first')
const form = reactive({
  name: '',
  password:''
})

const router=useRouter()
const onsubmit=()=>{
    router.push('/index')
}
</script>
<style scoped>

</style>
