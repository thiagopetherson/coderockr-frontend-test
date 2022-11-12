<template>
  <header class="header-container">
    <div class="menu-items">
      <div class="nav-logo">        
           Rockr Blog           
      </div>
        <div class="nav-items">
          <div class="">Posts</div>
          <div class="">Contact</div>
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

      div:first-child
        margin-right: 2em    

</style>