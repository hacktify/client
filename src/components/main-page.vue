<template>
  <div id="main-page">
    <Navbar></Navbar>
    <div class="item--list">
      <div class="container">
        <b-row>
        <Item v-for="(song,i) in songs" :key="i" :song="song"></Item>
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