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

	grid-template-columns: 14% 72% 14%;
	grid-template-rows: 14% 29% 14% 29% 14%;

	column-gap: 0;
	row-gap: 0;
}

div.number-bar {
	background-color: #3f3f3f;
	border-radius: 3px;
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
