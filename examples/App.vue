<template>
  <div id="app">
    <mainHeader></mainHeader>
    <div class="container">
      <sideNav class="nav" v-if="!isIndex"></sideNav>
      <router-view :class="{'view':!isIndex}"></router-view>
    </div>
  </div>
</template>

<script>
import mainHeader from './components/header'
import sideNav from './components/side-nav'

export default {
  name: 'App',
  data () {
    return {}
  },
  computed: {
    isIndex () {
      return this.$route.name === 'index'
    }
  },
  mounted () {},
  components: {
    mainHeader,
    sideNav
  }
}
</script>
<style scoped lang="scss" type="text/scss">
  .nav{
    position: fixed;
    top:0;
    bottom: 0;
    width:240px;
    margin-top: 67px;
    overflow-y: auto;
  }
  .container{
    width: 1140px;
    margin: 66px auto 0;
  }
  .view{
    padding-left:260px;
    overflow-y: auto;
  }
</style>
