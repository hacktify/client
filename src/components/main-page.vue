<template>
  <div id="main-page">
    <Navbar></Navbar>
    <div class="item--list">
      <div class="container">
        <Item></Item>
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
}
</script>