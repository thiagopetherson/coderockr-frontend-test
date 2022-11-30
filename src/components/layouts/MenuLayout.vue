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
          <div class="" @click="this.$emit('showContactModal')">Contact</div>
        </div>
    </div>    
  </header>
</template>

<script>

export default {
  name: 'MenuLayout',  
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
    @include font($fs: 3.2rem, $lh: 38px, $fw: 500)
    @media only screen and (min-width: 1px) and (max-width: 280px)
      width: 99%
      @include font($fs: 1.8rem, $fw: 500)
    @media only screen and (min-width: 281px) and (max-width: 768px)
      width: 95%
      @include font($fs: 2.4rem, $fw: 500)    
    @media only screen and (min-width: 769px) and (max-width: 1024px)
      width: 95%
      @include font($fs: 2.8rem, $fw: 500)
    @media only screen and (min-width: 1025px) and (max-width: 1279px)
      width: 95%
      @include font($fs: 2.8rem, $fw: 500)

    .nav-items     
      display: flex

      div
        cursor: pointer

        a
          color: $white-color
          text-decoration: none         

      div:first-child
        margin-right: 2em
        @media only screen and (min-width: 1px) and (max-width: 1024px)
          margin-right: 0.7em

</style>