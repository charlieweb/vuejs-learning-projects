import { createApp } from 'vue'
import App from './App.vue'
import Card from './components/UI/Card.vue'
import Button from './components/UI/Button.vue'

const app = createApp(App)
app.component('base-card', Card);
app.component('base-button', Button);
app.mount('#app');
