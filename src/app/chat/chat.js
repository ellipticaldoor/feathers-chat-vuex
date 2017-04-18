import './chat.sass'

import { mapState, mapGetters, mapActions } from 'vuex'
import Users from './components/users'
import Messages from './components/messages'

export default {
	name: 'chat-app',

	computed: {
		...mapState('auth', ['user']),

		...mapGetters('messages', { findMessagesInStore: 'find' }),

		...mapGetters('users', { users: 'list' }),

		messages() {
			return this.findMessagesInStore({
				query: { $sort: { createdAt: 1 } },
			})
		},
	},

	methods: {
		...mapActions('messages', {
			findMessages: 'find',
			createMessage: 'create',
		}),

		...mapActions('users', { findUsers: 'find' }),

		...mapActions('auth', ['logout']),
	},

	created() {
		if (!this.user) return this.$router.replace({ name: 'Login' })

		// Query users from Feathers
		this.findUsers({
			query: {
				$sort: { email: 1 },
				$limit: 25,
			},
		})

		// Query messages from Feathers
		this.findMessages({
			query: {
				$sort: { createdAt: -1 },
				$limit: 25,
			},
		})
	},

	components: { Users, Messages },
}
