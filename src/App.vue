<template>
  <div id="app">
    <div id="nav">
      <Navbar/>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script type="text/javascript">
    import Navbar from '@/components/Navbar.vue'

    export default {
      components: {
        Navbar
      }
    }

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
