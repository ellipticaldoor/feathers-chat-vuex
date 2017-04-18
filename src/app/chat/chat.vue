<template lang='pug'>

#chat.flex.flex-column
	header.title-bar.flex.flex-row.flex-center
		.title-wrapper.block.center-element
			img.logo(src='http://feathersjs.com/img/feathers-logo-wide.png')

	.flex.flex-row.flex-1.clear(v-if='user')
		user-list(:users='users', :logout='logout')
		message-list(
			:messages='messages.data',
			:findMessages='findUsers',
			:createMessage='createMessage'
		)

</template>

<script src='./chat.js'>
