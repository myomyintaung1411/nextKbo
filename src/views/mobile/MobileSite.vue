<template>
  <div style="width: 100%; background: #000; height: 100%; position: relative">
    <div class="header">
      <img src="../../assets/mobilesite/logo.png" alt="" class="logo-img" />
      <img
        class="head_line"
        src="../../assets/mobilesite/header_line.png"
        alt=""
      />
      <div class="nav">
        <ul>
          <li
            @click="goAssignBlock('block' + 0, 50)"
            :class="{ active: activeTab == 1 }"
          >
            凯博娱乐
          </li>
          <li
            @click="goAssignBlock('block' + 1, 50)"
            :class="{ active: activeTab == 2 }"
          >
            前往游戏
          </li>
          <li
            @click="goAssignBlock('block' + 2, 50)"
            :class="{ active: activeTab == 3 }"
          >
            APP下载
          </li>
          <li @click="Gologin()">登录</li>
          <li @click="GoRegister()">注册</li>
        </ul>
      </div>
    </div>
    <!-- carousal and marquee text -->
    <div class="carousal" ref="block0">
      <!-- carousal banner with img -->
      <div class="caro-main">
        <div class="carousal-img" v-for="(item, index) in cList" :key="index">
          <transition name="fade">
            <img
              v-if="currentSlide == index"
              style="height: 500px; width: 100%"
              :src="item.img"
            />
          </transition>
        </div>
        <!-- dot section -->
        <div style="height: 490px; width: 100%; position: relative">
          <div
            style="
              position: absolute;
              bottom: 0%;
              width: 100%;
              display: flex;
              justify-content: center;
            "
          >
            <div
              v-for="(item, index) in cList"
              :key="index"
              @click="makeActive(index)"
              :class="currentSlide == index ? 'gray' : 'white'"
              style="
                width: 25px;
                height: 25px;
                border-radius: 100%;
                cursor: pointer;
                margin: 5px;
              "
            ></div>
          </div>
        </div>
        <!--  -->
      </div>
      <!-- marquee text -->
      <div class="marquee">
        <marquee behavior="" direction="">
          为了给广大游戏玩家带来更安全稳定的线上体验环境，公司将针对在线上进行游戏无差额对打套利,洗钱等违反公司常规游戏操作的用户进行净网行动，一经发现封号冻结资金，概不退还！</marquee
        >
      </div>

      <div class="customer-service">
        <img
          src="../../assets/home/serviceimg.png"
          alt=""
          width="auto"
          height="auto"
          @click="Service()"
        />
      </div>
      <!-- <div class="qq" v-if="this.showdata">
        QQ : <br />

        <span>{{ this.$Global.optioner.QQ }}</span>
        <hr
          style="
            height: 0.5rem;

            background: rgb(231, 231, 154);
            margin: 1rem 0rem;
          "
        />
        WX : <br />
        <span>{{ this.$Global.optioner.WX }}</span>
      </div> -->

      <div class="qrcode" v-if="this.showdata">
        <img src="../../assets/qrcode.png" alt="" height="350px" width="100%" />
        <div class="text">QQ: {{ this.$Global.optioner.QQ }}</div>

        <div class="text">WX: {{ this.$Global.optioner.WX }}</div>
        <div class="text">PH: {{ this.$Global.optioner.PH }}</div>
      </div>
    </div>
    <!-- end -->

    <!-- promotion -->
    <!-- <div class="promo">
      <span>优惠活动 </span>
      <div class="imgdiv">
        <img src="../../assets/promotion/11.png" alt="" />
        <img src="../../assets/promotion/22.png" alt="" />
      </div>
      <div class="imgdiv">
        <img src="../../assets/promotion/33.png" alt="" />
        <img src="../../assets/promotion/44.png" alt="" />
      </div>
      <div class="imgdiv">
        <img src="../../assets/promotion/55.png" alt="" />
        <img src="../../assets/promotion/66.png" alt="" />
      </div>
      <div class="imgdiv">
        <img src="../../assets/promotion/77.png" alt="" />
        <img src="../../assets/promotion/88.png" alt="" />
      </div>
    </div> -->
    <!--  -->

    <div class="hn_c" ref="block1">
      <span>游戏登录</span>
      <!-- card -->
      <div class="card">
        <div class="c_body">
          <img src="../../assets/mobilesite/servicegirl1.jpg" alt="" />
          <font color="#fff">凯博娱乐</font>
          <p>
            您想要的都在这里，平台有实力，游戏质量有保障 <br />
            多玩少玩，多少要玩，早赢晚赢，早晚要赢
          </p>
          <button @click="goPlayGame()">登录</button>
        </div>
      </div>
      <div class="card">
        <div class="c_body">
          <img src="../../assets/mobilesite/servicegirl2.jpg" alt="" />
          <font color="#fff">凯博娱乐</font>
          <p>
            您想要的都在这里，平台有实力，游戏质量有保障 <br />
            多玩少玩，多少要玩，早赢晚赢，早晚要赢
          </p>
          <div class="button_g">
            <button @click="goPlayGame()">登录</button>
            <button @click="goTestGame()">试玩</button>
          </div>
        </div>
      </div>
      <!-- card -->

      <div class="desc" v-for="d in items" :key="d.id">
        <div class="desc_img">
          <img :src="d.img" alt="" />
        </div>
        <div class="desc_info">
          <p>{{ d.title }}</p>
          <p>{{ d.p }}</p>
        </div>
      </div>
      <!-- card-img with text -->
    </div>
    <!-- end -->

    <hr
      style="margin: 15px; border: none; height: 2px; background-color: #ccc"
    />

    <div class="download" ref="block2">
      <span>APP下载</span>
      <p>
        随时随地，手机投注，安全畅玩, 凯博相伴 <br />
        赶紧扫描下载吧
      </p>
      <div class="qr_code">
        <img src="../../../public/kaiboqr.png" alt="" draggable="false" />
        <!-- <img src="../assets/images/qr1.png" alt=""> -->
      </div>
      <div class="down_text">
        <!-- <p>H5登录</p> -->
        <p>
          <a href="http://kb1234.com/">H5登录</a>
          ,&nbsp;安卓/苹果下载
        </p>
      </div>
    </div>
    <!-- scrollimgdiv -->
    <hr
      style="margin: 15px; border: none; height: 2px; background-color: #ccc"
    />
    <div class="scroll__img__div">
      <div
        class="scroll_img"
        v-for="(s, index) in scrollImg"
        :key="index"
        @click="goPlayGame()"
      >
        <img :src="s.img" alt="" />
        <span>{{ s.text }}</span>
      </div>
    </div>

    <div id="footer">
      <p>Copyright &#169; 凯博娱乐 Co., Ltd. All rights reserved.</p>
    </div>
  </div>
