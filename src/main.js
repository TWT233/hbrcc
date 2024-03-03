import {createApp} from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import {createPinia} from "pinia"; // Ensure you are using css-loader


const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark',
    },
})
app.use(vuetify)

const pinia = createPinia()
app.use(pinia)

app.mount('#app')
