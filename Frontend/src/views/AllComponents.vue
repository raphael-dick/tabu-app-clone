<template>
<div class="centered">

	<h1>Headline</h1>
	<h2>Subheadline</h2>
	<p>Default Text</p>
	<h6>Small Text</h6>
	<Button type="default"></Button>
	<Button type="cancel"></Button>
	<ButtonOptions :options="['Option1', 'Option2']"></ButtonOptions>
	<ButtonOptions :options="['Option1', 'Option2', 'Option3']"></ButtonOptions>

	<TeamDisplayBadge red="Team Rot"
	                  blue="Team Blau">
	</TeamDisplayBadge>

	<TeamDisplayBadge red="12"
	                  blue="29">
	</TeamDisplayBadge>

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
