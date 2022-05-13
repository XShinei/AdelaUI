import { createApp } from 'vue';
import { installAll } from './component';
import './style/adale-ui.css';
import App from './App.vue';

const app = createApp(App);
installAll(app);
app.mount('#app');
