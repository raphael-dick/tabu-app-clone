<template>
<div class="qrcode">
	<img :src="imageUrl"
	     alt="QRCode" />
</div>
</template>

<script>
export default {
	name: 'Button',
	data: () => {
		return {
			imageUrl: require("@/assets/sample-qr.png"),
		}
	},
	props: ["code"],
}
</script>

<style scoped lang="sass">
.qrcode
    background-color: white
    width: 110px
    height: 110px
    padding: 15px
    border-radius: 10px
    display: inline-block

    img
        width: 100%
        height: 100%

</style>
