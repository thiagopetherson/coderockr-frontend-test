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

let baseUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=7c239e80ee7bf4bc9b4fcea4906f0e3f&region=BR&language=pt-BR``'
app.config.globalProperties.baseUrl = baseUrl

app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
