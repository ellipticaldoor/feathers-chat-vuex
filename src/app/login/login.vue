<template lang='pug'>

main.login.container
	.row
		.col-12.col-6-tablet.push-3-tablet.text-center
			h1.font-100 Welcome Back
	.row
		.col-12.col-6-tablet.push-3-tablet.col-4-desktop.push-4-desktop
			.error(v-if='error') {{error.message}}
				a.close(href='javascript://', @click.prevent='dismissError') dismiss

			form.form(
				method='post',
				@submit.prevent='onSubmit(email, password)',
			)
				fieldset
					input.block(
						type='email',
						name='email',
						placeholder='email',v-model='email',
					)

				fieldset
					input.block(
						type='password',
						name='password',
						placeholder='password',
						v-model='password',
					)

				button.button.button-primary.block.login(type='submit') Login
				router-link.button.button-secondary.block(
					as='button',
					:to="{name: 'Home'}"
				) Back

</template>

<script src='./login.js' />
