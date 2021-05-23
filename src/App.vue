<template>
  <div class="app">
    <section>
      <Navigation />
      <Main />
    </section>
  </div>
</template>

<script>
import Main from './views/Main.vue';
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Main,
    Navigation,
  },
};
</script>
, Navigation

<style lang="scss">
@import './assets/themes/_themes.scss';

.app {
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
