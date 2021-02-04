<template>
  <div class="real">
    <div class="bg">
      <div class="sub">
        <div
          style="
            width: 550px;
            height: 100%;
            background: green;
            position: relative;
            padding-top: 30px;
          "
        >
          <img src="../assets/real/girl.png" alt="" width="100%" style="" />
        </div>
        <!-- tab -->
        <div class="second">
          <div class="tabdiv">
            <span @click="TextActive(1)" :class="{ actTxt: activeText == 1 }"
              >Kb号账</span
            >
            <span @click="TextActive(2)" :class="{ actTxt: activeText == 2 }"
              >WL号账</span
            >
            <span @click="TextActive(3)" :class="{ actTxt: activeText == 3 }"
              >HN号账</span
            >
          </div>

          <div class="textdiv" v-show="this.activeText == 1">
            <h1>KB号账</h1>
            <p>
              为了给广, 大游戏玩家带来更安全稳,<br />
              为了给广大游戏玩家带来更安全
            </p>
          </div>
          <div class="textdiv" v-show="this.activeText == 2">
            <h1>WL号账</h1>
            <p>
              为了给广, 大游戏玩家带来更安全稳,<br />
              为了给广大游戏玩家带来更安全
            </p>
          </div>
          <div class="textdiv" v-show="this.activeText == 3">
            <h1>HN号账</h1>
            <p>
              为了给广, 大游戏玩家带来更安全稳,<br />
              为了给广大游戏玩家带来更安全
            </p>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeText: 1,
    };
  },
  methods: {
    TextActive(n) {
      if (n == 1) {
        this.activeText = 1;
        //console.log("hello");
      }
      if (n == 2) {
        this.activeText = 2;
      }
      if (n == 3) {
        this.activeText = 3;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.real {
  width: 100%;
}
.bg {
  height: 700px;
  background-image: linear-gradient(to top right, #e19a1c 60%, #f49235);
  width: 100%;
}
.sub {
  width: 1200px;
  background: red;
  height: 100%;
  margin: 0 auto;
  display: flex;
  position: relative;
}
.second {
  width: 650px;
  background: yellow;
  height: 100%;
  .tabdiv {
    height: 60px;
    width: 550px;
    margin: 0 auto;
    background: #f5892f;
    margin-top: 75px;
    border-radius: 100px;
    border: 4px solid red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: 30px;
      padding: 0 5px;
      color: #fff;
      //   background: green;
      //   border-radius: 200px;
      //   height: 100%;
      //   text-align: center;
      //   display: flex;
      //   align-self: center;
      //   align-items: center;
      //   margin: 0 5px;
      cursor: pointer;
    }
    .actTxt {
      background: #ffd89f;
      border-radius: 200px;
      height: 100%;
      text-align: center;
      display: flex;
      align-self: center;
      align-items: center;
      margin: 0 5px;
      color: #11a6e3;
    }
  }
}

.textdiv {
  width: 550px;
  background: #e19a1c;
  height: 280px;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  text-align: left;
  h1 {
    font-size: 140px;
    letter-spacing: 7px;
  }
  p {
    font-size: 34px;
    width: 100%;
    font-weight: bold;
  }
}
</style>