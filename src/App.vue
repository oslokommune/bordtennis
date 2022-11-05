<script>
import ScoreboardNumber from './components/ScoreboardNumber.vue'

export default {
	name: 'App',
	components: {
		ScoreboardNumber,
	},
	data() {
		return {
			message: 'Hello Vue!'
		}
	}
}
</script>

<template>
	<div class="player-side">
		<ScoreboardNumber :number="0" />
		<ScoreboardNumber :number="0" />
	</div>

	<div class="player-side">
		<ScoreboardNumber :number="0" />
		<ScoreboardNumber :number="0" />
	</div>
</template>

<style scoped>
.ScoreboardNumber {
	height: 100%;

	width: 48%;
}

.player-side {
	height: 100%;
	width: 45%;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
</style>
