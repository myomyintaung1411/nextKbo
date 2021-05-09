<template>
  <div class="footer">
    <div class="sub-footer">
      <img
        src="../assets/home/footerimg.png"
        alt=""
        width="90%"
        height="40px"
        style="padding-right: 10px; cursor: pointer"
        draggable="false"
      />

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
      <div class="footer-center">
        <p>COPYRIGHT © 2020 凯博娱乐. All RIGHTS RESERVED.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  height: 150px;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
background: #704910;
  position: relative;
  /* background: red; */
}
.sub-footer {
  width: 1100px !important;
  align-items: center;
  height: 100% !important;
  margin: 0 auto;
  margin-top: 15px;
  /* background: red; */
}
footer {
  height: 40px;
  line-height: 40px;
  bottom: 0;
  width: 100%;
  text-align: center;
  /* background: red; */
  color: #fff;
  font-family: Arial;
  font-size: 14px;
  letter-spacing: 1px;
}
.footer-des {
  /* background: white; */
  width: 900px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100px; */
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
  margin: 0 20px;
  transform: rotate(35deg);
}
.footer-center {
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  user-select: none;
}
</style>