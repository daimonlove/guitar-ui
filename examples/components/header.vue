<template>
  <header class="page-header">
    <div class="header-container">
      <div class="logo">
        <router-link :to="{name: 'index'}"><img src="../assets/imgs/logo.png"></router-link>
      </div>
      <ul class="main-nav">
        <li><a href="#">指南</a></li>
        <li><router-link :to="{name: 'giud'}">组件</router-link></li>
        <li><a href="#">资源</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped type="text/scss">
  .page-header{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:65px;
    box-shadow: 0 0 2px rgba(0,0,0,.25)
  }
  .header-container{
    display: flex;
    width: 1140px;
    margin:10px auto;
    justify-content: space-between;
  }
  .main-nav{
    display: flex;
    li{
      padding: 0 10px;
      margin:0 10px;
    }
  }
</style>
