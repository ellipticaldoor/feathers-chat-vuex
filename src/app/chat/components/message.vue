<template lang='pug'>

.message.flex.flex-row
	img.avatar(
		:src='message.user.avatar || placeholder',
		:alt='message.user.email'
	)

	.message-wrapper
		p.message-header
			span.username.font-600 {{ message.user.email }}
			span.sent-date.font-300 {{ formattedDate }}

		p.message-content.font-300 {{ message.text }}

</template>

<script>
import dateFns from 'date-fns'

export default {
	props: ['message', 'index'],
	computed: {
		formattedDate() {
			return dateFns.format(this.message.createdAt, 'MMM Do, hh:mm:ss')
		},
	},
}

</script>
