<template>
  <header class="header-container">
    <div class="menu-items">
      <div class="nav-logo">        
           Rockr Blog           
      </div>
        <div class="nav-items">
          <div class="">Posts</div>
          <div class="" @click="showContactModal">Contact</div>
        </div>
    </div>
    <ContactModalLayout v-if="showModal" @closeModal="showModal = false" /> 
  </header>
</template>

<script>
import ContactModalLayout from '@/components/layouts/ContactModalLayout.vue'

export default {
  name: 'MenuLayout',
  components: { ContactModalLayout },
  data () {
    return {
      showModal: false,
    }
  },
  methods: {
    showContactModal () {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style scoped lang="sass">

.header-container
  background-color: #2D2D2D  
  width: 100%
  height: 10vh
  display: flex 
  justify-content: center
  color: #FFFFFF
  font-weight: 500

  .menu-items
    width: 60%
    height: 100%
    display: flex
    justify-content: space-between
    align-items: center
    font-style: normal
    font-weight: 500
    font-size: 32px
    line-height: 38px

    .nav-items     
      display: flex

      div
        cursor: pointer

      div:first-child
        margin-right: 2em    

</style>