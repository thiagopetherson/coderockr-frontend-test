<template>
  <div id="app">    
    <MenuLayout @showContactModal="showModal = !showModal" />
    <router-view :key="$route.fullPath"></router-view>
    <ContactModalLayout v-if="showModal" @closeModal="showModal = false" />
  </div>
</template>

<script>
import MenuLayout from './components/layouts/MenuLayout.vue'
import ContactModalLayout from '@/components/layouts/ContactModalLayout.vue'

export default {
  name: 'App',
  components: { MenuLayout, ContactModalLayout },
  data () {
    return {
      showModal: false,
    }
  }
}
</script>

<style scoped lang="sass">
#app 
  display: flex
  flex-direction: column
</style>
