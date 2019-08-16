<template>
    <b-col xs="6" sm="4" md="3" lg="3">
    <a href="#" class="song">
      <div class="song--album-cover album-cover"><i class="fa fa-music"></i></div>
      <div class="song--title">{{ song.title }} - <span class="text-secondary">{{ song.UserId.username }}</span></div>
    </a>
    </b-col>
</template>
<script>
export default {
    props: ['song']
}
</script>