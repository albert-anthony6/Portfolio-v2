<template>
  <div class="app">
    <Main />
  </div>
</template>

<script>
import Main from './views/Main.vue';

export default {
  name: 'App',
  components: {
    Main,
  },
};
</script>

<style lang="scss">
@import './assets/themes/_themes.scss';

.app {
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
