<template>
  <nav>
    <b-container>
      <div class="brand">Hacktify</div>
      <Search></Search>
      <div class="nav--right">
        <b-button variant="primary">Upload</b-button>
      </div>
    </b-container>
  </nav>
</template>

<script>
import Search from './search'

export default {
  components: {
    Search
  }  
}
</script>