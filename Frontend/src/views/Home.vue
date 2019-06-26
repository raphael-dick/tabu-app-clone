<template>
<div>
	<div class="centered">

		<h1>Hallo, Raphael</h1>
		<h2>Was möchstest du machen?</h2>
		<Button @click="$router.push('/create/')">Spiel erstellen</Button>
		<Button @click="$router.push('/join/')"
		        type="alt">Spiel beitreten</Button>
	</div>
	<p class="bottom">
		Tabu Remake, 2019
	</p>
</div>
</template>

<script>
export default {
	name: 'Home',
	data: () => {
		return {

		}
	}
}
</script>
<style scoped lang="sass">
h1
	margin-bottom: 20px

h2
	margin-bottom: 60px

.button
	margin-top: 40px
</style>
