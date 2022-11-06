<template>
	<div class="ScoreboardNumber">
		<div class="number-bar top" :class="{active: top}" />
		<div class="number-bar upper-left" :class="{active: upperLeft}" />
		<div class="number-bar upper-right" :class="{active: upperRight}" />
		<div class="number-bar middle" :class="{active: middle}" />
		<div class="number-bar lower-left" :class="{active: lowerLeft}" />
		<div class="number-bar lower-right" :class="{active: lowerRight}" />
		<div class="number-bar bottom" :class="{active: bottom}" />
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
	mounted() {
		SetNumber(this, this.number);
	}
}
</script>

<style scoped>
.ScoreboardNumber {
	display: grid;
	width: 100%;

	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(12, 1fr);

	column-gap: 0;
	row-gap: 0;
}

div.number-bar {
	background-color: #3f3f3f;
	border-radius: 2px;
}

div.active {
	background-color: red;
}

div.top,
div.middle,
div.bottom {
	grid-column: 2 / 5;
}

div.upper-left,
div.lower-left {
	grid-column: 1;
}

div.upper-right,
div.lower-right {
	grid-column: 5;
}

div.upper-left,
div.upper-right {
	grid-row: 3 / 6;
}

div.lower-left,
div.lower-right {
	grid-row: 8 / 11;
}

div.top {
	grid-row: 1 / 3;
}

div.middle {
	grid-row: 6 / 8;
}

div.bottom {
	grid-row: 11 / 13;
}
</style>
