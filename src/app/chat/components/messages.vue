<template lang='pug'>

#messages
	single-message(
		v-for='message in messages',
		key='message._id',
		:message='message',
		v-cloak='',
	)

	composeMessage(:createMessage='createMessage')

</template>

<script>
import './messages.sass'
import ComposeMessage from './composer.vue'
import SingleMessage from './message.vue'

export default {
	name: 'message-list',

	data() {
		return {
			// TODO: Fix the placeholder
			placeholder: 'PLACEHOLDER',
		}
	},

	props: {
		messages: Array,
		findMessages: Function,
		createMessage: Function,
	},

	watch: {
		messages() {
			this.messages.length
		},
	},

	components: {
		ComposeMessage,
		SingleMessage,
	},
}
</script>
