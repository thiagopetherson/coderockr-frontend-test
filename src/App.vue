<template>
  <div id="app">    
    <MenuLayout />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import MenuLayout from './components/layouts/MenuLayout.vue'
export default {
  name: 'App',
  components: { MenuLayout } 
}
</script>

<style lang="scss">

</style>
