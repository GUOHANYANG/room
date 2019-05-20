<template>
  <div class="hello">
    <!-- <ul class="tabs">
        <li><a href="#tab1">标签一</a></li>
        <li><a href="#tab2">标签二</a></li>
        <li><a href="#tab3">标签三</a></li>
        <li><a href="#tab4">标签四</a></li>
        <li><a href="#tab5">标签五</a></li>
    </ul>
    <div id="tab1" class="tab_content">tab1</div>

    <div id="tab2" class="tab_content">tab2</div>

    <div id="tab3" class="tab_content">tab3</div>

    <div id="tab4" class="tab_content">tab4</div>

    <div id="tab5" class="tab_content">tab5</div>
    <button @click="goReload">reload</button> -->
    <div>
      <h3>测试系统</h3>
      <p>名称：<input type="text" v-model="user.name"></p>
      <p>密码：<input type="text" v-model="user.pass"></p>
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import {setCookie} from '../comm/cookie'
export default {
  name: 'HelloWorld',
  inject:['reload'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user:{}
    }
  },
  created(){
    setCookie('name','www')
  },
  beforeDestroy(){
    bus.$emit('getMsg',this.msg)// eventBus组件间的一种传值方案，一般不用
  },
  methods:{
    login(){
      console.log(this.user)
      // 将获取到的用户信息存入vuex中
      this.$store.commit('keepUserInfo',this.user)
      console.log(this.$store.state.userInfo)
      // 存入sessionStorage中
      sessionStorage.setItem('userInfo',JSON.stringify(this.user))
      
      this.$router.push('/next')
      
    },
    goReload(){
      var _this = this;
      setTimeout(function(){
        console.log(1)
        _this.reload()
      },2000)
      
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  
}
.tab_content{
    width: 100%;
    height: 600px;

}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
