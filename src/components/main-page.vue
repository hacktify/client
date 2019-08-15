<template>
  <div id="main-page">
    <div id="content">
      <nav>
        <b-container>
          <div class="brand">Hacktify</div>
          <Search/>
        </b-container>
      </nav>
      <div class="item--list">
        <div class="container">
          <Item/>
        </div>
      </div>
    </div>
    <Upload />
  </div>
</template>
<script>
import Search from './search'
import Item from './item'
import Upload from './upload'
export default {
  data() {
    return {
      search: ''
    };
  },
  components: {
    Search,Item,Upload
  },
  methods: {
    getSearch(search){
      this.search = search;
    }
  }
}
</script>