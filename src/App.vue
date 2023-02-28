<template>
  <div class="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view msg="Welcome to CRUD App"/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  margin: 0;
    padding: 0;
  /* margin-top: 60px; */
}
body{
  background-color: #18224b;
}
* {
  padding: 0px;
  margin: 0px;
}
</style>
