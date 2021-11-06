<template>
  <div id="app">
      <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Coda:wght@400;800&family=PT+Serif+Caption:ital@0;1&family=Poppins:wght@200;300;400;500;600;700&display=swap');
#app {
  font-family: 'PT Serif Caption', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
