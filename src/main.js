// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import '@/api/feathers-client'

window.store = store

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App },
})
