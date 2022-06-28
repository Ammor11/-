import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import FindMusic from "../view/findmusic/FindMusic.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/findmusic",
    name: "findmusic",
    component: FindMusic,
  },
  {
    path: "/",
    redirect: "/findmusic",
  },
  {
    path: "/mymusic",
    name: "mymusic",
    component: () => import("../view/mymusic/MyMusic.vue"),
  },
  {
    path: "/followme",
    name: "followme",
    component: () => import("../view/follow/FollowMe.vue"),
  },
  {
    path: "/shopping",
    name: "shopping",
    component: () => import("../view/shopping/ShopPing.vue"),
  },
  {
    path: "/musician",
    name: "musician",
    component: () => import("../view/musician/MusiCian.vue"),
  },
  {
    path: "/download",
    name: "download",
    component: () => import("../view/download/DownLoad.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
