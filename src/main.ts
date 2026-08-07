import { type Component, createApp } from 'vue'
// Must run before mount so the jelly-* elements are upgraded as Vue creates them.
import './vendor/jelly/jelly.js'
import './style.css'
import App from './App.vue'

createApp(App as Component).mount('#app')
