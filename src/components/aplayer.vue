<template>
    <aplayer class="aplayer--active" autoplay
        style="background-color: #222222; color: #ffffff;"
      :music="music"
    ></aplayer>
</template>

<script>
import Aplayer from 'vue-aplayer'
export default {
    components: {
        Aplayer
    },
    data() {
      return {
        music: {
          title: this.song.title,
          artist: this.song.UserId.username,
          theme: '#ff9900',
          src: this.song.src,
          pic: this.song.pic
        }
      }
    },
    props: ['song']
}
</script>

<style>

</style>