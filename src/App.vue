<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
/* body {
} */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  /* height: 100vh; */
  overflow-x: hidden !important;
  /* min-width: 1275px !important; */
  /* height: 100vh; */
  height: 100%;
  width: 100%;
}
</style>
