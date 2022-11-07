<template>
  <div id="app">
    <Scoreboard :playerOne="playerOne" :playerTwo="playerTwo" />

    <div class="serve-indicator">
      <div
        class="indicator"
        :class="{ 'active-indicator': servingPlayer == 1 }"
      />
      <div
        class="indicator"
        :class="{ 'active-indicator': servingPlayer == 2 }"
      />
    </div>

    <div class="controls">
      <button @click="bumpPlayerOne">Team Tim</button>
      <button @click="bumpPlayerTwo">Team Kim</button>
      <button class="btn-reset" @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
import Scoreboard from '../components/Scoreboard.vue'

export default {
  name: 'App',
  components: {
    Scoreboard,
  },
  computed: {
    servingPlayer() {
      let sum = this.playerOne + this.playerTwo

      let mod = sum % 4

      return mod === 0 || mod == 1 ? 1 : 2
    },
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

      if (this.playerOne == 99) {
        this.playerOne = 0

        return
      }

      this.playerOne++
    },
    bumpPlayerTwo() {
      if (this.wait) return

      this.wait = true

      setTimeout(() => {
        this.wait = false
      }, 100)

      if (this.playerTwo == 99) {
        this.playerTwo = 0

        return
      }

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
  padding: 2em 1em;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.controls {
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

div.serve-indicator {
  height: 100%;
  width: 100%;
  margin-top: 1em;

  align-self: flex-end;

  display: flex;
  justify-content: space-between;
}

div.indicator {
  width: 25px;
  height: 25px;

  border-radius: 4;
}

div.active-indicator {
  background-color: red;
}

@media only screen and (min-device-width: 320px) and (orientation: landscape) {
  button {
    font-size: 1.5em;
    padding: 1em;
  }
}

/* Mobile portrait */
@media only screen and (min-device-width: 320px) and (orientation: portrait) {
  .Scoreboard {
    height: 20%;
  }

  button {
    font-size: 1em;
    padding: 2em 0.5em;
  }
}

/* Desktop */
@media only screen and (min-width: 992px) {
  #app {
    padding: 8% 20%;

    justify-content: center;
  }

  .serve-indicator {
    flex-shrink: 2;
  }
}
</style>
