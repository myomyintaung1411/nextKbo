<template>
  <div class="promotion">
    <div class="promotion-banner"></div>
    <div class="main_sec">
      <div class="in">
        <div class="first">
          <img src="../assets/promotion/11.png" alt="" width="400px" />
          <img src="../assets/promotion/22.png" alt="" width="400px" />
          <img src="../assets/promotion/33.png" alt="" width="400px" />
        </div>
        <div class="first">
          <img src="../assets/promotion/44.png" alt="" width="400px" />
          <img src="../assets/promotion/55.png" alt="" width="400px" />
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
import Footer from '../components/Footer'
export default {
    components: {
        Footer,
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
    }
  }
}
</style>