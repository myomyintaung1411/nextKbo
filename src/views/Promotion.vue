<template>
  <div class="promotion">
    <div class="promotion-banner">
      <CustomerService></CustomerService>
    </div>
    <div class="main_sec">
      <div class="in">
        <div class="first">
          <img src="../assets/promotion/55.png" alt="" width="400px" />
          <img src="../assets/promotion/22.png" alt="" width="400px" />
          <img src="../assets/promotion/33.png" alt="" width="400px" />
        </div>
        <div class="first">
          <img src="../assets/promotion/44.png" alt="" width="400px" />
          <img src="../assets/promotion/11.png" alt="" width="400px" />
          <img src="../assets/promotion/66.png" alt="" width="400px" />
        </div>
        <div class="first">
          <img src="../assets/promotion/77.png" alt="" width="400px" />
          <img src="../assets/promotion/88.png" alt="" width="400px" />
          <img src="../assets/promotion/99.png" alt="" width="400px" />
        </div>
      </div>
    </div>
    <!--  -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer";
import CustomerService from "../components/CustomerService";
export default {
  components: {
    Footer,
    CustomerService,
  },
};
</script>

<style lang="scss" scoped>
.promotion {
  width: 100%;
}
.promotion-banner {
  position: relative;
  height: 450px;
  width: 100%;
  background: url(../assets/promotion/p_b.png) no-repeat;
  background-size: 100% 100%;
}
.main_sec {
  height: 500px;
  background: #f7c87a;
  width: 100%;
  .in {
    width: 1250px !important;
    // background: red;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    .first {
      height: 180px;
      //   background: green;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        // box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
        //   0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
        //   0 16px 16px rgba(0, 0, 0, 0.12);
        -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      }
      img:hover {
        -webkit-transform: scale(1.25, 1.25);
        transform: scale(1.25, 1.25);
        cursor: pointer;
      }
    }
  }
}
</style>