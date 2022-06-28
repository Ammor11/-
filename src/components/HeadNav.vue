<template>
  <div class="header">
    <router-link to="/findmusic">发现音乐</router-link>
    <router-link to="/mymusic">我的音乐</router-link>
    <span class="login">登录</span>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="scss">
.header {
  background-color: #242424;
  width: 100%;
  height: 70px;
  .login {
    cursor: pointer;
    font-size: 12px;
    color: #787878;
  }
}
</style>
