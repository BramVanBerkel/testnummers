import { type Component, createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App as Component)

app.mount('#app')
