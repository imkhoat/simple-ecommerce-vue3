import { createApp } from "vue";
import App from "./app.vue";
import router from "./routes";
import { createPinia } from "pinia";
const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
