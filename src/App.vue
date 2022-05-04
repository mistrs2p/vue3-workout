<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <PageHome />
  <!-- <PageTest /> -->
</template>

<script>
import PageHome from '@/components/PageHome'
// import PageTest from '@/components/PageTest'

export default {
  name: 'App',
  components: {
    PageHome,
    // PageTest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
