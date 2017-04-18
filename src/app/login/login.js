import { mapMutations, mapActions } from 'vuex'

export default {
	data() {
		return {
			email: undefined,
			password: undefined,
			error: undefined,
		}
	},
	methods: {
		dismissError() {
			this.error = undefined
			this.clearAuthenticationError()
		},

		onSubmit(email, password) {
			this.authenticate({ strategy: 'local', email, password })
				// Just use the returned error instead of mapping it from the store.
				.catch(error => {
					// Convert the error to a plain object and add a message.
					const type = error.className
					error = Object.assign({}, error)
					error.message = type === 'not-authenticated'
						? 'Incorrect email or password.'
						: 'An error prevented login.'
					this.error = error
				})
		},
		...mapMutations('auth', {
			clearAuthenticationError: 'clearAuthenticationError',
		}),
		...mapActions('auth', ['authenticate']),
	},
}
