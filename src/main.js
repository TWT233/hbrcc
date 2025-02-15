import {createApp} from 'vue'
import App from './App.vue'

// UI

// pinia
import {createPinia} from "pinia"; // Ensure you are using css-loader


const app = createApp(App)


const pinia = createPinia()
app.use(pinia)

app.mount('#app')
