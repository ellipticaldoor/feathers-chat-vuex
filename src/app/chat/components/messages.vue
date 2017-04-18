<template lang='pug'>

.flex.flex-column.col.col-9
	main.chat.flex.flex-column.flex-1.clear
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

	methods: {
		scrollToBottom() {
			this.$nextTick(() => {
				const node = this.$el.getElementsByClassName('chat')[0]
				node.scrollTop = node.scrollHeight
			})
		},
	},

	watch: {
		messages() {
			this.messages.length && this.scrollToBottom()
		},
	},

	components: {
		ComposeMessage,
		SingleMessage,
	},
}
</script>
