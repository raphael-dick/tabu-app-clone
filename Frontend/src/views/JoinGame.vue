<template>
<div>
	<h1 class="top">Spiel suchen</h1>

	<div class="centered">
		<h2>Gibt den Beitrittscode ein:</h2>
		<InputField :value.sync="code"></InputField>
		<p>... oder ...</p>
		<Button type="small">Scannen</Button>
	</div>

	<div class="bottom">
		<Button @click="joinGame">Spiel suchen</Button>
		<p @click="$router.push('/')">abbrechen</p>
	</div>
</div>
</template>

<script>
import io from "../socket.js"

export default {
	name: 'Home',
	data: () => {
		return {
			code: ""
		}
	},
	methods: {
		joinGame: function() {
			io.socket.emit("join-room", this.$data.code.toUpperCase())
		}
	}
}
</script>
<style scoped lang="sass">
h2
	margin-bottom: 50px

.inputField
	margin-bottom: 40px

.centered p
	margin-bottom: 50px

.bottom .button
	margin-bottom: 20px

</style>