</template>
 
<script>
import AES from "../../api/aes";
import { Base64 } from "js-base64";
export default {
  data() {
    return {
      showdata: false,
      interval: "",
      isTitleShowing: true,
      currentSlide: 1,
      activeTab: 1,
      code: "",
      codeList: [],
      scrolldata: "华纳国际欢迎您",
      id: this.$Global.myLoginInfo.loginId, //scrolldata
      regForm: {
        name: "",
        pass: "",
        checkPass: "",
        phone: "",
      },
      cList: [
        { img: require("../../assets/home/ba1.jpg") },
        { img: require("../../assets/home/ba2.jpg") },
        { img: require("../../assets/home/ba3.jpg") },
      ],
      scrollImg: [
        {
          img: require("../../assets/livecasino/1.png"),
          text: "炸金花",
        },
        {
          img: require("../../assets/livecasino/2.png"),
          text: "百家乐",
        },
        {
          img: require("../../assets/livecasino/3.png"),
          text: "牛牛",
        },
        {
          img: require("../../assets/livecasino/4.png"),
          text: "龙虎斗",
        },
        {
          img: require("../../assets/livecasino/5.png"),
          text: "推筒子",
        },
      ],
      items: [
        {
          id: 1,
          img: require("../../assets/mobilesite/1.png"),
          title: "更专业",
          p:
            "我们在业内聘请了一些经验丰富的线上博彩专家和操盘手并保证我们游戏平台里的赔率是最佳赔率",
        },
        {
          id: 2,
          img: require("../../assets/mobilesite/2.png"),
          title: "更快速",
          p: "凯博一直注重用户体验，高效快速的存款取款业务是用户最实在的体验",
        },
        {
          id: 3,
          img: require("../../assets/mobilesite/3.png"),
          title: "更安全",
          p:
            "客服均经过严格的筛选及专业的培训用心打造精英客服团队为玩家提供优质服务",
        },
        {
          id: 4,
          img: require("../../assets/mobilesite/4.png"),
          title: "更便捷",
          p: "自主研发的Web, H5更有IOS, Andorid原生APP, 让您随时随地娱乐投注",
        },
      ],
    };
  },

  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }, 4000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  created() {
    let s = window.location.href;
    // var s = "http://21019.hn232.com";
    let h = s.split(".")[0];
    //  console.log(h);
    let a = h.split("//")[1];
    //  console.log(a);
    this.getAgentInfo(a);

    this.GetScrollData(this.id);
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index;
    },

    getAgentInfo(id) {
      var en = this.$Global.en;
      let data = JSON.stringify({ Id: id });
      let endata = AES.encrypt(data, en);

      // var decryptdata = JSON.parse(AES.decrypt(endata, en));
      this.axios
        .post(this.$Global.agentUrl, { data: endata })
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
          // console.log(msg);
          if (msg.JsonData.code == 200) {
            this.$Global.optioner.QQ = msg.JsonData.QQ;
            this.$Global.optioner.WX = msg.JsonData.WXH;
            this.$Global.optioner.PH = msg.JsonData.phone;
            this.$Global.optioner.AgentId = msg.JsonData.Id;
            this.$Global.optioner.AgentName = msg.JsonData.name;
            // console.log(this.$Global)
          }
        })
        .catch((e) => {
          console.error(e);
        });
    },
    GetScrollData(id) {
      var en = this.$Global.en;
      let data = JSON.stringify({ Id: id });
      let endata = AES.encrypt(data, en);
      //  var decryptdata = JSON.parse(AES.decrypt(endata, en));

      this.axios
        .post(this.$Global.scrollData, { data: endata })
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));

          if (msg.JsonData.code == 200) {
            this.scrolldata = msg.JsonData.msg;
          } else {
            this.scrolldata =
              "为了给广大游戏玩家带来更安全稳定的线上体验环境，公司将针对在线上进行游戏无差额对打套利,洗钱等违反公司常规游戏操作的用户进行净网行动，一经发现封号冻结资金，概不退还！";
          }
        })
        .catch((e) => {
          console.error(e);
        });
    },
    Gologin() {
      if (this.$store.state.login == true)
        return this.$mobilemessage.warning("您已登陆成功");
      this.$router.push("/login");
    },
    GoRegister() {
      this.$router.push("/register");
    },
    goTestGame() {
      window.open("http://kb1234.com/?token=", "_blank");
    },
    goPlayGame() {
      if (this.$store.state.login == false) {
        return this.$mobilemessage.warning("请先登录");
      } else {
        var gameEn = this.$Global.gameEn;
        let data = {
          name: this.$store.state.myAccount,
          password: this.$md5(this.$store.state.myPassword),
        };
        // console.log(data)
        var endata = AES.encrypt(JSON.stringify(data), gameEn);
        window.open(`http://kb1234.com/?token=${endata}`);
      }
    },

    //customer service
    randomString(len, charSet) {
      charSet =
        charSet ||
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/";
      var randomString = "";
      for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
      }
      return randomString;
    },
    doEncrypt() {
      let data = {
        acc: this.$store.state.myAccount,
        pwd: this.$md5(this.$store.state.myPassword),
        agent: 5, // 1.hn 2.wl 3.hngs 4.ws 5.kb
      };
      //  console.log(data, "asdfasdfasd");
      // let data ={
      //   acc:"admin",
      //   pwd:this.$md5("111111")
      // }
      let data1 = Base64.encode(JSON.stringify(data));
      let data2 = data1.substring(0, 8);
      let data3 = data1.substring(8);
      let add8 = data2 + this.randomString(8);
      let token = this.randomString(9) + add8 + data3;
      // console.log(data1, data2, data3, add8, token);
      return token;
    },
    Service() {
      this.showdata = !this.showdata;
      // if (this.$store.state.login == false) {
      //   //let token = this.doEncrypt();
      //   window.open(`http://kblc.hn885.com/php/app.php?widget-mobile`);
      // } else {
      //   let token = this.doEncrypt();
      //   window.open(
      //     `http://kblc.hn885.com/php/app.php?widget-mobile&&token=${token}`
      //   );
      // }

      if (this.$store.state.login == true) {
        let loginId = this.$Global.myLoginInfo.loginId;
        let loginName = this.$Global.myLoginInfo.loginName;
        // window.open(
        //   `http://kbchat.hn885.com/index/index/home?visiter_id=${loginId}&visiter_name=${loginName}&avatar=&business_id=2&groupid=0&special=2`
        // );
        window.open(
          `https://www.shopad9999.com/index/index/home?visiter_id=${loginId}&visiter_name=${loginName}&avatar=&business_id=40&groupid=0&special=50`
        );
      } else {
        // window.open(
        //   `http://kbchat.hn885.com/index/index/home?visiter_id=&visiter_name=&avatar=&business_id=2&groupid=0&special=2`,
        //   "_blank"
        // );
        window.open(
          `https://www.shopad9999.com/index/index/home?visiter_id=&visiter_name=&avatar=&business_id=40&groupid=0&special=50`
        );
      }
    },

    //el 标签  speed 滚动速率 此处是50px 值越大滚动的越快
    goAssignBlock(el, speed) {
      switch (el) {
        case "block0":
          this.activeTab = 1;
          break;
        case "block1":
          this.activeTab = 2;
          break;
        case "block2":
          this.activeTab = 3;
          break;
      }
      // let _this = this
      let windowH = window.innerHeight; //浏览器窗口高度
      let h = this.$refs[el].offsetHeight; //模块内容高度
      let t = this.$refs[el].offsetTop; //模块相对于内容顶部的距离
      let top = t - (windowH - h) / 2; //需要滚动到的位置，若改为 t 则滚动到模块顶部位置，此处是滚动到模块相对于窗口垂直居中的位置
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; //滚动条距离顶部高度
      let currentTop = scrollTop; //默认滚动位置为当前滚动条位置，若改为0，则每次都会从顶部滚动到指定位置
      let requestId;
      //采用requestAnimationFrame，平滑动画
      function step() {
        //判断让滚动条向上滚还是向下滚
        if (scrollTop < top) {
          if (currentTop <= top) {
            //   window.scrollTo(x,y) y为上下滚动位置
            window.scrollTo(0, currentTop);
            requestId = window.requestAnimationFrame(step);
          } else {
            window.cancelAnimationFrame(requestId);
          }
          //向下滚动
          currentTop += speed;
        } else {
          if (top <= currentTop) {
            //注：此处 - speed 是解决居中时存在的问题，可自行设置或去掉
            window.scrollTo(0, currentTop - speed);
            requestId = window.requestAnimationFrame(step);
          } else {
            window.cancelAnimationFrame(requestId);
          }
          //向上滚动
          currentTop -= speed;
        }
      }
      window.requestAnimationFrame(step);
    },
  },
};
</script>
 
