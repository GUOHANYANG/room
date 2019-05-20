<template>
  <div id="app">
    <router-view v-if="isReload"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide(){ // provide和inject组合使用
    return {
      reload:this.reload
    }
  },
  data(){
    return {
      isReload:true
    }
  },
  created(){
    console.log(sessionStorage.getItem('userInfo'))
    // 将获取到的用户信息存到sessionStorage里 刷新页面时vuex里的数据不丢失方案
    sessionStorage.getItem("userInfo") && this.$store.commit('keepUserInfo',JSON.parse(sessionStorage.getItem('userInfo')))
    console.log(this.$store.state.userInfo)
    // window.addEventListener('beforeunload',()=>{ // 监听页面刷新
    //   sessionStorage.setItem("userInfo",JSON.stringify(this.$store.state.userInfo))
    // })
  },
  methods:{
    reload(){// 刷新页面不重复请求接口方案
        this.isReload = false;
        this.$nextTick(function(){
          this.isReload = true
        })
    }
  },
  destroyed(){
    
  }
}
</script>

<style lang="less">
@import url('../static/css/style.less');
#app {
  
}
</style>
