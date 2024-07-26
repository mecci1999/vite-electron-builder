import {createApp} from 'vue';
import App from './app';
import router from './routers/index';

createApp(App).use(router).mount('#app');
