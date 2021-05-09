<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    if (this.isMobile()) {
      this.$router.push("/m");
    } else {
      this.$router.push("/");
    }
  },
};
</script>
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

body.modal-open {
  overflow: hidden;
  box-shadow: 0px 0px 20px 20px rgba(255,255,255,1);
 

  // background-color: orange;
  // background: rgba(0, 0, 0, 0.281);
}

::-webkit-scrollbar {
  width: 10px;
  cursor: pointer;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #e07648;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}

// ::selection {
// 	color: #000000;
// 	background-color: red;
// }

// /* for firefox */
// ::moz-selection {
// 	color: #000000;
// 	background-color: red;
// }
</style>
