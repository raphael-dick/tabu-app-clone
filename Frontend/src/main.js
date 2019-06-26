// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.js'
import store from './store.js'

// Styles
import '@/styles/reset.css'
import '@/assets/fonts/Carton_Six/stylesheet.css'
import '@/styles/main.sass'



Vue.config.productionTip = false

/* Components */

Vue.component("Button", () =>
	import ('./components/Button.vue'));

Vue.component("ButtonOptions", () =>
	import ('./components/Button-Options.vue'));

Vue.component("TeamDisplayBadge", () =>
	import ('./components/Team-Display-Badge.vue'));

Vue.component("InputField", () =>
	import ('./components/InputField.vue'));

Vue.component("QRCode", () =>
	import ('./components/QRCode.vue'));

Vue.component("PlayerList", () =>
	import ('./components/PlayerList.vue'));

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})