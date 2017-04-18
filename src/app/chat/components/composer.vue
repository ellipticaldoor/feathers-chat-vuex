<template lang='pug'>

form#send-message.flex.flex-row.flex-space-between(v-on:submit.prevent='')
	input.flex.flex-1(type='text', name='text', v-model='newMessage')
	button.button-primary(type='submit', @click='addMessage') Send

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
