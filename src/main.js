import { createApp } from 'vue'
import App from './App.vue'
// Vue Router
import router from './router'
// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// CSS
import "./assets/css/main.css";

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
