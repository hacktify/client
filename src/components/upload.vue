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
      <b-button @click="uploadSong">Upload</b-button>
    </div>
  </div>
</template>
<script>
import ax from '../../config/axios'
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
      this.song.file = e.target.files[0]
      this.song.title = e.target.files[0].name;
      this.song.size = e.target.files[0].size / 1000000;
    },
    uploadSong(){
      console.log('Upload~')
      let formData = new FormData()

      formData.append('file', this.song.file)
      formData.append('title', this.song.title)


      ax({
        method: 'post',
        url: '/musics/create',
        data: formData,
        config: {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      })
      .then(({data}) => {
        alert('OKE')
      })
      .catch(console.log)
    }
  }
}
</script>