<template>
<div>
	<div class="top">
		<h2>verbleibende Zeit</h2>
		<h1>{{ remainingTime }}</h1>

		<h2>erkläre:</h2>
		<h1>{{ word }}</h1>

		<h2>verbotene Begriffe:</h2>
		<p v-for="word in forbidden">
			{{ word }}
		</p>
	</div>

	<div class="bottom">
		<Button>Überspringen</Button>
	</div>
</div>
</template>

<script>
export default {
	name: 'Home',
	data: () => {
		return {
			remainingTime: "0:49",
			word: "Wort",
			forbidden: ["Begriff1", "Begriff2", "Begriff3", "Begriff4"],
		}
	}
}
</script>
<style scoped lang="sass">
h2
	margin-bottom: 20px

h1
	margin-bottom: 60px

p
	margin-top: 10px

.bottom .button
	margin-bottom: 10px

</style>
