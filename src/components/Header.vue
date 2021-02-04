<template>
  <div class="header">
    <div class="max-div">
      <img src="../assets/home/logo.png" alt="" class="logo" />
      <!-- <img src="../assets/home/kb1234.png" alt="" class="kb" /> -->
      <div class="kb1234">
        <img src="../assets/home/kb1234.png" alt="" class="kb" />
      </div>

      <div style="display: flex; flex-direction: column">
        <div class="upper-header">
          <span>设为主页</span>
          <!--test text  -->
          <span class="line"></span>
          <span>代理登录</span>
          <span class="line"></span>
          <span>收藏我们</span>
          <span class="line"></span>
          <span>收藏我们</span>
        </div>
        <!-- input -->
        <div style="display: flex; align-items: center">
          <div class="image_down">
            <img src="../assets/home/joinus.png" alt="" height="100%" />
          </div>
          <div class="input_div">
            <input
              type="text"
              placeholder="账号"
              class="input"
              autocomplete="off"
            />
            <input
              type="password"
              placeholder="账号"
              class="input"
              autocomplete="off"
            />
          </div>
          <div class="btn_div">
            <img
              src="../assets/home/btn1.png"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
          <div class="btn_div two">
            <!-- <img
              src="../assets/home/btn2.png"
              alt=""
              height="100%"
              width="100%"
            /> -->
            账号账号
          </div>
        </div>
      </div>
    </div>
    <div style="width: 100%; background: #cc8c34; position: relative">
      <div class="tab_main">
        <div class="tab">
          <span
            class="nav_text"
            @click="Tabclick(1)"
            :class="{ active: activeTab == 1 }"
            >账号</span
          >
          <span
            class="nav_text"
            @click="Tabclick(2)"
            :class="{ active: activeTab == 2 }"
            >账号账号</span
          >
          <span
            class="nav_text"
            @click="Tabclick(3)"
            :class="{ active: activeTab == 3 }"
            >账号APP账号</span
          >
          <span
            class="nav_text"
            @click="Tabclick(4)"
            :class="{ active: activeTab == 4 }"
            >账号账号</span
          >
          <span
            class="nav_text"
            @click="Tabclick(5)"
            :class="{ active: activeTab == 5 }"
            >账号账</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1,
    };
  },
  methods: {
    Tabclick(n) {
      if (n == 1) {
        this.activeTab = 1;
        this.$router.push("/home");
      }
      if (n == 2) {
        this.activeTab = 2;
        this.$router.push("/real");
      }
      if (n == 3) {
        this.activeTab = 3;
        this.$router.push("/app");
      }
      if (n == 4) {
        this.activeTab = 4;
         this.$router.push("/promotion");
      }
      if (n == 5) {
        this.activeTab = 5;
        this.$router.push("/pay");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  //  height: 100px;
  background: #ae7b29;
  width: 100%;
  color: #fff;
  .max-div {
    max-width: 1200px !important;
    // background: gray;
    margin: 0 auto;
    display: flex;
    position: relative;
    // align-items: center;
    .logo {
      height: 150px;
      margin: 10px 0px;
      //   width: 150px;
      //   animation: move-byline 10s ease-out infinite;
      // padding-top: 10px;
      //   margin-top: 10px;
    }
    .kb1234 {
      height: 100px;
      display: flex;
      align-items: center;
      //   background: red;
      width: 200px;
      justify-content: center;
      margin-left: 15px;
      align-self: center;
      .kb {
        width: 100%;
      }
    }
  }
  .upper-header {
    display: flex;
    justify-content: flex-end;
    // align-items: center;
    // background: red;
    // margin: 0 auto;
    width: 500px;
    height: 80px;
    padding-top: 10px;
    span {
      user-select: none;
      -webkit-user-select: none;
      cursor: pointer;
      font-weight: bold;
      font-size: 18px;
      letter-spacing: 2px;
      //   padding: 10px 0px;
      //   margin: 0 10px;
      color: #f1d910;
    }
    .line {
      width: 2px;
      background: #f1d910;
      transform: rotate(35deg);
      height: 20px;
      margin: 0 15px;
    }
  }
  .image_down {
    display: flex;
    width: 200px;
    // background: green;
    height: 65px;
    // justify-content: flex-end;
    align-items: center;
    margin-left: 70px;
  }
  .input_div {
    height: 85px;
    // background: rgb(31, 26, 26);
    margin-top: -10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .input {
      width: 240px;
      height: 40px;
      border: 2px solid #e5a71d;
      background: transparent;
      outline: none;
      padding: 7px 10px;
      color: #fff;
      border-radius: 3px;
      font-size: 18px;
    }
    ::placeholder {
      color: #fff;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #fff;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #fff;
    }
  }
  .btn_div {
    background: #d4bf66;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    margin-left: 15px;
    width: 80px;
    border-left: 2px;
  }
  .two {
    margin-left: 0;
    background: #c9242f;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
}

.tab_main {
  height: 40px;
  max-width: 1200px !important;
  //   background: red;
  margin: 0 auto;
  .tab {
    height: 100%;
    max-width: 800px;
    // background: green;
    margin-left: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    .nav_text {
      color: #000;
      cursor: pointer;
      font-weight: bolder;
      font-size: 20px;
      letter-spacing: 1px;
      //   background: red;
      //   border-bottom: 2px solid red;
      //   padding: 10px 0;
      //   transition: 0.5s;
      position: relative;
      //   background: url(../assets/home/nav_text_bg.png);
      //   background-size: cover;
      //   width: auto;
    }
    .active {
      color: #f1d910;
    }
  }
}
</style>