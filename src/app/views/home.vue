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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main.home {
	padding-top: 100px;
	padding-bottom: 100px;
}

main.home img.logo {
	width: 100%;
	max-width: 400px;
}

main.home h3.title {
	color: #969696;
	font-weight: 100;
	text-transform: uppercase;
	margin-bottom: 40px;
}

main.home .button.login,
main.home .button.signup {
	padding-top: 1.2em;
	padding-bottom: 1.2em;
}

main.home .button.login {
	background: none;
	border: 2px solid #CFCFCF;
	color: #999;
}

main.home .button.login:hover,
main.home .button.login:focus {
	background: none;
	border: 2px solid #31D8A0;
	color: #31D8A0;
}
</style>
