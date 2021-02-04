<template>
  <div class="home">
    <Banner></Banner>
    <div class="main_section">
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
        <span class="txt1">为了给广</span>
        <span class="txt2">KB1234.COM</span>
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
          <span class="footer-text">如何存款</span>
          <span class="line"></span>
          <span class="footer-text">如何取款</span>
          <span class="line"></span>
          <span class="footer-text">常见问题</span>
          <span class="line"></span>
          <span class="footer-text">隐私声明</span>
          <span class="line"></span>
          <span class="footer-text">隐私声明</span>
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
          <h1>隐私声明隐私</h1>
          <h1>隐私声明</h1>
          <h1>隐私声明</h1>
        </div>
      </div>
      <div class="imgparent">
        <div style="width: 250px; background: ; height: auto">
          <img
            src="../assets/home/f11.png"
            alt=""
            style="width: auto;margin-left:0px"
            draggable="false"
          />
        </div>
        <div
          style="width: 250px; background: ; height: auto;"
        >
          <img
            src="../assets/home/f22.png"
            alt=""
            style="width: auto;margin-left:50px"
            draggable="false"
          />
        </div>
        <div style="width: 250px; background: ; height: auto">
          <img
            src="../assets/home/f33.png"
            alt=""
            style="width: auto; margin-left:50px"
            draggable="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
export default {
  name: "Home",
  components: {
    Banner,
  },
};
</script>

<style lang="scss" scoped>
.main_section {
  background: url(../assets/home/bg_main.png);
  width: 100%;
  background-repeat: no-repeat;
  height: 500px;
  position: relative;

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
</style>
