<template>
  <div class="ServeIndicator">
    <div
      class="indicator"
      :class="{ 'active-indicator': servingPlayer == 1 }"
      @click="toggleInitialServer"
    />
    <div
      class="indicator"
      :class="{ 'active-indicator': servingPlayer == 2 }"
      @click="toggleInitialServer"
    />
  </div>
</template>

<script>
export default {
  name: 'ServeIndicator',
  props: {
    sumPoints: {
      type: Number,
      required: true,
    },
  },
  computed: {
    servingPlayer() {
      let mod = this.sumPoints % 4

      let initial = mod === 0 || mod === 1

      if (this.initialServer === 1) {
        return initial ? 1 : 2
      }

      return initial ? 2 : 1
    },
  },
  data: () => ({
    initialServer: 1,
  }),
  methods: {
    toggleInitialServer(event) {
      if (this.sumPoints !== 0) {
        return
      }

      if (!event.target.classList.contains('active-indicator')) {
        return
      }

      this.initialServer = this.initialServer === 1 ? 2 : 1
    },
  },
}
</script>

<style scoped>
.ServeIndicator {
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-between;
}

div.indicator {
  width: 25px;
  height: 25px;

  padding: 48px;

  border-radius: 4;
}

div.active-indicator {
  background-color: red;
}
</style>
