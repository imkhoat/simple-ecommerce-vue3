<template>
  <div class="home-page">
    <s-header></s-header>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import SHeader from './shared/components/organisms/s-header/s-header.vue'

export default defineComponent({
  components: {
    SHeader
  }
})
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap");
body {
  margin: 0;
  font-family: "Source Sans Pro", sans-serif;
}
</style>
