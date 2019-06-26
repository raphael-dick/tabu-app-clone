<template>
<div>
	<div class="top">
		<div v-if="status == 0">
			<h1>Warte auf Spieler ...</h1>
			<QRCode :code="$route.params.code" />
			<h1>{{ $route.params.code }}</h1>
		</div>
		<div v-else-if="status == 1">
			<h2>Das Spiel startet in</h2>
			<h1>{{ seconds }} Sekunden</h1>
		</div>

		<TeamDisplayBadge red="Team Rot"
		                  blue="Team Blau" />
		<PlayerList />
	</div>

	<div class="bottom"
	     v-if="status == 0">
		<Button @click="startGame">Spiel starten</Button>
		<p @click="$router.push('/')">abbrechen</p>
	</div>

	<Button v-else
	        class="bottom"
	        type="cancel"
	        @click="cancelStartGame">Start abbrechen</Button>
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
			console.log("starting from server");

		});
		io.socket.on("room-start-canceled", () => {
			this.$data.status = 0
			console.log("canceled");
		});
	},
	methods: {
		startGame: function() {
			console.log("starting");
			io.socket.emit("start-room")
		},
		cancelStartGame: function() {
			io.socket.emit("cancel-start-room")
		}
	}
}
</script>
<style scoped lang="sass">
.qrcode
	margin-bottom: 30px

h2
	margin-bottom: 10px

h1
	margin-bottom: 40px

.button
	margin-bottom: 20px

</style>
