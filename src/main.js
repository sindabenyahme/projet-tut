/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faTrash,
  faPenToSquare,
  faSearch,
  faPlus,

} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTrash,faPenToSquare,faSearch,faPlus)

const app = createApp(App)

registerPlugins(app)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
