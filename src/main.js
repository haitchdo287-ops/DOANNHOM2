import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import DefaultLayout from './layout/wrapper/index.vue'
import Auth from './layout/wrapper/AuthMaster.vue'
import DaiLy from './layout/wrapper/DaiLyMaster.vue'
import Client from './layout/wrapper/ClientMaster.vue'
import Toaster from "@meforma/vue-toaster";

const app = createApp(App)

app.use(router, Toaster)
app.component("default-layout", DefaultLayout);
app.component("auth-layout", Auth);
app.component("dl-layout", DaiLy);
app.component("client-layout", Client);


app.mount("#app")