<template lang='pug'>

#login
	h1 Welcome Back

	.error(v-if='error') {{error.message}}
		a.close(href='javascript://', @click.prevent='dismissError') dismiss

	form.form(
		method='post',
		@submit.prevent='onSubmit(email, password)',
	)

		input(
			type='email',
			name='email',
			placeholder='email',
			v-model='email',
		)

		input.block(
			type='password',
			name='password',
			placeholder='password',
			v-model='password',
		)

		button(type='submit') Login
		router-link( as='button', :to="{name: 'Home'}") Back

</template>

<script src='./login.js' />
