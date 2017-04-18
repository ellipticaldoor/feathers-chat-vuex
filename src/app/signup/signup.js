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
			this.clearCreateError()
		},
		onSubmit(email, password) {
			this.dismissError()

			// Automatically log the user in after successful signup.
			this.createUser({ email, password })
				.then(response =>
					this.authenticate({ strategy: 'local', email, password })
				)
				// Just use the returned error instead of mapping it from the store.
				.catch(error => {
					// Convert the error to a plain object and add a message.
					const type = error.errorType
					error = Object.assign({}, error)
					error.message = type === 'uniqueViolated'
						? 'That email address is unavailable.'
						: 'An error prevented signup.'
					this.error = error
				})
		},
		...mapActions('users', {
			createUser: 'create',
		}),
		...mapMutations('users', {
			clearCreateError: 'clearCreateError',
		}),
		...mapActions('auth', ['authenticate']),
	},
}
