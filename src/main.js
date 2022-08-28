import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton'
import BaseDialog from './components/UI/BaseDialog'
const app=createApp(App);
app.component('base-card',BaseCard);
app.component('base-button',BaseButton);
app.component('base-dialog',BaseDialog);
app.mount('#app')
