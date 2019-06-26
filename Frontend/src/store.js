import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		playerList: [ /*{ name: "test", team: "red" }, { name: "keintest", team: "blue" }*/ ]
	},
	mutations: {
		addUser(state, user) {
			state.playerList.push(user)
		}
	}
})