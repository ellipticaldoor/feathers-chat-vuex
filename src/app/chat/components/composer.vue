<template lang='pug'>

#send-message(v-on:submit.prevent='')
	input(type='text', name='text', v-model='newMessage')
	button(type='submit', @click='addMessage') Send

</template>

<script>
export default {
	name: 'MessageComposer',

	data() {
		return {
			newMessage: '',
		}
	},

	props: {
		createMessage: Function,
	},

	methods: {
		addMessage() {
			// Create a new message and then clear the input field
			this.createMessage({ text: this.newMessage })

			// Clears message
			.then(this.newMessage = '')
		},
	},
}
</script>
