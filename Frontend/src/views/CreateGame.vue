<template>
<div>
	<div class="top">
		<h1>Spieleinstellungen</h1>
		<h2>{{ step+1 }} / 4</h2>
		<div v-if="step == 0">
			<h2>Wähle einen Raumnamen:</h2>
			<InputField :value.sync="name"></InputField>
		</div>
		<div v-else-if="step == 1">
			<h2>Wähle einen Schierigkeitsgrad:</h2>
			<ButtonOptions :options="['Leicht', 'Mittel', 'Schwer']"
			               :selected.sync="difficulty"
			               key="difficulty"></ButtonOptions>
		</div>
		<div v-else-if="step == 2">
			<h2>Wähle einen Spielmodus:</h2>
			<ButtonOptions :options="['Normal', 'Speed']"
			               :selected.sync="gamemode"
			               key="gamemode"></ButtonOptions>
		</div>
		<div v-else-if="step == 3">
			<h2>Wie soll das Spiel enden?</h2>
			<ButtonOptions :options="['Zeit', 'Punkte', 'Runden']"
			               :selected.sync="end"
			               key="end"></ButtonOptions>
		</div>
	</div>
	<div class="bottom">
		<Button v-if="step == 3"
		        @click="generateGame">Spiel erstellen</Button>
		<Button v-else
		        @click="step++">Nächster Schritt</Button>

		<p v-if="step == 0"
		   @click="$router.push('/')">abbrechen</p>
		<p v-else
		   @click="step--">zurück</p>
	</div>
</div>
</template>

<script>
import io from "../socket.js"

export default {
	name: 'Home',
	data: () => {
		return {
			step: 0,
			name: "",
			difficulty: 0,
			gamemode: 0,
			end: 0,
		}
	},
	methods: {
		generateGame: function() {
			io.socket.emit("create-room", this.$data.name, this.$data.difficulty, this.$data.gamemode, this.$data.end)
			console.log("gesendet")
		}
	}
}
</script>
<style scoped lang="sass">
h1
	margin-bottom: 10px

h2
	margin-bottom: 70px

.button
	margin-bottom: 20px
</style>
