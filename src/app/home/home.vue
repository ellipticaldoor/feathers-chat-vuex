<template lang='pug'>

#home
	router-link(as='a', :to="{name: 'Login'}") Login
	router-link(as='a', :to="{name: 'Signup'}") Signup

</template>

<script>
import './home.sass'

export default {
	name: 'home',
}
</script>
