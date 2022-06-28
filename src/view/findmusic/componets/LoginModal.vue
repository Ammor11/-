<template>
  <div class="modalbg">
    <div class="mask">
      <div class="maskhead">
        <span>手机登录</span>
        <span>×</span>
      </div>
      <div class="maskmain"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.modalbg {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  .mask {
    width: 530px;
    height: 360px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #2d2d2d;
    display: flex;
    .maskhead {
      height: 40px;
    }
  }
}
</style>
