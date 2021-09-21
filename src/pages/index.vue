<template>
  <div id="index">
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
        <div class="zhulie">
          <ul>
            <li>首页</li>
            <li>男装</li>
            <li>女装</li>
            <li>数码</li>
            <li>团购</li>
          </ul>
        </div>
        <main id="main">
          <div v-for="comment in comments" :key="comment.id">
            <div class="item">
            <img :src="comment.isrc">
            <div class="item-info">
            <h3>{{comment.ih}}</h3>
            <span class="green">{{comment.createdAt}}</span>
            </div>
            <div class="overview">
            <h3>简介</h3>
            {{comment.overview}}
            </div>
            </div>
          </div>

        </main>
      </div>
      <footer>
        <div><ul>
          <li>新手上路</li>
          <li>售后流程</li>
          <li>购物流程</li>
          <li>隐私说明</li>
        </ul></div>
        <div><ul>
          <li>配送与支付</li>
          <li>货到付款区域</li>
          <li>配送支付查询</li>
          <li>支付方式说明</li>
        </ul></div>
        <div><ul>
          <li>服务保证</li>
          <li>退换货原则</li>
          <li>售后服务保证</li>
          <li>产品质量保证</li>
        </ul></div>
        <div><ul>
          <li>联系我们</li>
          <li>网站故障报告</li>
          <li>购物资讯</li>
          <li>投诉与建议</li>
        </ul></div>
      </footer>
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
import {comments} from './js/data'
export default({
  name:'index',
  data() {
    return {
      comments: []
     }
  },
  created() {
    this.comments=comments
  },
  methods:{
    close,
    open
  }
})
</script>

<style scoped>
@import '../assets/index.css';
</style>

