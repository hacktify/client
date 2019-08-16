<template>
  <div id="app">
    <b-container>
      <!-- <b-row class="justify-center">
        <Login></Login>
        <Register></Register>
      </b-row>
    </b-container> -->
    <main-page :songs="songs" ></main-page>
    <upload></upload>
    <!-- <song-page></song-page> -->
    <aplayer class="shadow" :song="song"></aplayer>
  </div>
</template>

<script>
import ax from '../config/axios'
import Login from './components/Login'
import Register from './components/Register'
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
    Aplayer,
    Login,
    Register
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

