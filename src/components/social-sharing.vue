<template>
   <social-sharing url="https://www.google.com"
                      title="Hacktify: Music on Your Hand!"
                      description="Hacktify is the best way to enjoy the music"
                      hashtags="hacktify,vue,components"
                      twitter-user="hacktify"
                      inline-template>
  <div>
      <network network="facebook" class="btn btn-sm px-3" style="background-color: #3b5998; color: white;">
        <i class="fa fa-facebook"></i>
      </network>
      <network network="twitter" class="btn btn-sm px-3 mx-2" style="background-color: #00acee; color: white;">
        <i class="fa fa-twitter"></i>
      </network>
      <network network="whatsapp" class="btn btn-sm px-3" style="background-color: #25d366; color: white;">
        <i class="fa fa-whatsapp"></i>
      </network>
  </div>
</social-sharing>
</template>

<script>
export default {
    props: ['linkToMusic']
}
</script>

<style>

</style>