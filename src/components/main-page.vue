<template>
  <div id="main-page">
    <div class="item--list">
      <div class="container">
        <b-row>
        <Item @song:play="$emit('song:play', $event)" @song:detail="$emit('song:detail', $event)" v-for="(song,i) in songs" :key="i" :song="song"></Item>
        </b-row>
      </div>
    </div>
  </div>
</template>
<script>
import Item from './item'
import Navbar from './navbar'
export default {
  data() {
    return {
      search: ''
    };
  },
  components: {
    Item, Navbar
  },
  props: ['songs']
}
</script>