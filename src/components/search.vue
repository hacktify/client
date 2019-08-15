<template>
  <b-input-group class="mt-3">
    <b-form-input placeholder="Search"></b-form-input>
    <b-input-group-append>
      <b-button variant="info"><font-awesome-icon icon="search"/></b-button>
    </b-input-group-append>
  </b-input-group>
</template>
<script>
export default {
  data() {
    return {
      search: '',
    }
  },
}
</script>