<template>
  <div id="app">
    <main-page/>
  </div>
</template>

<script>
import MainPage from './components/main-page';

export default {
  data() {
    return {
      message: 'Hello world',
    };
  },
  components: {
    MainPage
  }
};
</script>

<style scoped>
  @import './assets/scss/style.scss';
</style>

