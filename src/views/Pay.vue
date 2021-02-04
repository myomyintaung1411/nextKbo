<template>
  <div class="deposit">
    <div class="ba"></div>
    <div class="info-img">
      <div class="sub-info"></div>
    </div>

    <div class="payment-form">
      <div class="sub-form">
        <!-- payment -->
        <div
          style="
            height: 150px;
            width: 100%;
            display: flex;
            flex-direction: column;
            border-bottom: 2px solid white;
          "
        >
          <div class="underline-div">存款操作</div>
          <!--  -->
          <div style="" class="input-main-form">
            <div style="" class="input-form-div">
              <div class="upper-form-text">请输入转账金额:</div>
              <div style="margin-left: 50px">
                <input
                  type="number"
                  class="input"
                  v-model="payment.paymentMoney"
                  autocomplete="off"
                />
              </div>
              <div class="btn" @click="submitPayment()">立即支付</div>
            </div>
          </div>
        </div>

        <!-- below widthdrawal-->
        <div
          style="
            height: 400px;

            width: 100%;
            display: flex;
            flex-direction: column;
          "
        >
          <div class="underline-div">取款操作</div>
          <div class="input-main-form">
            <div class="below-input-form-div">
              <div style="" class="below-form-text">请输入银行名称:</div>
              <div style="margin-left: 60px">
                <input
                  type="text"
                  class="input"
                  v-model="widthdraw.bankname"
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
          <div class="input-main-form">
            <div class="below-input-form-div">
              <div class="below-form-text" style="margin-left: -25px">
                请输入银行账户名称:
              </div>
              <div style="margin-left: 60px">
                <input
                  type="text"
                  class="input"
                  v-model="widthdraw.bankaccount"
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
          <div class="input-main-form">
            <div class="below-input-form-div">
              <div class="below-form-text">请输入银行账号:</div>
              <div style="margin-left: 60px">
                <input
                  type="number"
                  class="input"
                  v-model="widthdraw.bankcard"
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
          <div class="input-main-form">
            <div class="below-input-form-div">
              <div class="below-form-text">请输入取款金额:</div>
              <div style="margin-left: 60px">
                <input
                  type="number"
                  class="input"
                  v-model="widthdraw.withdrawmoneyamount"
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
          <!-- btn -->
          <div class="input-main-form">
            <div class="draw-btn" @click="submitWithDraw()">
              <p style="font-weight: bold; font-size: 25px">立即取款</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
export default {
  components: { Footer },
  data() {
    return {
      payment: {
        paymentMoney: "",
      },
      widthdraw: {
        bankname: "",
        bankaccount: "",
        bankcard: "",
        withdrawmoneyamount: "",
      },
    };
  },
  methods: {
    submitPayment() {
      this.$message.warning("即将上线 。。。");
    },
    submitWithDraw() {
      this.$message.warning("即将上线 。。。");
    },
  },
};
</script>

<style lang="scss" scoped>
.deposit {
  width: 100%;
}
.ba {
  position: relative;
  height: 450px;
  width: 100%;
  background: url(../assets/pay/ba.jpg) no-repeat;
  background-size: 100% 100%;
}

.info-img {
  height: 100px;
  width: 100%;
  background: #f7c87a;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sub-info {
  width: 1000px !important;
  /* background: #cee0f6; */
  height: 100%;
  display: flex;
  background: url(../assets/pay/info.png) no-repeat;
  background-size: 100% 100%;
}
.payment-form {
  height: 650px;
  width: 100%;
  background: #f7c87a;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sub-form {
  width: 1270px !important;

  height: 600px;
  display: flex;
  border: 2px solid red;
  flex-direction: column;
  margin-bottom: 30px;
}

.underline-div {
  font-weight: bold;
  padding: 10px;
  border-bottom: 2px solid #000;
  width: 200px;
  font-size: 30px;
  text-align: center;
  color: #000;
}

.input-form-div {
  width: 1000px;
  /* background: gray; */
  display: flex;
  align-items: center;
  /* justify-content: c; */
}

.upper-form-text {
  font-size: 25px;
  font-weight: bold;
  color: #000;
  /* margin-left:30px; */
  margin-left: 120px;
  width: 200px;
  /* background: red; */
}

.input {
  padding: 10px;
  width: 400px;
  outline: none;
  font-size: 20px;
}
.btn {
  padding: 10px 30px;
  background: transparent;
  border: 2px solid#000;
  color: #000;
  border-radius: 1px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  margin-left: 50px;
  user-select: none;
}
.input-main-form {
  height: 60px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.below-input-form-div {
  width: 800px;
  /* background: gray; */
  display: flex;
  align-items: center;
}
.below-form-text {
  font-size: 25px;
  font-weight: bold;
  margin-left: 25px;
  color: #000;
}
.draw-btn {
  width: 400px;
  background: transparent;
  border: 2px solid#000;
  color: #000;
  border-radius: 1px;
  height: 50px;
  margin-top: 10px;
  margin-left: 150px;
  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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