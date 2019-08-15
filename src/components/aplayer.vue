<template>
    <aplayer autoplay
        style="background-color: #222222; color: #ffffff;"
      :music="{
        title: 'Day 1',
        artist: 'Honne',
        theme: '#ff9900',
        src: 'https://storage.googleapis.com/hacktify/1565875037204HONNE%20-%20Day%201%20%E2%97%91-64.mp3',
        pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
      }"
    ></aplayer>
</template>

<script>
import Aplayer from 'vue-aplayer'
export default {
    components: {
        Aplayer
    }
}
</script>

<style>

</style>