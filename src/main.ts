import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
// Supports weights 100-900
import '@fontsource-variable/onest';
// Supports weights 200-900
import '@fontsource-variable/source-code-pro';

const app = createApp(App)

app.use(router)

app.mount('#app')