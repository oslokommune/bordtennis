<template>
	<div class="ScoreboardNumber">
		<div class="top" :class="{active: top}">&nbsp;</div>
		<div class="upper-left" :class="{active: upperLeft}">&nbsp;</div>
		<div class="upper-right" :class="{active: upperRight}">&nbsp;</div>
		<div class="middle" :class="{active: middle}">&nbsp;</div>
		<div class="lower-left" :class="{active: lowerLeft}">&nbsp;</div>
		<div class="lower-right" :class="{active: lowerRight}">&nbsp;</div>
		<div class="bottom" :class="{active: bottom}">&nbsp;</div>
	</div>
</template>

<script>
import { SetNumber } from './ScoreboardNumber.js'

export default {
	name: 'ScoreboardNumber',
	props: {
		number: {
			type: Number,
			required: true
		},
	},
	watch: {
		number: function (newNumber) {
			SetNumber(this, newNumber);
		}
	},
	data: () => ({
		top: true,
		upperLeft: true,
		upperRight: true,
		middle: true,
		lowerLeft: true,
		lowerRight: true,
		bottom: true,
	}),
}
</script>

<style scoped>
.ScoreboardNumber {
	display: grid;
	width: 100%;

	grid-template-columns: 9% 78% 11%;
	grid-template-rows: 4% 44% 4% 44% 4%;

	column-gap: 0;
	row-gap: 0;
}

div.active {
	background-color: red;
}

div.top {
	grid-column: 2;
	grid-row: 1;
}

div.upper-left {
	grid-column: 1;
	grid-row: 2;
}

div.upper-right {
	grid-column: 3;
	grid-row: 2;
}

div.middle {
	grid-column: 2;
	grid-row: 3;
}

div.lower-left {
	grid-column: 1;
	grid-row: 4;
}

div.lower-right {
	grid-column: 3;
	grid-row: 4;
}

div.bottom {
	grid-column: 2;
	grid-row: 5;
}
</style>
