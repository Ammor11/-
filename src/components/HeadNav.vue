<template>
  <div class="header">
    <div class="content">
      <router-link to="/findmusic">
        <h1 class="logo"></h1>
      </router-link>
      <ul class="headnavlist">
        <li v-for="(item, index) in headTitle" :key="index">
          <router-link :to="item.path" active-class="active">{{
            item.title
          }}</router-link>
        </li>
        <div class="hot"></div>
      </ul>
      <div class="search">
        <input
          type="text"
          v-model="keywords"
          placeholder="音乐/视频/电台/用户"
          @keydown="search"
        />
        <div class="magnifier"></div>
      </div>
      <button class="creator">创作者中心</button>
      <span class="login">登录</span>
    </div>
  </div>
  <div class="redbar"></div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { _searchMusic } from "../api/search";
interface ITitle {
  title: string;
  path: string;
}

let keywords = ref("");
const getMusicList = async () => {
  let res = await _searchMusic({
    keywords: keywords.value,
  });
  console.log(res);
};

const search = (e: any) => {
  if (e.keyCode == 13 && keywords.value != "") {
    getMusicList();
  }
};

const headTitle: ITitle[] = [
  { title: "发现音乐", path: "/findmusic" },
  { title: "我的音乐", path: "/mymusic" },
  { title: "关注", path: "/followme" },
  { title: "商城", path: "/shopping" },
  { title: "音乐人", path: "/musician" },
  { title: "下载客户端", path: "/download" },
];
</script>

<style lang="scss">
.header {
  background-color: #242424;
  height: 70px;
  box-sizing: border-box;
  border-bottom: 2px solid #000;
  user-select: none;
  display: flex;
  justify-content: center;
  .content {
    display: flex;
    align-items: center;
    width: 1114px !important;
    .logo {
      width: 170px;
      height: 40px;
      background: url(../assets/topbar.png) no-repeat 10px -15px;
      margin-right: 20px;
    }
    .headnavlist {
      display: flex;
      height: 100%;
      align-items: center;
      position: relative;
      width: 520px !important;
      li {
        height: 100%;
        line-height: 70px;
        text-align: center;
        cursor: pointer;
        position: relative;
        &:hover {
          background-color: #000;
          color: #fff;
        }
        a {
          display: block;
          font-size: 14px;
          color: #ccc;
          height: 100%;
          padding: 0 20px;
        }
        .active {
          color: #fff;
          background-color: #000;
        }
        .cor {
          display: block;
          position: absolute;
          left: 50%;
          top: 64px;
          width: 12px;
          height: 7px;
          margin-left: -6px;
          overflow: hidden;
          background: url(../assets/topbar.png) no-repeat -226px 0;
        }
      }
      .hot {
        width: 30px;
        height: 14px;
        background: url(../assets/topbar.png) no-repeat -192px 0px;
        position: absolute;
        top: 22px;
        right: -20px;
      }
    }
    .search {
      position: relative;
      input {
        outline: none;
        border: none;
        height: 30px;
        width: 160px;
        border-radius: 15px;
        padding-left: 30px;
        margin-left: 70px;
        &:focus::placeholder {
          opacity: 0;
        }
      }
      .magnifier {
        width: 14px;
        height: 14px;
        background: url(../assets/topbar.png) no-repeat -10px -108px;
        position: absolute;
        top: 8px;
        left: 80px;
      }
    }
    .creator {
      height: 30px;
      width: 90px;
      border: 1px solid #4f4f4f;
      color: #aaa;
      line-height: 30px;
      text-align: center;
      background: none;
      border-radius: 15px;
      margin-left: 10px;
      margin-right: 20px;
      cursor: pointer;
      &:hover {
        border-color: #fff;
        color: #fff;
      }
    }
    .login {
      cursor: pointer;
      font-size: 12px;
      color: #787878;
      &:hover {
        color: #fff;
      }
    }
  }
}
.redbar {
  height: 5px;
  background-color: #c20c0c;
}
</style>
