<template>
	<div class="Scoreboard">
		<div class="player-side">
			<ScoreboardNumber :number="playerOneMajor" />
			<ScoreboardNumber :number="playerOneMinor" />
		</div>

		<div class="player-side">
			<ScoreboardNumber :number="playerTwoMajor" />
			<ScoreboardNumber :number="playerTwoMinor" />
		</div>
	</div>
</template>

<script>
import ScoreboardNumber from './ScoreboardNumber.vue'

export default {
	name: 'Scoreboard',
	components: {
		ScoreboardNumber,
	},
	props: {
		playerOne: {
			type: Number,
			required: true,
		},
		playerTwo: {
			type: Number,
			required: true,
		},
	},
	computed: {
		playerOneMajor() {
			return Math.floor(this.playerOne / 10)
		},
		playerOneMinor() {
			return this.playerOne % 10
		},
		playerTwoMajor() {
			return Math.floor(this.playerTwo / 10)
		},
		playerTwoMinor() {
			return this.playerTwo % 10
		},
	},
}
</script>

<style scoped>
.Scoreboard {
	height: 100%;
	width: 100%;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}

.player-side {
	height: 100%;
	width: 40%;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.ScoreboardNumber {
	width: 40%;
}
</style>