<style lang="scss" scoped>
.header {
  height: 210px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: #704910;
  .logo-img {
    margin: 5px 0;
    //   // margin-top: 5px;
    //   // width: 100px;
    //   // height: 100px;
    height: 130px;
    width: auto;
  }
  .head_line {
    width: 100%;
    margin: 0;
  }
  .nav {
    width: 100%;
    height: 50px;
    margin: 20px 0;
    // background: red;

    ul {
      display: flex;
      justify-content: space-around;
      height: 30px;
      list-style: none;
      // margin: 20px 0;
      // background: #ccc;
      li {
        color: white;
        line-height: 30px;
        font-size: 2.2vh;
      }
    }
  }
}
.active {
  color: rgb(230, 192, 27) !important;
}
.carousal {
  height: 580px;
  margin-top: 210px;
  position: relative;
  // background: blue;
  overflow: hidden;
  .caro-main {
    height: 500px;
    // background: red;
    position: relative;
    .carousal-img {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      // background: green;
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: all 1s ease;
    }
    .fade-enter-from {
      opacity: 0;
      transform: translateX(-100%);
    }
    .fade-leave-to {
      opacity: 0;
      transform: translateX(100%);
    }

    .gray {
      background: brown;
    }
    .white {
      background: gray;
    }
  }
  // marquee
  .marquee {
    height: 80px;
    background: #fff;
    width: 100%;
    marquee {
      height: 80px;
      width: 100%;
      background: #704910;
      line-height: 80px;
      color: #fff;
      font-size: 4vw;
    }
  }

  .customer-service {
    // width: 5rem;
    // height: 5rem;
    position: fixed;
    top: 20%;
    z-index: 1000;
    right: 0%;
    // background: red;
  }
  .qrcode {
    position: fixed;
    height: auto;
    width: 350px;
    background: #fff;
    right: 12%;
    top: 20%;
    //display: none;
    display: flex;
    flex-direction: column;
    z-index: 1000;

    .text {
      // width: 100px;
      width: auto;
      height: auto;
      float: left;
      white-space: normal;
      word-wrap: break-word;
      word-break: break-all;
      // background: #000;
      text-align: left;
      color: #000;
      font-weight: bold;
      padding: 5px 10px;
      margin: 4px 0px;
      font-size: 3rem;
    }
  }
}

