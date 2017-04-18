<template lang='pug'>

aside.sidebar.col.col-3.flex.flex-column.flex-space-between
	header.flex.flex-row.flex-center
		h4.font-300.text-center
			span.font-600.online-count(v-cloak='') {{ users.length }} {{ plural }}

	ul.flex.flex-column.flex-1.list-unstyled.user-list
		li(v-for='(user, index) in users', track-by='index')
			a.block.relative(href='javascript://')
				img.avatar(:src='user.avatar || dummyUser.avatar', alt='')

				span.absolute.username {{ user.email || dummyUser.email }}
	footer.flex.flex-row.flex-center
		a.logout.button.button-primary(href='#', @click='logout') Sign Out

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
