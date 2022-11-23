import { createApp } from 'vue';
import App from './App.vue';
import Toaster from '@meforma/vue-toaster';
import Maska from 'maska'


const app = createApp(App)
app.use(Toaster).use(Maska)
app.mount('#app')
