import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => {
    return {
      msg: "第一条信息",
    };
  },
  getters: {},
  actions: {},
});
