<template>
  <div id="upload">
    <nav>
      <a href="#" class="nav--cancel">Cancel</a>
    </nav>
    <div class="upload--input">
      <input type="file" name="file" id="upload--input--file">
      <label for="upload--input--file"></label>
    </div>
    <div class="upload--title">
      <h2>Title</h2>
    </div>
    <div class="upload--desc">
      <p class="upload--desc--author">By Tame Impala</p>
    </div>
    <div class="upload--action">
      <b-button>Download</b-button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
        
    }
  }
}
</script>