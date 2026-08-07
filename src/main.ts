import { type Component, createApp } from 'vue'
// Registers the jelly-* custom elements and installs the theme token sheet.
// Must run before mount so the elements are upgraded as Vue creates them.
import './vendor/jelly/jelly.js'
import './style.css'
import App from './App.vue'

createApp(App as Component).mount('#app')
