<template>
<div>
	<div class="centered">


		<h1>{{ currentPlayer }}</h1>
		<h2>erklärt</h2>
		<div class="spacer"></div>
		<h2>verbleibende Zeit:</h2>
		<h1>{{ remainingTime }}</h1>
	</div>
</div>
</template>

<script>
export default {
	name: 'Home',
	data: () => {
		return {
			remainingTime: "0:49",
			currentPlayer: "Raphael",
		}
	}
}
</script>
<style scoped lang="sass">
h2
	margin-bottom: 20px

h1
	margin-bottom: 20px

.spacer
	height: 100px

</style>