.promo {
  // background: #704910;
  margin-top: 30px;
  position: relative;
  width: 100%;
  span {
    font-size: 3.5vh;
    font-weight: 700;
    color: rgb(230, 192, 27);
    padding-top: 10px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    // background: red;
  }
  .imgdiv {
    padding-top: 1rem;
    height: 11rem;
    // background: red;
    width: 90%;
    margin: 0 5%;
    display: flex;
    justify-content: space-between;
    img {
      width: 48%;
      height: 10rem;
    }
  }
  // img{
  //   height: auto;
  //   margin: 1rem 0rem;
  // }
}

.hn_c {
  margin-top: 30px;
  position: relative;
  // background: red;
  // height: 300px;

  span {
    font-size: 3.5vh;
    font-weight: 700;
    color: rgb(230, 192, 27);
    padding-top: 10px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    // background: red;
  }
  .card {
    // height: 250px;
    padding: 10px 0;
    background: #000;
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0 10px 0;
    position: relative;
    .c_body {
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // border: 1px solid #f4dc0f;
      border-radius: 5px;
      background: #704910;
      margin-bottom: 10px;
      position: relative;
      img {
        width: 100%;
        height: auto;
        position: relative;
        // border-radius: 5px;
      }
      font {
        font-size: 5vw;
        margin: 5px 0;
        font-weight: normal;
      }
      p {
        padding: 5px 0;
        font-size: 2.2vh;
        line-height: 3vh;
        text-align: center;
        color: #fff;
      }
      button {
        display: block;
        width: 30%;
        margin: 15px 0;
        padding: 20px 10px;
        border-radius: 5px;
        // background: linear-gradient(180deg, #fd654e, #eea467);
        background: linear-gradient(-135deg, #ddb811, #35290a);
        color: #fff;
        border: none;
        cursor: pointer;
        font-size: 2.5vh;
      }
      .button_g {
        display: flex;
        justify-content: space-around;
        width: 100%;
        button:first-child {
          display: block;
          // width: 20%;
          margin: 15px 0px;
          //padding: 25px 10px;
          padding: 20px 10px;
          border-radius: 5px;
          background: linear-gradient(-135deg, #ddb811, #35290a);
          // background: transparent;
          // border: 1px solid#f2ce0a;
          border: none;
          cursor: pointer;
          font-size: 2.5vh;
        }
        button:last-child {
          display: block;
          // width: 20%;
          margin: 15px 0px;
          padding: 20px 10px;
          border-radius: 5px;
          background: linear-gradient(-135deg, #1158dd, #946e0f);
          color: #fff;
          border: none;
          cursor: pointer;
          font-size: 2.5vh;
        }
      }
    }
  }
}

.desc {
  display: flex;
  width: 100%;
  padding: 30px 0;
  // background: #fff;
  // background: #704910;
  .desc_img {
    width: 25%;
    padding-left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    // background: red;
    img {
      width: auto;
      height: 200px;
    }
  }
  .desc_info {
    width: 75%;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    p:first-child {
      color: rgb(230, 192, 27);
      font-weight: bold;
      word-wrap: break-word;
      font-size: 3.5vh;
    }
    p:last-child {
      color: #fff;
      word-wrap: break-word;
      font-size: 2.5vh;
    }
  }
}

.download {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 0 10px 0;
  // background: #704910;
  margin-top: 1.5rem;
  span {
    font-size: 3.5vh;
    font-weight: 700;
    color: rgb(230, 192, 27);
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    color: #fff;
    text-align: center;
    word-wrap: break-word;
    padding: 10px 20px;
    font-size: 2.5vh;
  }
  .qr_code {
    padding: 10px;
    display: flex;
    justify-content: space-around;

    img {
      padding-top: 10px;
      width: 65%;
      height: auto;
    }
  }
  .down_text {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      width: 55%;
      font-size: 2.5vh;
      font-weight: 700;
      color: white;
      text-align: center;
      a {
        // text-decoration: none;
        color: white;
      }
    }
  }
}

.login {
  display: flex;
  flex-direction: column;
  // height: 450px;
  // background: red;
  margin: 0 10px;
  span {
    font-size: 3.5vh;
    font-weight: 700;
    color: rgb(231, 231, 154);
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login_form {
    // height: 380px;
    // height: 450px;
    border: 1px solid #fff;
    margin: 20px;
    .form_item {
      text-align: center;
      p {
        color: #f5f5f5;
        text-align: left;
        padding-left: 40px;
        margin: 25px 0;
        font-size: 3vh;
        font-weight: bold;
      }
      input {
        border: 5px solid #f4dc0f;
        background: transparent;
        outline: none;
        border-radius: 2px;
        width: 90%;
        font-size: 2.4vh;
        padding: 25px 15px;
        color: #fff;
      }
    }
    .login_action {
      display: flex;
      justify-content: space-around;
      margin-top: 40px;
      margin-bottom: 40px;
      button {
        display: block;
        width: 40%;
        padding: 8px 0px;
        // background: linear-gradient(180deg, #fd654e, #eea467);
        background: rgb(231, 231, 154);
        color: #000;
        border: none;
        cursor: pointer;
        font-size: 3vh;
      }
    }
  }
}
.ValidCode {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f7fa;
  // border-radius: 5px;
  width: 40%;
  height: 80px;
  margin-right: 10px;
  cursor: pointer;
  span {
    display: inline-block;
    font-size: 45px !important;
  }
}
.scroll__img__div {
  // height: 300px;
  width: 100%;
  // background: red;
  display: flex;
  align-items: center;
  // background: #704910;
  //justify-content: center;
  margin: 1.5rem 0;
  overflow-x: scroll;
  .scroll_img {
    display: flex;
    flex-direction: column;
    // margin:0 3rem;
    padding: 0 3rem;
    img {
      width: 200px;
      height: auto;
    }
    // img:last-child{
    //   margin-right: 3rem;
    // }
    span {
      text-align: center;
      font-size: 2.5rem;
      font-weight: 600;
      color: #fff;
    }
  }
}
#footer {
  background: #704910;
  width: 100%;
  height: 120px;
  // box-shadow: 0 7px 20px 2px #d1d1d1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  p {
    font-weight: bold;
    font-size: 2vh;
    cursor: pointer;
  }
}
</style>

