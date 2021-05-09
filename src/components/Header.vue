<template>
  <div class="header">
    <div class="max-div">
      <div class="max">
        <img
          src="../assets/home/logo.png"
          alt=""
          class="logo"
          draggable="false"
        />
        <!-- <img src="../assets/home/kb1234.png" alt="" class="kb" /> -->
        <div class="kb1234">
          <img
            src="../assets/home/kb1234.png"
            alt=""
            class="kb"
            @click="Kb1234()"
            draggable="false"
          />
        </div>

        <div style="display: flex; flex-direction: column">
          <div class="upper-header">
            <span>代理登录</span>
            <!--test text  -->
            <span class="line"></span>
            <span>设为首页</span>
            <span class="line"></span>
            <span>加入收藏</span>
            <span class="line"></span>
            <span @click="GoAdmin()">免费试玩</span>
          </div>
          <!-- input -->
          <div style="display: flex; align-items: center">
            <div class="image_down">
              <img
                src="../assets/home/joinus.png"
                alt=""
                height="100%"
                draggable="false"
              />
            </div>
            <div class="input_div">
              <input
                type="text"
                placeholder="账号"
                class="input"
                autocomplete="off"
                v-model="login.username"
              />
              <input
                type="password"
                placeholder="密码"
                class="input"
                autocomplete="off"
                v-model="login.password"
              />
            </div>

            <div class="btn_div">
              <img
                src="../assets/home/btn1.png"
                alt=""
                height="100%"
                width="100%"
                @click="userLogin()"
                draggable="false"
              />
              <!-- hello -->
            </div>
            <div class="btn_div two" @click="openRegister()">
              <!-- <img
              src="../assets/home/btn2.png"
              alt=""
              height="100%"
              width="100%"
            /> -->
              注册
            </div>
            <!-- name -->
            <div class="name" v-if="this.$store.state.login == true">
              {{ this.$Global.myLoginInfo.loginName }}
            </div>
            <!-- name -->
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
            >首页</span
          >
          <span
            class="nav_text"
            @click="Tabclick(2)"
            :class="{ active: activeTab == 2 }"
            >视讯直播</span
          >
          <span
            class="nav_text"
            @click="Tabclick(3)"
            :class="{ active: activeTab == 3 }"
            >凯博APP下载</span
          >
          <span
            class="nav_text"
            @click="Tabclick(4)"
            :class="{ active: activeTab == 4 }"
            >优惠活动</span
          >
          <span
            class="nav_text"
            @click="Tabclick(5)"
            :class="{ active: activeTab == 5 }"
            >存取款</span
          >
        </div>
      </div>

      <!-- register -->
      <div class="wrapper" v-if="RegisterDialog">
        <img
          src="../assets/closesearch.png"
          alt=""
          @click="CloseDialog"
          class="close-img"
          draggable="false"
        />
        <div class="title">凯博娱乐</div>
        <form class="form" novalidate @submit.prevent="Register">
          <div class="field">
            <input
              type="text"
              required
              autocomplete="off"
              v-model="register.name"
            />
            <label>请输入账号</label>
          </div>

          <div class="field">
            <input
              type="password"
              required
              autocomplete="off"
              v-model="register.pass"
            />
            <label>请输入密码</label>
          </div>

          <div class="field">
            <input
              type="password"
              required
              autocomplete="off"
              v-model="register.checkpass"
            />
            <label>请确认密码</label>
          </div>

          <div class="field">
            <input
              type="number"
              required
              autocomplete="off"
              v-model="register.phone"
            />
            <label>请输入手机号</label>
          </div>

          <div class="field">
            <input type="submit" value="注册账号" />
            <!-- <button class="btn-regi">注册账号</button> -->
          </div>
        </form>
      </div>
      <!-- end register -->
    </div>
  </div>
</template>

