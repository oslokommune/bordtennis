<script>
import Scoreboard from './components/Scoreboard.vue'

export default {
	name: 'App',
	components: {
		Scoreboard,
	},
	data: () => ({
		playerOne: 0,
		playerTwo: 0,
	}),
}
</script>

<template>
	<div id="app">
		<Scoreboard :playerOne="playerOne" :playerTwo="playerTwo" />
	</div>
</template>

<style scoped>
</style>
