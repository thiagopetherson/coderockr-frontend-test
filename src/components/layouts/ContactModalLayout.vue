<template>
  <div class="contact-container">        
    <ContactFormLayout @actionCloseModal="this.$emit('closeModal')" />   
  </div>
</template>

<script>
import ContactFormLayout from '@/components/layouts/ContactFormLayout.vue'

export default {
  name: 'ContactModalLayout',
  components: { ContactFormLayout },  
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/mixins.sass"

.contact-container
  position: absolute
  height: 100vh
  width: 100%
  @include display-direction-justify-align($dir: column, $jus: center, $ali: center) 
  background: rgba(0, 0, 0, 0.6)
  z-index: 10
  overflow: hidden

</style>