<template>
  <div id="app">
    <main-page></main-page>
    <upload></upload>
    <song-page></song-page>
    <aplayer></aplayer>
  </div>
</template>

<script>
import MainPage from './components/main-page'
import SongPage from './components/song-page'
import Upload from './components/upload'
import Aplayer from './components/aplayer'
export default {
  data() {
    return {
      message: 'Hello world',
    };
  },
  components: {
    MainPage, Upload, SongPage, Aplayer
  }
};
</script>

<style scoped>
  @import './assets/scss/style.scss';
</style>

