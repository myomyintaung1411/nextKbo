<template>
  <div class="home">
    <Banner></Banner>
    <div class="main_section">
      <!--  -->
      <div style="position: relative">
        <div class="customer-service">
          <img
            src="../assets/home/serviceimg.png"
            alt=""
            @click="Service()"
            draggable="false"
            class="img"
          />

          <div class="qr_code">
            <img
              src="../assets/qrcode.png"
              alt=""
              height="200px"
              width="100%"
            />

            <div class="text">QQ: {{ qq }}</div>

            <div class="text">WX: {{ wx }}</div>
            <div class="text">PH: {{ ph }}</div>
          </div>
        </div>
      </div>

      <!--  -->
      <div class="scroll_parent">
        <div class="scroll_div">
          <img
            src="../assets/home/scrollinfo.png"
            alt=""
            height="30px"
            width="auto"
            style="position: absolute; top: 5px; left: 400px"
            draggable="false"
          />
          <div class="scroll">
            <marquee
              onmouseover="this.stop();"
              onmouseout="this.start();"
              style="
                cursor: pointer;
                color: #fff;
                font-size: 16px;
                font-weight: 800;
                text-align: center;
                width: 100%;
              "
            >
              为了给广大游戏玩家带来更安全稳定的线上体验环境，公司将针对在线上进行游戏无差额对打套利,洗钱等违反公司常规游戏操作的用户进行净网行动，一经发现封号冻结资金，概不退还！
              <!-- {{scrolldata}} -->
            </marquee>
          </div>
        </div>
      </div>
      <!-- main -->
      <div class="main_body">
        <img
          src="../assets/home/card1.png"
          alt=""
          class="img1"
          draggable="false"
          @click="PlayGround()"
        />
        <img
          src="../assets/home/card2.png"
          alt=""
          class="img2"
          draggable="false"
        />
        <img
          src="../assets/home/card3.png"
          alt=""
          class="img3"
          draggable="false"
        />
        <img
          src="../assets/home/card4.png"
          alt=""
          class="img4"
          draggable="false"
        />
        <img
          src="../assets/home/cu_service.png"
          alt=""
          class="service"
          draggable="false"
        />
        <span class="txt1">易记域名</span>
        <span class="txt2" @click="GoKb()">KB1234.COM</span>
        <img
          src="../assets/home/d.png"
          alt=""
          class="d_img"
          width="auto"
          height="auto"
          draggable="false"
        />
        <img
          src="../assets/home/g.png"
          alt=""
          class="g_img"
          width="auto"
          height="auto"
          draggable="false"
        />
        <img
          src="../assets/home/s.png"
          alt=""
          class="s_img"
          width="auto"
          height="auto"
          draggable="false"
        />
      </div>
    </div>
    <!-- f-imgsection -->
    <div class="footer_main">
      <div class="sub-footer">
        <div class="footer-des">
          <span class="footer-text">关于我们</span>
          <span class="line"></span>
          <span class="footer-text">联系我们</span>
          <span class="line"></span>
          <span class="footer-text">合作伙伴</span>
          <span class="line"></span>
          <span class="footer-text">存款帮助</span>
          <span class="line"></span>
          <span class="footer-text">取款帮助</span>
          <span class="line"></span>
          <span class="footer-text">常见问题</span>
        </div>

        <img
          src="../assets/home/footerimg.png"
          alt=""
          width="100%"
          height="40px"
          style="cursor: pointer"
          draggable="false"
        />
      </div>
    </div>
    <!-- three text div -->
    <div class="th_text_div">
      <div class="sub_txtdiv">
        <div class="title">
          <h1>关于凯博娱乐</h1>
          <h1>全新产品</h1>
          <h1>信息中心</h1>
        </div>
      </div>
      <div class="imgparent">
        <div style="width: 250px; background: ; height: auto">
          <img
            src="../assets/home/f11.png"
            alt=""
            style="width: auto; margin-left: 0px"
            draggable="false"
          />
        </div>
        <div style="width: 250px; background: ; height: auto">
          <img
            src="../assets/home/f22.png"
            alt=""
            style="width: auto; margin-left: 50px"
            draggable="false"
          />
        </div>
        <div style="width: 250px; background: ; height: auto">
          <img
            src="../assets/home/f33.png"
            alt=""
            style="width: auto; margin-left: 50px"
            draggable="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import AES from "../api/aes";
