import { type Component, createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import {
  Card,
  InputText,
  InputGroup,
  InputGroupAddon,
  InputNumber,
  Button,
  Select,
  Rating,
  Slider,
  Message,
  Divider,
  Checkbox,
  ToggleButton,
  FloatLabel
} from 'primevue'

const app = createApp(App as Component)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.component('Card', Card)
app.component('InputText', InputText)
app.component('InputGroup', InputGroup)
app.component('InputGroupAddon', InputGroupAddon)
app.component('InputNumber', InputNumber)
app.component('Button', Button)
app.component('Select', Select)
app.component('Rating', Rating)
app.component('Slider', Slider)
app.component('Message', Message)
app.component('Divider', Divider)
app.component('Checkbox', Checkbox)
app.component('ToggleButton', ToggleButton)
app.component('FloatLabel', FloatLabel)
app.mount('#app')
