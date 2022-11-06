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

	min-height: 124px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}

.player-side {
	width: 40%;
	height: 100%;

	padding: 1em;

	display: flex;
	flex-direction: row;
	justify-content: space-between;

	border: 4px solid #3f3f3f;
	border-radius: 4px;
}

/* Desktop */
@media only screen and (min-width: 992px) {
	.player-side {
		padding: 2em;
	}

	.ScoreboardNumber {
		width: 40%;
	}
}

.ScoreboardNumber:not(:last-child) {
	margin-right: 2em;
}
</style>
