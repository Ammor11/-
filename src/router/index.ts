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
    path: "/follow",
    name: "follow",
    component: () => import("../view/follow/Follow.vue"),
  },
  {
    path: "/shopping",
    name: "shopping",
    component: () => import("../view/shopping/Shopping.vue"),
  },
  {
    path: "/musician",
    name: "musician",
    component: () => import("../view/musician/Musician.vue"),
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
