<template>
<input type="text"
       :value="value"
       placeholder="Raumname"
       class="inputField"
       @input="$emit('update:value', $event.target.value)" />
</template>

<script>
export default {
	name: 'Button',
	data: () => {
		return {}
	},
	props: ["value"],
}
</script>
