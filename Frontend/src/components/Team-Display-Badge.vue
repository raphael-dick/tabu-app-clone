<template>
<div class="badge"
     :style="{ backgroundImage: `url('${imageUrl}')` }">
	<div class="part">
		<p>{{ red }}</p>
	</div>
	<div class="part">
		<p>{{ blue }}</p>
	</div>
</div>
</template>

<script>
export default {
	name: 'Button',
	data: () => {
		return {
			imageUrl: require("@/assets/team-display.svg"),
		}
	},
	props: ["red", "blue"]
}
</script>
