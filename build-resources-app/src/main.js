import { createApp } from 'vue'
import App from './App.vue'
import Card from './components/UI/Card.vue'
import Button from './components/UI/Button.vue'
import Modal from './components/UI/Modal.vue'

const app = createApp(App)
app.component('base-card', Card);
app.component('base-button', Button);
app.component('modal-window', Modal);
app.mount('#app');
