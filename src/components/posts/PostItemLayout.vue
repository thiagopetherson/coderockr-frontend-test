<template>
  <div class="post-container-item">
    <div class="post-container-item-header">
      <div class="post-container-item-img">
        <img :src="post.image" />
      </div>
      <div class="post-container-item-info">
        <p class="post-container-item-info-date">{{ brazilianDate(post.createdAt) }}</p>
        <p class="post-container-item-info-author">{{ post.author.name }}</p>
        <p class="post-container-item-info-title">{{ post.title }}</p>
     </div>   
    </div>
    <div class="post-container-item-body">
      <p class="post-container-item-body-text" v-html="post.content"></p>
    </div>
  </div>
</template>

<script>
import globalMixins from '@/mixins/globalMixins'

export default {
  name: 'PostItemLayout',
  props: ['post'],
  mixins: [globalMixins]
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/variables.sass"
@import "@/assets/sass/mixins.sass"

.post-container-item
  width: 67%  
  // min-height: 79% // 1612px
  @include display-direction-justify-align($dir: column)      
  background-color: $white-color

  @media only screen and (min-width: 1px) and (max-width: 1024px) 
    width: 95%

  @media only screen and (min-width: 1025px) and (max-width: 1279px)
    width: 85%

  .post-container-item-header
    width: 100%
    height: 39.5% // 640px
    display: flex

    @media only screen and (min-width: 1px) and (max-width: 1024px)
      @include display-direction-justify-align($dir: column)

    .post-container-item-img
      width: 50%

      @media only screen and (min-width: 1px) and (max-width: 1024px)
        width: 100%

      img
        width: 100%
        height: 100%
        
    .post-container-item-info
      width: 50%
      @include display-direction-justify-align($dir: column, $jus: center)     
      padding: 8% 8% 8% 8%

      @media only screen and (min-width: 1px) and (max-width: 1024px)
        width: 100%
        padding: 1% 5% 1% 5%

      @media only screen and (min-width: 1025px) and (max-width: 1279px)        
        padding: 1% 5% 1% 5%
      

      .post-container-item-info-date
        @include font($fs: 18px, $lh: 26px, $fw: 400)   
        color: #032937

      .post-container-item-info-author
        @include font($fs: 24px, $lh: 34px, $fw: 400)         
        color: #2D2D2D
        margin-top: 8%
        margin-bottom: 8%

        @media only screen and (min-width: 1px) and (max-width: 1024px)
          margin-top: 2%
          margin-bottom: 2%

        @media only screen and (min-width: 1025px) and (max-width: 1279px)
          margin-top: 2%
          margin-bottom: 2%

      .post-container-item-info-title
        @include font($fs: 3.6rem, $lh: 43px, $fw: 700)        
        color: $primary-color
  
  .post-container-item-body
    width: 100%
    height: 60%
    @include display-direction-justify-align($dis: flex, $dir: column, $jus: center, $ali: center)
    

    .post-container-item-body-text
      width: 65%
      padding-top: 8%
      padding-bottom: 8%
      @include font($fs: 2.4rem, $lh: 34px, $fw: 400)    
      color: #2D2D2D

      @media only screen and (min-width: 1px) and (max-width: 1024px)
        width: 100%        
        padding: 8% 5% 1% 5%
      
      @media only screen and (min-width: 1025px) and (max-width: 1279px)
        width: 80%

</style>