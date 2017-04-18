// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/app.vue'
import router from './router'
import store from './store'
import './feathers'

window.store = store

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App },
})
