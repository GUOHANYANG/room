<template>
  <div id="app">
    <router-view v-if="isReload"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide(){
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
    sessionStorage.getItem("userInfo") && this.$store.commit('keepUserInfo',JSON.parse(sessionStorage.getItem('userInfo')))
    console.log(this.$store.state.userInfo)
    // window.addEventListener('beforeunload',()=>{ // 监听页面刷新
    //   sessionStorage.setItem("userInfo",JSON.stringify(this.$store.state.userInfo))
    // })
  },
  methods:{
    reload(){
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