import { Base64 } from "js-base64";
// import CustomerService from "../components/CustomerService";
export default {
  name: "Home",
  components: {
    Banner,
    // CustomerService
  },
  data() {
    return {
      qq: "",
      wx: "",
      ph: "",
      scrolldata: "",
      id: this.$Global.myLoginInfo.loginId,
    };
  },
  methods: {
    // here i am sending userlogin id to get scroll data
    GetScrollData(id) {
      var en = this.$Global.en;
      let data = JSON.stringify({ Id: id });
      let endata = AES.encrypt(data, en);
      // var decryptdata = JSON.parse(AES.decrypt(endata, en));

      this.axios
        .post(this.$Global.scrollData, { data: endata })
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
          //  console.log(msg,"scroll")
          if (msg.JsonData.code == 200) {
            this.scrolldata = msg.JsonData.msg;
          } else {
            this.scrolldata =
              "为了给广大游戏玩家带来更安全稳定的线上体验环境，公司将针对在线上进行游戏无差额对打套利,洗钱等违反公司常规游戏操作的用户进行净网行动，一经发现封号冻结资金，概不退还！";
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },

    PlayGround() {
      if (this.$store.state.login == false) {
        return this.$message.warning("请先登录");
      } else {
        var gameEn = this.$Global.gameEn;
        let data = {
          name: this.$store.state.myAccount,
          password: this.$md5(this.$store.state.myPassword),
        };
        // console.log(data);
        var endata = AES.encrypt(JSON.stringify(data), gameEn);
        window.open(`http://kb1234.com/?token=${endata}`);
      }
    },
    GoKb() {
      window.open("http://kb1234.com");
    },
    GetAgentdata(id) {
      var en = this.$Global.en;
      let data = JSON.stringify({ Id: id });
      let endata = AES.encrypt(data, en);
      // console.log(endata,"data of endata")
      //var decryptdata = JSON.parse(AES.decrypt(endata, en));
      // console.log(decryptdata,"data of decryptdata")
      this.axios
        .post(this.$Global.agentUrl, { data: endata })
        .then((res) => {
          var body = res.data;
          //console.log(body);
          var msg = JSON.parse(AES.decrypt(body, en));
         // console.log(msg, "response msg of created");
          if (msg.JsonData.code == 200) {
            //saving first time creted agentid and name to use in register section
            this.qq = msg.JsonData.QQ;
            this.wx = msg.JsonData.WXH;
            this.ph = msg.JsonData.phone;
            this.$Global.optioner.QQ = msg.JsonData.QQ;
            this.$Global.optioner.WX = msg.JsonData.WXH;
            this.$Global.optioner.PH = msg.JsonData.phone;
            this.$Global.optioner.Agentid = msg.JsonData.Id;
            this.$Global.optioner.Agentname = msg.JsonData.name;

            // console.log(this.$Global.optioner.Agentname);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
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
        agent: 5,
      };
      let data1 = Base64.encode(JSON.stringify(data));
      let data2 = data1.substring(0, 8);
      let data3 = data1.substring(8);
      let add8 = data2 + this.randomString(8);
      let token = this.randomString(9) + add8 + data3;
      // console.log(data1, data2, data3, add8, token)
      return token;
    },
    //onliine service pic click and go to customer service
    Service() {
      // if (this.$store.state.login == false) {
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
          `https://www.maiijf888.com/index/index/home?visiter_id=${loginId}&visiter_name=${loginName}&avatar=&business_id=40&groupid=0&special=50`
        );
      } else {
        // window.open(
        //   `http://kbchat.hn885.com/index/index/home?visiter_id=&visiter_name=&avatar=&business_id=2&groupid=0&special=2`
        // );

        window.open(
          `https://www.maiijf888.com/index/index/home?visiter_id=&visiter_name=&avatar=&business_id=40&groupid=0&special=50`
        );
      }
    },
  },
  created() {
      var url = window.location.href;
   // var url = "http://21019.hn232.com";
    var s = url;
    //  console.log("ss", s);
    var a = s.split(".")[0];
    // console.log("h is", a);
    var userid = a.split("//")[1];
    //  console.log(userid,"a isssssssssssssss")
    this.GetAgentdata(userid);
    this.GetScrollData(this.id);
  },
};
</script>

<style lang="scss" scoped>
.main_section {
  background: url(../assets/home/bg_main.png);
  height: 500px;
  width: 100%;
  background-repeat: no-repeat;
  //  overflow: hidden;
  position: relative;

  // margin: 0 auto;
  //  background-origin: content-box;
  // background-position: center center;
  // background-size: cover;
  // background-position: center top;
  // -webkit-background-origin:center top;
  // background-position: 100% 100%;

  .scroll_parent {
    height: 40px;
    position: relative;
    width: 100%;
    // background: red;
    .scroll_div {
      width: 1100px;
      margin: 0 auto;
      display: flex;
      //  background: red;
      height: 40px;

      .scroll {
        height: 100%;
        width: 830px;
        // background: red;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
        position: absolute;
        left: 600px;
      }
    }
  }
  .main_body {
    height: 330px;
    // background: #ccc;
    margin-top: 35px;
    width: 100%;
    position: relative;
    .img1 {
      position: absolute;
      left: 500px;
      top: -15px;
      cursor: pointer;
    }
    .img2 {
      position: absolute;
      left: 675px;
      top: -15px;
      cursor: pointer;
    }
    .img3 {
      position: absolute;
      left: 1105px;
      top: -15px;
      cursor: pointer;
    }
    .img4 {
      position: absolute;
      left: 1285px;
      top: -15px;
      cursor: pointer;
    }
    .service {
      position: absolute;
      left: 1500px;
      //right: 120px;
      top: 50px;
      cursor: pointer;
    }
    .txt1 {
      position: absolute;
      left: 900px;
      font-size: 30px;
      font-weight: bold;
      top: 15px;
      letter-spacing: 3px;
      cursor: pointer;
    }
    .txt2 {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: bold;
      color: #f7dd09;
      position: absolute;
      left: 860px;
      top: 55px;
      font-size: 30px;
      cursor: pointer;
    }
    .d_img {
      position: absolute;
      left: 885px;
      top: 120px;
      cursor: pointer;
    }
    .g_img {
      position: absolute;
      left: 885px;
      top: 190px;
      cursor: pointer;
    }
    .s_img {
      position: absolute;
      left: 880px;
      top: 265px;
      cursor: pointer;
    }
  }
}

// @supports (-ms-ime-align: auto) {
//   .main_section {
//     background: url(../assets/home/bg_main.png);
//     height: 500px;
//     width: 100%;
//     background-repeat: no-repeat;
//     //  overflow: hidden;
//     position: relative;
//     background-position: center top;
//   }
// }

.footer_main {
  height: 120px;
  width: 100%;
  // background: red;
  background: #704910;
  margin-top: -77px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  border-top: 2px solid #b38b22;
  border-bottom: 2px solid #b38b22;
  // background: #242527;
  position: relative;
  .sub-footer {
    width: 1100px !important;
    align-items: center;
    height: 100% !important;
    margin: 0 auto;
    padding-top: 15px;
    // background: red;
    .footer-des {
      //  background: white;
      width: 1000px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 50px;
    }
    .footer-text {
      color: #fff;
      font-weight: bold;
      font-size: 20px;
      cursor: pointer;
      user-select: none;
    }
    .line {
      width: 2px;
      background: #fff;
      height: 24px;
      margin: 0 25px;
      transform: rotate(35deg);
    }
  }
}
.th_text_div {
  // height: 300px;
  height: auto;
  background: #704910;
  width: 100%;
  // display: flex;
  // align-content: center;
  // justify-content: center;
  .sub_txtdiv {
    width: 1100px !important;
    align-items: center;

    margin: 0 auto;
    // padding-top: 15px;
    background: #704910;
    .title {
      height: 40px;
      // background: green;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        letter-spacing: 1px;
        color: #fff;
        text-align: center;
      }
    }
  }
  .imgparent {
    width: 1150px !important;
    align-items: center;
    height: auto;
    margin: 0 auto;
    background: #704910;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

//customer
.customer-service {
  position: fixed;
  z-index: 1000;
  top: 250px;
  right: 0px;
  display: block;
  cursor: pointer;
  // display: flex;
  // justify-content: space-evenly;
  // align-items: center;
  // flex-direction: column;
}
.customer-service:hover {
  .qr_code {
    display: flex;
    flex-direction: column;
  }
}
.qr_code {
  position: fixed;
  height: auto;
  width: 200px;
  background: #fff;
  right: 140px;
  top: 300px;
  display: none;
}
.img {
  height: auto;
  width: auto;
  z-index: 1000;
  // cursor: pointer;
}

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
  // border: 3px solid #4e8df2;
  // border-radius: 15px;
  margin: 4px 0px;
  // display: flex;
}
</style>