<script>
import AES from "@/api/aes";
export default {
  data() {
    return {
      RegisterDialog: false,
      activeTab: 1,
      register: {
        name: "",
        pass: "",
        checkpass: "",
        phone: "",
      },
      login: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    GoAdmin() {
      window.open(`http://kb1234.com`);
    },
    Kb1234() {
      window.open(`http://kb1234.com/?token=`);
    },
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
    openRegister() {
      this.RegisterDialog = true;
      document.body.classList.add("modal-open");
    },
    CloseDialog() {
      this.RegisterDialog = false;
      document.body.classList.remove("modal-open");
    },
    Register() {
      // console.log("enter register");
      var en = this.$Global.en;
      if (this.register.name == "") return this.$message.warning("请输入账号");
      if (this.register.pass == "") return this.$message.warning("请输入密码");
      if (this.register.checkpass == "")
        return this.$message.warning("请输入确认密码");
      if (this.register.phone == "")
        return this.$message.warning("请输入手机号");
      if (this.register.pass !== this.register.checkpass)
        return this.$message.warning("两次输入密码不一致");

      if (
        !/^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(
          this.register.phone
        )
      ) {
        return this.$message.warning("手机号码格式不对");
      }

      if (
        !/\d/.test(this.register.pass) ||
        !/[a-zA-Z]/.test(this.register.pass)
      )
        return this.$message.warning("密码必须包含数字和英文字母");

      var agentName = this.$Global.optioner.Agentname;
      if (agentName == "") {
        return this.$message.warning("您打开的网址链接没有携带ID，无法注册");
      }
      //console.log(agentName, "name of agent is777777777");
      let data = {
        name: this.register.name,
        pw: this.$md5(this.register.pass),
        phone: this.register.phone,
        agent: agentName,
      };
      // console.log(data, "sendStr");
      let endata = AES.encrypt(JSON.stringify(data), en);

      //var decryptdata = JSON.parse(AES.decrypt(endata, en));

      this.axios
        .post(this.$Global.registerurl, { data: endata })
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
          // console.log(msg, "response msg of register is");
          if (msg.JsonData.result == "102") {
            return this.$message.warning("无此代理");
          }
          if (msg.JsonData.result == "103") {
            return this.$message.warning("已存在此帐号");
          }
          if (msg.JsonData.result == "104") {
            return this.$message.warning("注册失败");
          }
          if (msg.JsonData.result == "101") {
            document.body.classList.remove("modal-open");
            this.register.name = "";
            this.register.pass = "";
            this.register.checkpass = "";
            this.register.phone = "";
            this.RegisterDialog = false;
            return this.$message.success("注册成功");
          }
        })
        .catch((e) => {
          // console.log(e);
          this.$message.error(e.toString());
        });
    },
    userLogin() {
      var en = this.$Global.en;
      if (this.$store.state.login == true)
        return this.$message.warning("您已登陆成功");
      if (this.login.username == "") return this.$message.warning("请输入账号");
      if (this.login.password == "") return this.$message.warning("请输入密码");

      let logindata = {
        name: this.login.username,
        pw: this.$md5(this.login.password),
      };
      // console.log(logindata,"sdfsdf");

      let endata = AES.encrypt(JSON.stringify(logindata), en);

      // console.log("login endata isssssssss", endata);

      //  var decryptdata = JSON.parse(AES.decrypt(endata, en));
      // console.log("decryptdata isssssssss", decryptdata, en);

      this.axios
        .post(this.$Global.loginurl, { data: endata })
        .then((res) => {
          var body = res.data;
          // console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaa",body)
          var msg = JSON.parse(AES.decrypt(body, en));
          // console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaa",msg)
          if (msg.JsonData.code == 200) {
            this.$store.state.login = true;
            //here i am store user input name and pass to state
            this.$store.state.myAccount = this.login.username;
            this.$store.state.myPassword = this.login.password;
            //here i am storing user response information to global
            this.$Global.myLoginInfo.loginId = msg.JsonData.Id;
            this.$Global.myLoginInfo.loginBalance = msg.JsonData.balance;
            this.$Global.myLoginInfo.loginEnable = msg.JsonData.enable;
            this.$Global.myLoginInfo.loginName = msg.JsonData.username;
            // console.log(
            //   "account and password is -------->",
            //   this.$store.state.myPassword,
            //   this.$store.state.myAccount
            // );
            this.login.username = "";
            this.login.password = "";
            return this.$message.success("登录成功");
          } else {
            // console.log("error ocuured")
            return this.$message.error("登录失败");
          }
        })
        .catch((e) => {
          // console.log(e);
          this.$message.error(e.toString());
        });
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
    width: 1200px !important;
    //background: gray;
    margin: 0 auto;
    display: flex;
    position: relative;
    .max {
      width: 1100px !important;
      // background: green;
      // margin: 0 auto;
      margin-left: 90px;
      display: flex;
      position: relative;
    }
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
      // background: red;
      width: 200px;
      justify-content: center;
      margin-left: 20px;
      margin-top: 25px;
      align-self: center;
      .kb {
        width: 100%;
        cursor: pointer;
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
      color: #f1d910;
      // -webkit-animation-name: blinker;
      // animation-name: blinker;
      // -webkit-animation-iteration-count: infinite;
      // animation-iteration-count: infinite;
      // -webkit-animation-duration: 2s;
      // animation-duration: 2s;
    }

    // @keyframes blinker {
    //   0% {
    //     color: red;
    //     text-shadow: red 0px 0px 20px;
    //     font-size: 100%;
    //   }
    //   50% {
    //     color: blue;
    //     text-shadow: blue 0px 0px 20px;
    //     font-size: 100%;
    //   }

    //   100% {
    //     color: red;
    //     text-shadow: red 0px 0px 20px;
    //     font-size: 100%;
    //   }
    // }
    // @-webkit-keyframes blinker {
    //   0% {
    //     color: red;
    //     text-shadow: red 0px 0px 20px;
    //     font-size: 100%;
    //   }
    //   50% {
    //     color: blue;
    //     text-shadow: blue 0px 0px 20px;
    //     font-size: 500%;
    //   }

    //   100% {
    //     color: red;
    //     text-shadow: red 0px 0px 20px;
    //     font-size: 100%;
    //   }
    // }

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
  .name {
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
    height: 50px;
    width: 157px;
    // background: transparent;
    border: 2px solid #e5a71d;
    // width: 100px;
    position: absolute;
    right: 30px;
    top: 65px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    font-size: 20px;
    font-weight: bold;
    user-select: none;

    // font-size: 20px;
    // color: #000;
    // font-weight: bold;
    // background: #ecb351;
    // padding: 13px 10px;
    // border-radius: 22px;
    // user-select: none;
    // position: absolute;
    // right: 40px;
    // top: 65px;
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
    cursor: pointer;
  }
  .two {
    margin-left: 0;
    background: #c9242f;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    cursor: pointer;
  }
}

.tab_main {
  height: 40px;
  width: 950px !important;
  // background: red;
  margin: 0 auto;
  position: relative;
  .tab {
    height: 100%;
    width: 800px;
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
      font-size: 17px;
      letter-spacing: 1px;
      user-select: none;
      position: relative;

      //   background-size: cover;
      //   width: auto;
    }
    .active {
      color: #000;
      background: url(../assets/home/nav_text_bg.png);
      background-size: 100% 100%;
      padding: 10px 15px;
    }
  }
}

