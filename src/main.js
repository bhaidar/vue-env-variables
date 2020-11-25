import { createApp } from 'vue';
import App from './App.vue';
import VueEnvVariables from './install';

const app = createApp(App);

// make use of the plugin
app.use(VueEnvVariables);

app.mount('#app');
