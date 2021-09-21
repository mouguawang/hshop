<template>
<div id="login">
  <div class="container">
      <div class="circle-container">
        <div class="circle">
          <button id="close" @click="close">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gongneng-copy"></use>
          </svg>
          </button>
          <button id="open" @click="open">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-liebiao"></use>
          </svg>
          </button>
        </div>
      </div>
      <div class="logo" @click='$router.push({name:"index"})'><img src="@/assets/images/9.png"></div>
      <div class="content">
        <div class="container2">
          <h1>请登录</h1>
          <form>
            <div class="form-control">
              <input type="text" required id="email">
              <label for="email"><span>电子邮箱</span></label>
            </div>
            <div class="form-control">
              <input type="password" required id="password">
              <label for="password"><span>密码</span></label>
            </div>
            <button class="btn">登录</button>
            <p class="text">还没有一个账户？ <span @click='$router.push({name:"register"})'>注册</span> </p>
          </form>
        </div>
      </div>
    </div>
    <nav>
      <ul>
        <li><span @click='$router.push({name:"index"})'>首页</span></li>
        <li><span @click='$router.push({name:"searchList"})'>搜索列表</span></li>
        <li><span @click='$router.push({name:"login"})'>登录</span>/<span @click='$router.push({name:"register"})'>注册</span></li>
        <li><span @click='$router.push({name:"release"})'>上传闲置物品</span></li>
      </ul>
    </nav>
</div>
</template>

<script>
import {close,open} from './js/script'
export default({
  name:'login',
  data() {
    return {
      }
  },
  methods:{
    close,
    open,
  },
})
</script>

<style scoped>
@import '../assets/login.css';
</style>
