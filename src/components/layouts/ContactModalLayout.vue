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

.contact-container
  position: absolute
  height: 100vh
  width: 100% 
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center   
  background: rgba(0, 0, 0, 0.6)
  z-index: 10
  overflow: hidden

</style>