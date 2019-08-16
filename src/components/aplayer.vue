<template>
<div>
  <h1>{{ singleMusic }}
    </h1>
    <aplayer class="aplayer--active" autoplay
        style="background-color: #222222; color: #ffffff;"
      :music="song"
    ></aplayer>
</div>
</template>

<script>
import Aplayer from 'vue-aplayer'
export default {
    components: {
        Aplayer
    },
    data() {
      return {
        
      }
    },
    props: ['song']
}
</script>

<style>

</style>