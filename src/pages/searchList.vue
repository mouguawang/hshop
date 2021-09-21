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
        <div class="search">
          <input type="text" class="input" placeholder="搜索...">
          <button class="btn" @click="unfold">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-sousuo"></use>
          </svg>
          </button>
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
  name:'searchList',
  data() {
    return {
      }
  },
  methods:{
    close,
    open,
    unfold(){
      const search = document.querySelector('.search')
      const input = document.querySelector('.input')
      search.classList.toggle('active')//第一个参数为要在元素中移除的类名，并返回 false。如果该类名不存在则会在元素中添加类名，并返回 true。
      input.focus()//获取焦点。
    }
  }
})
</script>

<style scoped>
@import '../assets/searchList.css';
</style>
