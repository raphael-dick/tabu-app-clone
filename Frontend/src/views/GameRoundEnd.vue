<template>
<div>
	<div class="centered">


		<h1>+ {{ points }} Punkte</h1>
		<h2>Für {{ team }}</h2>

		<div class="spacer"></div>

		<h2>Punktestand:</h2>
		<TeamDisplayBadge :red="pointsRed"
		                  :blue="pointsBlue" />

		<div class="spacer"></div>

		<h1>{{ remainingRounds }} Runden</h1>
		<h2>verbleiben</h2>
	</div>
</div>
</template>

<script>
export default {
	name: 'Home',
	data: () => {
		return {
			points: 14,
			team: "Team Blau",
			pointsRed: 12,
			pointsBlue: 29,
			remainingRounds: 4,
		}
	}
}
</script>
<style scoped lang="sass">
h2
	margin-bottom: 20px

h1
	margin-bottom: 10px

.spacer
	height: 80px

</style>
