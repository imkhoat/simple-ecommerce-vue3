<template>
  <s-button color="primary">Hello there</s-button>
  <s-button color="primary" :round="true">Hello there</s-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import SButton from './shared/components/atoms/s-button/s-button.vue'
export default defineComponent({
  components: {
    SButton
  }
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
