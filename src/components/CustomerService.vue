<template>
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
        <img src="../assets/qrcode.png" alt="" height="200px" width="100%" />

        <div class="text">QQ: {{ qq }}</div>

        <div class="text">WX: {{ wx }}</div>
        <div class="text">PH: {{ ph }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Base64 } from "js-base64";
export default {
  data() {
    return {
      qq: "",
      wx: "",
      ph: "",
    };
  },
  methods: {
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
    this.qq = this.$Global.optioner.QQ;
    // console.log(this.qq);
    this.wx = this.$Global.optioner.WX;
    this.ph = this.$Global.optioner.PH;

    // console.log(this.wx);
  },
};
</script>

<style  lang="scss" scoped>
.customer-service {
  position: fixed;
  top: 250px;
  right: 0px;
  display: block;
  cursor: pointer;
  z-index: 1000;
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