<template>
	<div id="app">
		<Scoreboard :playerOne="playerOne" :playerTwo="playerTwo" />

		<div class="controls">
			<button @click="bumpPlayerOne">Player One</button>
			<button @click="bumpPlayerTwo">Player Two</button>
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
		wait: false,
	}),
	methods: {
		bumpPlayerOne() {
			if (this.wait) return

			this.wait = true

			setTimeout(() => {
				this.wait = false
			}, 100)

			this.playerOne++
		},
		bumpPlayerTwo() {
			if (this.wait) return

			this.wait = true

			setTimeout(() => {
				this.wait = false
			}, 100)

			this.playerTwo++
		},
		reset() {
			this.playerOne = 0
			this.playerTwo = 0
		},
	},
}
</script>


<style scoped>
#app {
	width: 100%;
	padding: 1em 25%;

	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;
}

.Scoreboard {
	max-height: 40%;
	height: 50%;
	width: 100%;
}

.controls {
	max-height: 40%;
	width: 100%;
	margin-top: 2em;

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
	padding: 1em 1em;
}
</style>
