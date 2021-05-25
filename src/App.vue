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

<style lang="scss">
@import './assets/themes/_themes.scss';

.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