/* register */
.close-img {
  position: absolute;
  width: 20px;
  height: 20px;
  right: 2%;
  top: 2%;
  cursor: pointer;
}

.wrapper {
  position: absolute;
  top: 40px;
  left: 40%;
  width: 380px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
  z-index: 1;
}
.wrapper .title {
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  line-height: 100px;
  color: #fff;
  user-select: none;
  border-radius: 15px 15px 0 0;
  background: linear-gradient(-135deg, #ddb811, #35290a);
}
.wrapper .form {
  padding: 10px 30px 50px 30px;
}
.wrapper .form .field {
  height: 50px;
  width: 100%;
  margin-top: 20px;
  position: relative;
}
.wrapper .form .field input {
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 17px;
  padding-left: 20px;
  border: 1px solid lightgrey;
  border-radius: 25px;
  transition: all 0.3s ease;
}
.wrapper .form .field input:focus,
form .field input:valid {
  border-color: #4158d0;
}
.wrapper .form .field label {
  position: absolute;
  top: 50%;
  left: 20px;
  color: #999999;
  font-weight: 400;
  font-size: 17px;
  pointer-events: none;
  transform: translateY(-50%);
  transition: all 0.3s ease;
}
.form .field input:focus ~ label,
.form .field input:valid ~ label {
  top: 0%;
  font-size: 16px;
  color: #4158d0;
  background: #fff;
  transform: translateY(-50%);
}
.form .content {
  display: flex;
  width: 100%;
  height: 50px;
  font-size: 16px;
  align-items: center;
  justify-content: space-around;
}
.form .content .checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
}
.form .content input {
  width: 15px;
  height: 15px;
  background: red;
}
.form .content label {
  color: #262626;
  user-select: none;
  padding-left: 5px;
}
.form .content .pass-link {
  color: "";
}
.form .field input[type="submit"] {
  color: #fff;
  border: none;
  padding-left: 0;
  margin-top: 13px;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  background: linear-gradient(-135deg, #ddb811, #35290a);
  transition: all 0.3s ease;
}
.form .field input[type="submit"]:active {
  transform: scale(0.95);
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>