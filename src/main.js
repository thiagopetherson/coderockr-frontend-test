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

let baseUrl = 'https://sample-posts.coderockr.com/api/posts'
app.config.globalProperties.baseUrl = baseUrl

app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
