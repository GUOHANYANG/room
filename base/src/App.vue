<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div></div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='less'>
@import url('../static/css/style.less');
// @import "~@cs/style";
#app{
  width:100%;
  height:100vh;
  div{
    width:100%;
    height:300px;
    background: orange;
  }
}
</style>
