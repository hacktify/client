<template>
  <b-input-group class="mt-3">
    <input type="text" v-model="search" placeholder="Search">
    <!-- <b-form-input placeholder="Search"></b-form-input> -->
  </b-input-group>
</template>
<script>
export default {
  data() {
    return {
      search: '',
    }
  },
  watch: {
    search: function(val) {
      console.log(val)
      if(val.length > 2 || val.length == 0){
        this.$emit('search:title', val)
      }
    }
  }
}
</script>