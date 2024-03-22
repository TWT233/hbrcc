import vue from '@vitejs/plugin-vue'
import {fileURLToPath} from 'node:url'


export default {
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
}