<template lang='pug'>

.message
	.avatar(
		:src='message.user.avatar || placeholder',
		:alt='message.user.email'
	)

	.message-wrapper
		.message-header
			span {{ message.user.email }}
			span {{ formattedDate }}

		.message-content.font-300 {{ message.text }}

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
