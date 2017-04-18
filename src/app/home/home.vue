<template lang='pug'>

main.home.container
	.row
		.col-12.col-8-tablet.push-2-tablet.text-center
			h3.title Chat

	.row
		.col-12.push-4-tablet.col-4-tablet
			.row
				.col-12
					router-link.button.button-primary.block.login(
						as='a',
						:to="{name: 'Login'}"
					) Login

			.row
				.col-12
					router-link.button.button-primary.block.signup(
						as='a',
						:to="{name: 'Signup'}"
					) Signup

</template>

<script>
export default {
	name: 'home',
}
</script>

<style lang='sass' src='./home.sass' scoped>
