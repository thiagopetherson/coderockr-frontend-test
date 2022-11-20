<template>
  <div id="app">    
    <MenuLayout @showContactModal="showModal = !showModal" />
    <router-view :key="$route.fullPath" :showModal="showModal"></router-view>
    <ContactModalLayout v-if="showModal" @closeModal="actionModal" />
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
  },
  methods: {
    actionModal () {
      this.showModal = false
      document.body.setAttribute('style',`overflow: visible`)
    }
  }
}
</script>

<style scoped lang="sass">
#app 
  display: flex
  flex-direction: column
</style>
