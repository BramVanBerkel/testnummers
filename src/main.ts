import { type Component, createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import Rating from 'primevue/rating'
import Slider from 'primevue/slider'
import InputSwitch from 'primevue/inputswitch'
import InlineMessage from 'primevue/inlinemessage'
import Divider from 'primevue/divider'
import Lara from './presets/lara'

const app = createApp(App as Component)
app.component('InputText', InputText)
app.component('InputGroup', InputGroup)
app.component('InputGroupAddon', InputGroupAddon)
app.component('InputNumber', InputNumber)
app.component('Button', Button)
app.component('Dropdown', Dropdown)
app.component('Rating', Rating)
app.component('Slider', Slider)
app.component('InputSwitch', InputSwitch)
app.component('InlineMessage', InlineMessage)
app.component('Divider', Divider)
app.use(PrimeVue, { unstyled: true, pt: Lara })
app.mount('#app')
