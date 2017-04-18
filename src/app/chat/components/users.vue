<template lang='pug'>

#users
	h4 {{ users.length }} {{ plural }}

	.users_container(v-for='(user, index) in users', track-by='index')
		.user
			img.avatar(:src='user.avatar || dummyUser.avatar', alt='')
			.username {{ user.email || dummyUser.email }}

	footer
		a.logout(href='#', @click='logout') Sign Out

</template>

<script>
import './users.sass'

export default {
	name: 'user-list',

	computed: {
		plural() {
			return this.users.length === 1 ? 'user' : 'users'
		},
	},

	props: {
		users: Array,
		logout: Function,
	},
}
</script>
