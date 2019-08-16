<template>
  <div id="song-page">
    <b-container>
      <div class="song-page--detail">
        <b-row>
          <b-col cols="4">
            <div class="song--album-cover album-cover">
              <div class="album-cover__icon">
                <i class="fa fa-music"></i>
              </div>
            </div>
          </b-col>
          <b-col cols="8">
            <div class="song--title">
              <h2>{{ song.title }}</h2>
            </div>
            <div class="song--desc">
              <p>{{ song.artist}}</p>
            </div>
            <div class="song--action">
              <a :href="song.src" target="_blank" class="btn song--action--download">Download</a>
            </div>
            <div class="song--share">
              <h2>Share</h2>
              <div class="song--share--list">
                <social-sharing :song="song"></social-sharing>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>

    </b-container>
  </div>
</template>
<script>
import Navbar from './navbar'
import SocialSharing from './social-sharing'

export default {
  components: {
    Navbar, SocialSharing
  },
  data() {
    return {
      message: 'This is Song Page'
    }
  },
  props: ['song']  
}
</script>