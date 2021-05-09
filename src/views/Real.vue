<template>
  <div class="real">
    <div class="bg">
      <div class="sub">
        <div
          style="
            width: 550px;
            height: 100%;
            background: ;
            position: relative;
            padding-top: 30px;
          "
        >
          <img
            src="../assets/real/girl.png"
            alt=""
            width="100%"
            style=""
            draggable="false"
          />
        </div>
        <!-- tab -->
        <div class="second">
          <div class="tabdiv">
            <span @click="TextActive(1)" :class="{ actTxt: activeText == 1 }"
              >KB真人</span
            >
            <span @click="TextActive(2)" :class="{ actTxt: activeText == 2 }"
              >WL真人</span
            >
            <span @click="TextActive(3)" :class="{ actTxt: activeText == 3 }"
              >HN真人</span
            >
          </div>

          <div class="textdiv" v-show="this.activeText == 1">
            <h1>KB真人</h1>
            <p>
              凯博平台，真实赌场通过高清视频再现<br />
              让您与赌场内的玩家一起红顶绿。
            </p>
          </div>
          <div class="textdiv" v-show="this.activeText == 2">
            <h1>WL真人</h1>
            <p>
              万利平台，真实赌场通过高清视频再现<br />
              让您与赌场内的玩家一起红顶绿。
            </p>
          </div>
          <div class="textdiv" v-show="this.activeText == 3">
            <h1>HN真人</h1>
            <p>
              华纳平台，真实赌场通过高清视频再现<br />
              让您与赌场内的玩家一起红顶绿。
            </p>
          </div>
          <!--  -->
          <div class="imagetab">
            <img
              src="../assets/real/11.png"
              alt=""
              width="90px"
              style="margin-right: 15px"
              draggable="false"
            />
            <img
              src="../assets/real/22.png"
              alt=""
              width="60px"
              draggable="false"
            />
            <img
              src="../assets/real/33.png"
              alt=""
              width="50px"
              draggable="false"
            />
            <img
              src="../assets/real/44.png"
              alt=""
              width="60px"
              draggable="false"
            />
            <img
              src="../assets/real/55.png"
              alt=""
              width="60px"
              draggable="false"
            />
            <img
              src="../assets/real/66.png"
              alt=""
              width="60px"
              draggable="false"
            />
            <img
              src="../assets/real/77.png"
              alt=""
              width="60px"
              draggable="false"
            />
          </div>
          <!--  -->
          <div class="imagetab2">
            <img
              src="../assets/real/88.png"
              alt=""
              width="60px"
              draggable="false"
            />
          </div>
          <div class="imagetab2">
            <img
              src="../assets/real/99.png"
              alt=""
              width="50px"
              draggable="false"
            />
          </div>
          <div class="text_next">
            <img
              src="../assets/real/text.png"
              alt=""
              height="100%"
              width="auto"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  components: { Footer },
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
  height: 750px;
  background-image: linear-gradient(to top right, #e19a1c 60%, #f49235);
  width: 100%;
  position: relative;
}
.sub {
  width: 1200px;
  // background: red;
  height: 100%;
  margin: 0 auto;
  display: flex;
  position: relative;
}
.second {
  width: 650px;
  // background: yellow;
  height: 100%;
  .tabdiv {
    height: 60px;
    width: 550px;
    margin: 0 auto;
    background: #f5892f;
    margin-top: 75px;
    border-radius: 100px;
    border: 4px solid #ffd893;
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
  width: 580px;
  // background: red;
  // background: #e19a1c;
  height: 260px;
  color:#cc750e;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  text-align: left;
  -webkit-animation: fadeInRight 1s 0.2s ease both;
  -moz-animation: fadeInRight 1s 0.2s ease both;
  animation: fadeInRight 1s 0.2s ease both;

  @-webkit-keyframes fadeInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
    }
  }
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @-moz-keyframes fadeInRight {
    0% {
      opacity: 0;
      -moz-transform: translateX(20px);
    }
    100% {
      opacity: 1;
      -moz-transform: translateX(0);
    }
  }

  h1 {
    font-size: 140px;
    letter-spacing: 7px;
  }
  p {
    color: #fff;
    font-size: 31px;
    width: 100%;
    font-weight: bold;
  }
}

.imagetab {
  height: 80px;
  //background: red;
  width: 600px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  img {
    margin: 0 10px;
  }
}
.imagetab2 {
  height: 80px;
  // background: green;
  width: 600px;
  margin: 0 auto;
  margin-top: 5px;
  img {
    margin-left: 25px;
    height: 100%;
  }
}

.text_next {
  height: 40px;
  // background: red;
  width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>