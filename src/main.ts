import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createI18n} from "vue-i18n";

const messages = {
    nl: {
        'copy': 'Kopieer',
        'copied': 'Gekopieerd'
    },
}

const i18n = createI18n({
    locale: 'nl',
    messages
})

const app = createApp(App);

app.use(i18n);
app.mount('#app')
