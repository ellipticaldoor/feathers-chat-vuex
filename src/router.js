import Vue from 'vue'
import Router from 'vue-router'

import Home from './app/home/home.vue'
import Login from './app/user/login/login.vue'
import Signup from './app/user/signup/signup.vue'
import Chat from './app/chat/chat.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{ path: '', name: 'Home', component: Home },
		{ path: '/login', name: 'Login', component: Login },
		{ path: '/signup', name: 'Signup', component: Signup },
		{ path: '/chat', name: 'Chat', component: Chat },
	],
})
