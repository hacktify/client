<template>
  <nav>
    <b-container>
      <div class="brand"><a href="#" @click.prevent="$emit('to:main')">Hacktify</a></div>
      <Search @search:title="$emit('search:title', $event)"></Search>
      <div class="nav--right">
        <b-button @click="$emit('upload:toggle')">Upload</b-button>
        <b-button class="btn--logout" @click="$emit('auth:logout')">Logout</b-button>
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