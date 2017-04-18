// Vue
import Vue from 'vue'
import App from './app/app.vue'
import router from './router'
import store from './store'
import './feathers'

// Config
Vue.config.productionTip = false
window.store = store

// Styles
import 'normalize.css'
import 'milligram'
import './styles/fonts/material_icons.sass'

const vm = new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App },
})

window.vm = vm
