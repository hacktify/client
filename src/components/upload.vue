<template>
  <div id="upload" class="upload--active">
    <div class="nav--top">
      <a @click="$emit('upload:toggle')" href="#" class="nav--action--cancel">Cancel</a>
    </div>
    <div class="upload--input">
      <input type="file" name="file" id="upload--input--file" accept=".wav,.mp3,.m4a" @change="getFileDetail">
      <label for="upload--input--file"><span v-if="!song.isFile">+</span><span v-if="song.isFile"><i class="fa fa-music"></i></span></label>
      <input v-model="title" type="text" class="upload--input--title" placeholder="Title">
    </div>
    <div class="upload--title">
      <h2 v-html="song.title">Title</h2>
    </div>
    <div class="upload--desc">
      <p class="upload--desc--author">Size: <span v-html="song.size"></span> MB</p>
    </div>
    <div class="upload--action">
      <b-button @click="uploadSong">{{ status }}</b-button>
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
      },
      title: '',
      status: 'Upload'
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
      this.status = '...'
      console.log('Upload~')
      let formData = new FormData()

      formData.append('file', this.song.file)
      formData.append('title', this.title)

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
        this.status = 'Upload'
        this.song = ''
        this.title = ''
        this.$emit('upload:done')
        Swal.fire({
                title: 'Upload Success',
                type: 'success'
                })
      })
      .catch(console.log)
    }
  }
}
</script>