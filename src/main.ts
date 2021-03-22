import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/style/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faWallet,
  faMapMarkedAlt,
  faShippingFast,
  faShieldAlt,
  faMobileAlt
} from '@fortawesome/free-solid-svg-icons'
import {
  faWindowClose,
  faClock,
  faEnvelope
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSmoothScroll from 'vue3-smooth-scroll'
import 'aos/dist/aos.css'

library.add(faBars)
library.add(faWindowClose)
library.add(faWallet)
library.add(faMapMarkedAlt)
library.add(faShippingFast)
library.add(faShieldAlt)
library.add(faClock)
library.add(faEnvelope)
library.add(faMobileAlt)

const app = createApp(App)

app.config.performance = true

// eslint-disable-next-line
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(VueSmoothScroll).use(store).use(router).mount('#app')
