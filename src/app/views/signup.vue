<template lang='pug'>

main.login.container
	.row
		.col-12.col-6-tablet.push-3-tablet.text-center
			h1.font-100 Create an Account
	.row
		.col-12.col-6-tablet.push-3-tablet.col-4-desktop.push-4-desktop
			.error(v-if='error') {{error.message}}
				a.close(href='javascript://', @click.prevent='dismissError') dismiss
			form.form(method='post', @submit.prevent='onSubmit(email, password)')
				fieldset
					input.block(v-model='email', type='email', name='email', placeholder='email', required='')
				fieldset
					input.block(v-model='password', type='password', name='password', placeholder='password', required='')

				button.button.button-primary.block.signup(type='submit')  Signup
				router-link.button.button-secondary.block(as='button', :to="{name: 'Home'}") Back

</template>

<script>
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
</script>
