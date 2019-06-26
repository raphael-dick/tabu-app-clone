import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			component: () =>
				import ('@/views/Home'),
		},
		{
			path: '/api/',
			component: () =>
				import ('@/views/AllComponents'),
		},
		{
			path: '/create/',
			component: () =>
				import ('@/views/CreateGame'),
		},
		{
			path: '/join/',
			component: () =>
				import ('@/views/JoinGame'),
		},
		{
			path: '/joined/',
			component: () =>
				import ('@/views/JoinedGame'),
		},
		{
			path: '/created/:code',
			component: () =>
				import ('@/views/CreatedGame'),
		},
		{
			path: '/game/opponent/',
			component: () =>
				import ('@/views/GameOpponent'),
		},
		{
			path: '/game/team/',
			component: () =>
				import ('@/views/GameTeam'),
		},
		{
			path: '/game/current/',
			component: () =>
				import ('@/views/GameCurrentPlayer'),
		},
		{
			path: '/game/roundend/',
			component: () =>
				import ('@/views/GameRoundEnd'),
		},
	]
})