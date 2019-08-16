<template>
  <div id="app">
    <main-page :songs="songs" ></main-page>
    <!-- <upload></upload> -->
    <!-- <song-page></song-page> -->
    <b-container>
      <aplayer class="shadow" :song="song"></aplayer>
    </b-container>
  </div>
</template>

<script>
import ax from '../config/axios'
import MainPage from './components/main-page'
import SongPage from './components/song-page'
import Upload from './components/upload'
import Aplayer from './components/aplayer'
export default {
  data() {
    return {
      message: 'Hello world',
      song: {
        title: 'Day 1',
        artist: 'Honne',
        src: 'https://storage.googleapis.com/hacktify/1565875037204HONNE%20-%20Day%201%20%E2%97%91-64.mp3',
        pic: 'https://via.placeholder.com/100/ff9900/ff9900'
      },
      songs: []
    };
  },
  components: {
    MainPage,
    Upload,
    SongPage,
    Aplayer
  },
  created() {
    console.log('Created')
    ax.get('/musics/allMusic')
      .then(({data}) => {
        console.log(data)
        this.songs = data
      })
      .catch(console.log)
  }
};
</script>

<style scoped>
  @import './assets/scss/style.scss';
</style>

