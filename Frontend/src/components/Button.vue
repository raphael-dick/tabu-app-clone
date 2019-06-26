<template>
<div :class="{ button: true, small: type == 'small' }"
     :style="{ backgroundImage: `url('${imageUrl}')` }"
     @click="click">
	<p>
		<slot></slot>
	</p>
</div>
</template>

<script>
export default {
	name: 'Button',
	data: () => {
		return {
			imageUrl: null,
		}
	},
	props: ["type"],
	created: function() {
		console.log()
		if (this.$props.type == "cancel") {
			this.$data.imageUrl = require("@/assets/button-cancel.svg")
		} else if (this.$props.type == "alt") {
			this.$data.imageUrl = require("@/assets/button-alt.svg")
		} else if (this.$props.type == "small") {
			this.$data.imageUrl = require("@/assets/button-small.svg")
		} else {
			this.$data.imageUrl = require("@/assets/button.svg")
		}
	},
	methods: {
		click: function() {
			this.$emit("click")
		}
	}
}
</script>
