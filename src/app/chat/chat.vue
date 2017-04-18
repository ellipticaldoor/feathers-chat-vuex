<template lang='pug'>

#chat
	users(:users='users', :logout='logout')

	messages(
		:messages='messages.data',
		:findMessages='findUsers',
		:createMessage='createMessage'
	)

</template>

<script src='./chat.js'>
