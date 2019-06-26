<template>
<div class="playerlist">
	<div class="colum">
		<span class="item"
		      v-for="player in playerList"
		      v-if="player.team=='red'"> {{player.name}} </span>
	</div>
	<div class="colum">
		<span class="item"
		      v-for="player in playerList"
		      v-if="player.team=='blue'"> {{player.name}} </span>
	</div>
</div>
</template>

<script>
export default {
	data: () => {
		return {
			// playerList: [],
		}
	},
	computed: {
		playerList: function() {
			return this.$store.state.playerList
		}
	}
}
</script>
