<template>
  <div id="main-page">
    <div class="container">
      <Search @search="getSearch(search)" :search="search"/>
    </div>
  </div>
</template>
<script>
import Search from './search'
export default {
  data() {
    return {
      search: ''
    };
  },
  components: {
    Search
  },
  methods: {
    getSearch(search){
      this.search = search;
    }
  }
}
</script>