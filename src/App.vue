<template>
  <div id="app">
    <div v-if="onPage == 'login'" class="justify-center">
      <Login @login:done="onPage = 'main'"></Login>
      <Register></Register>
    </div>
    <Navbar @auth:logout="signOut()" @search:title="searchByTitle($event)" @to:main="onPage = 'main'" @upload:toggle="uploadStatus = !uploadStatus" v-if="onPage == 'main' || onPage == 'song'"></Navbar>
    <main-page @song:detail="loadDetail($event)" @song:play="playSong($event)" v-if="onPage == 'main'" :songs="songs" ></main-page>
    <song-page v-if="onPage == 'song'" :song="song"></song-page>
    <upload @upload:toggle="uploadStatus = false" @upload:done="fetchSongs()" v-if="uploadStatus"></upload>
    <aplayer v-if="musicPlayer" class="shadow" :song="song"></aplayer>
  </div>
</template>

<script>
import ax from '../config/axios'
import Login from './components/Login'
import Navbar from './components/navbar'
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
        title: '',
        artist: '',
        src: '',
        pic: 'https://via.placeholder.com/100/ff9900/ff9900',
        theme: '#ff9900'
      },

      songs: [],
      onPage: 'login',
      uploadStatus: false,
      musicPlayer: false
    };
  },
  components: {
    MainPage,
    Upload,
    SongPage,
    Aplayer,
    Login,
    Register,
    Navbar
  },
  created() {
    if(localStorage.getItem('access_token')){
      this.onPage = 'main'
    }

    console.log('Created')
    this.fetchSongs()
  },
  methods: {
    fetchSongs() {
      ax.get('/musics/allMusic')
      .then(({data}) => {
        console.log(data)
        this.songs = data
      })
      .catch(console.log)
    },
    playSong(payload) {
      this.musicPlayer = false
      setTimeout(() => { 
        let src = encodeURI(payload.fileUrl)
        this.song.title = payload.title
        this.song.artist = payload.UserId.username
        this.song.src = src
        this.musicPlayer = true
      }, 100);
    },
    loadDetail(payload){
      this.onPage = 'song'
      let src = encodeURI(payload.fileUrl)
      this.song.title = payload.title
      this.song.artist = payload.UserId.username
      this.song.src = src
    },
    searchByTitle(keyword){
      this.onPage = 'main'
      let query = encodeURI(keyword)

      ax({
        method: 'get',
        url: `/musics/song?title=${query}`
      })
      .then(({data}) => {
        this.songs = data
      })
      .catch(console.log)
    },
    signOut(){
      localStorage.clear();
      this.onPage = 'login';
      this.musicPlayer = false;
      Swal.fire({
        type: 'success',
        title: 'Bye!'
      })
    }
  }
};
</script>

<style scoped>
  @import './assets/scss/style.scss';
</style>

