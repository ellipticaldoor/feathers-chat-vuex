<template lang='pug'>

main.login.container
	.row
		.col-12.col-6-tablet.push-3-tablet.text-center
			h1.font-100 Create an Account
	.row
		.col-12.col-6-tablet.push-3-tablet.col-4-desktop.push-4-desktop
			.error(v-if='error') {{error.message}}
				a.close(
					href='javascript://',
					@click.prevent='dismissError'
				) dismiss

			form.form(method='post', @submit.prevent='onSubmit(email, password)')
				fieldset
					input.block(v-model='email', type='email', name='email', placeholder='email', required='')

				fieldset
					input.block(v-model='password', type='password', name='password', placeholder='password', required='')

				button.button.button-primary.block.signup(type='submit') Signup
				router-link.button.button-secondary.block(
					as='button',
					:to="{name: 'Home'}"
				) Back

</template>

<script src='./signup.js' />
