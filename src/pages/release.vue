<template>
<div id="release">
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
          <h1>请填写以下信息</h1>
          <form>
            <div class="form-control">
            <lable><span>上传物品图片</span></lable>
            <elup></elup>
            </div>
            <div class="form-control">
              <input type="text" required id="goods" v-model="input1">
              <label for="goods"><span>物品名称</span></label>
            </div>
            <div class="form-control">
              <input type="text" required id="overview" v-model="input2">
              <label for="overview"><span>物品介绍及价格</span></label>
            </div>
            <button class="btn" @click="addComment">发布</button>
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
import elup from '../components/elup.vue'
import {close,open} from './js/script'
import {comments} from './js/data'
export default({
  name:'release',
  components:{
    elup
  },
  data() {
    return {
      input1:'',
      input2:'',
      comments: []
      }
  },
  created() {
    this.comments=comments
  },
  methods:{
    close,
    open,
    addComment(){
      var createdAt=new Date().toLocaleDateString();
      var a=document.getElementById("myimage").src;
      var isrc=a;
      this.comments.push({
        ih:this.input1,
        overview:this.input2,
        createdAt:createdAt,
        isrc:isrc
      })
      this.input1='';
      this.input2='';
    },
  },
})
</script>

<style scoped>
@import '../assets/login.css';
.container2 {
  width: 600px;
  height: 580px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px 40px;
  border-radius: 5px;
}
</style>
