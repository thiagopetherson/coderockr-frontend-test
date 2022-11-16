<template>
  <header class="header-container">
    <div class="menu-items">
      <div class="nav-logo">        
           Rockr Blog           
      </div>
        <div class="nav-items">
          <div class="">
            <router-link to="/">
              Posts
            </router-link>
          </div>
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
@import "@/assets/sass/variables.sass"
@import "@/assets/sass/mixins.sass"

.header-container
  background-color: #2D2D2D  
  width: 100%
  height: 10vh
  @include display-direction-justify-align($jus: center)  
  color: $white-color
  font-weight: 500

  .menu-items
    width: 67%
    height: 100%
    @include display-direction-justify-align($jus: space-between, $ali: center)     
    font-style: normal
    @include font($fs: 32px, $lh: 38px, $fw: 500)

    .nav-items     
      display: flex

      div
        cursor: pointer

        a
          color: $white-color
          text-decoration: none         

      div:first-child
        margin-right: 2em

</style>