<template>
  <div id="upload">
    <div class="nav--top">
      <a href="#" class="nav--action--cancel">Cancel</a>
    </div>
    <div class="upload--input">
      <input type="file" name="file" id="upload--input--file" accept=".wav,.mp3,.m4a" @change="getFileDetail">
      <label for="upload--input--file"><span v-if="!song.isFile">+</span><span v-if="song.isFile"><i class="fa fa-music"></i></span></label>
    </div>
    <div class="upload--title">
      <h2 v-html="song.title">Title</h2>
    </div>
    <div class="upload--desc">
      <p class="upload--desc--author">Size: <span v-html="song.size"></span> MB</p>
    </div>
    <div class="upload--action">
      <b-button>Upload</b-button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      song: {
        title: '',
        size: '',
        isFile: false
      }
    }
  },
  methods:{
    getFileDetail(e){
      this.song.isFile = true;
      this.song.title = e.target.files[0].name;
      this.song.size = e.target.files[0].size / 1000000;
    }
  }
}
</script>