<template>
	<div id="app">
		<Scoreboard :playerOne="playerOne" :playerTwo="playerTwo" />

		<div class="controls">
			<button @click="playerOne++">Player One</button>
			<button @click="playerTwo++">Player Two</button>
			<button class="btn-reset" @click="reset">Reset</button>
		</div>
	</div>
</template>

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
	methods: {
		reset() {
			this.playerOne = 0
			this.playerTwo = 0
		},
	},
}
</script>


<style scoped>
#app {
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;
}

.Scoreboard {
	height: 100px;
	width: 256px;
}

.controls {
	margin-top: 5em;

	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 1em;
	grid-row: 1fr 1fr;
	grid-row-gap: 1em;
}

.btn-reset {
	grid-column: 1 / 3;
}

button {
	font-size: 1.5em;
	padding: 0.5em 1em;
}
</style>
