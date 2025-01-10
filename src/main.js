import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from './router.js'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fas)

const app = createApp(App)
app.use(routes)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')