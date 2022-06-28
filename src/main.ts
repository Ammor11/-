import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./assets/style/reset.css";
import LoginModal from "./components/LoginModal.vue";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.mount("#app");
app.component("login-modal", LoginModal);
