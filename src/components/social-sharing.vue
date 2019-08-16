<template>
   <social-sharing :url="song.src"
                      :title="song.title"
                      :description="'-' + song.artist"
                      hashtags="hacktify,vue,components"
                      twitter-user="hacktify"
                      inline-template>
  <div>
    <network network="facebook" class="btn btn-sm px-3" style="background-color: #3b5998; color: white;">
      <a href="#"  style="color: white;"><i class="fa fa-facebook"></i></a>
    </network>
    <network network="twitter" class="btn btn-sm px-3 mx-2" style="background-color: #00acee; color: white;">
        <a href="#"  style="color: white;"><i class="fa fa-twitter"></i></a>
    </network>
    <network network="whatsapp" class="btn btn-sm px-3" style="background-color: #25d366;">
        <a href="#" style="color: white;"><i class="fa fa-whatsapp"></i></a>
    </network>
  </div>
</social-sharing>
</template>

<script>
export default {
    props: ['song']
}
</script>

<style>

</style>