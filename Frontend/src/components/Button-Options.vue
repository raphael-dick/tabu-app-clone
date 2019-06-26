<template>
<div class="button"
     :style="{ backgroundImage: `url('${imageUrl}')` }">
	<div class="part"
	     @click="select(0)">
		<p>{{ options[0] }}</p>
	</div>
	<div class="part"
	     @click="select(1)">
		<p>{{ options[1] }}</p>
	</div>
	<div class="part"
	     @click="select(2)"
	     v-if="options.length > 2">
		<p>{{ options[2] }}</p>
	</div>

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
	props: {
		options: {
			required: true
		},
		selected: Number,
	},
	methods: {
		select: function(option) {

			this.$emit('update:selected', option)

			let options = this.$props.options
			if (options.length == 2) {
				if (option == 0) {
					this.$data.imageUrl = require("@/assets/button-2options-1st-selected.svg")
				} else if (option == 1) {
					this.$data.imageUrl = require("@/assets/button-2options-2nd-selected.svg")
				}
			} else if (options.length == 3) {
				if (option == 0) {
					this.$data.imageUrl = require("@/assets/button-3options-1st-selected.svg")
				} else if (option == 1) {
					this.$data.imageUrl = require("@/assets/button-3options-2nd-selected.svg")
				} else if (option == 2) {
					this.$data.imageUrl = require("@/assets/button-3options-3rd-selected.svg")
				}
			}
		}
	},
	mounted: function() {
		this.select(this.$props.selected)
	}
}
</script>
