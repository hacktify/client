<template>
  <div class="search">
    <input placeholder="Search" id="search" v-model="search">
  </div>
</template>
<script>
export default {
  props: {
    search: String
  },
  data() {
    return {
      search: '',
    }
  },
  watch: {
    search: function(newVal, oldVal){
      console.log(newVal)
      this.$emit('search',newVal);
    }
  }
}
</script>