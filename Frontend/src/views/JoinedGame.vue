<template>
<div>
	<h1 class="top"
	    v-if="status == 0">
		Warte auf Spieler ...
	</h1>
	<div class="top"
	     v-else-if="status == 1">
		<h2>Das Spiel startet in</h2>
		<h1>{{ seconds }} Sekunden</h1>
	</div>

	<div class="centered">
		<TeamDisplayBadge red="Team Rot"
		                  blue="Team Blau" />
		<PlayerList />
	</div>

	<div class="bottom">
		<Button type="cancel">Spiel verlassen</Button>
	</div>
</div>
</template>

<script>
import io from "../socket.js"

export default {
	name: 'Home',
	data: () => {
		return {
			status: 0,
			seconds: 5,
		}
	},
	created: function() {
		io.socket.on("room-starting", () => {
			this.$data.status = 1
			this.$data.seconds = 5
		});
		io.socket.on("room-start-canceled", () => {
			this.$data.status = 0
		});
	}
}
</script>
<style scoped lang="sass">
h2
	margin-bottom: 10px

.playerlist
	margin-top: 10px

</style>
