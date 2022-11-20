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
  methods: {
    setHeight () {            
      let bodyHeight = this.$route.name === "home" ? window.screen.height : document.body.scrollHeight
      document.querySelector('.contact-container').setAttribute('style',`height: ${bodyHeight}px`)

      if ( this.$route.name === "home" )
        document.body.setAttribute('style',`overflow: hidden`)     
    }
  },
  mounted() {    
    this.setHeight()
  }
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/mixins.sass"

.contact-container
  position: absolute
  width: 100%
  @include display-direction-justify-align($dir: column, $jus: center, $ali: center) 
  background: rgba(0, 0, 0, 0.6)
  z-index: 10

</style>