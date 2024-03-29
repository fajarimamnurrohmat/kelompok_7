import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import sidebar from './components/sidebar/main.vue'

createApp(App).use(router).mount('#app')

const app = createApp(App);
app .use(router);
app .component("base-sidebar", sidebar)
app.mount("#app");