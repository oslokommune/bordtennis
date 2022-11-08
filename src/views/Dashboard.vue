<template>
  <div class="Dashboard">
    <div class="team-titles">
      <h2>Team Tim</h2>
      <button class="btn-reset" @click="reset">Reset</button>
      <h2>Team Kim</h2>
    </div>

    <Scoreboard @bump="bump" :playerOne="teamOne" :playerTwo="teamTwo" />
    <ServeIndicator @change="switchServer" :sumPoints="sumPoints" />

    <audio ref="audio" :src="coinSound" />

    <!-- Following sound Effect from https://pixabay.com/sound-effects/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=14610" -->
    <audio ref="audioBell" :src="serveBell" />
  </div>
</template>

<script>
import Scoreboard from '../components/Scoreboard.vue'
import ServeIndicator from '../components/ServeIndicator.vue'

import coinSound from '../assets/coin.mp3'
import serveBell from '../assets/bell.mp3'

export default {
  name: 'Dashboard',
  components: {
    Scoreboard,
    ServeIndicator,
  },
  computed: {
    sumPoints() {
      return this.teamOne + this.teamTwo
    },
  },
  data: () => ({
    coinSound,
    serveBell,
    teamOne: 0,
    teamTwo: 0,
    wait: false,
  }),
  methods: {
    bump({ team }) {
      if (this.wait) return

      this.wait = true

      setTimeout(() => {
        this.wait = false
      }, 100)

      this.$refs.audio.currentTime = 0
      this.$refs.audio.play()

      if (navigator.vibrate) {
        navigator.vibrate([100])
      } else {
        alert('Vibrate not supported')
      }

      if (team === 1) {
        this.teamOne = this.teamOne === 99 ? 0 : this.teamOne + 1

        return
      }

      this.teamTwo = this.teamTwo === 99 ? 0 : this.teamTwo + 1
    },
    switchServer() {
      this.$refs.audioBell.currentTime = 0
      this.$refs.audioBell.play()
    },
    reset() {
      this.teamOne = 0
      this.teamTwo = 0
    },
  },
}
</script>

<style scoped>
.Dashboard {
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1em;
}

div.team-titles {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;

  font-size: 2em;
}

.ServeIndicator {
  flex-shrink: 2;

  align-items: center;
}

/* Mobile portrait */
@media only screen and (min-device-width: 320px) and (orientation: portrait) {
  .Scoreboard {
    max-height: 20%;
  }

  .ServeIndicator {
    margin-top: 1em;
    align-items: flex-start;
  }

  h2 {
    line-height: 1em;
  }

  h2:not(:first-child) {
    text-align: right;
  }

  .btn-reset {
    position: absolute;
    bottom: 1em;
    right: 1em;
  }
}
</style>
