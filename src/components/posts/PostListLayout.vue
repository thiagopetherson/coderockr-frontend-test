<template>  
  <div class="post-container" :class="postType">
    <div class="post-container-img" :class="[`${getPostTypeClass()}-img`]">
      <img :src="`${post.image}`" />
    </div>
    <div class="post-container-body" :class="[`${getPostTypeClass()}-body`]">
      <p class="post-container-body-author" :class="[`${getPostTypeClass()}-body-author`]">{{ post.author.name }}</p>
      <p class="post-container-body-title" :class="[`${getPostTypeClass()}-body-title`]">{{ post.title }}</p>
      <p class="post-container-body-description">{{ characterLimiter(post.content, 120) }}...</p>
      <router-link class="post-container-body-icon" :to="`/post/${post.id}`">
        <span class="material-symbols-outlined">keyboard_double_arrow_right</span>
      </router-link>
    </div>   
  </div>  
</template>

<script>
import globalMixins from '@/mixins/globalMixins'

export default {
  name: 'PostListLayout',
  props: ['post','index','displayNormal','scrollHeightPrevious'],
  mixins: [globalMixins],
  data () {
    return {
      direction: this.displayNormal,     
    }
  },
  methods: {
    getNextPosts () {
      // Infinite Scroll
      window.onscroll = () => {    
        //     
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight
        
        // Stopping requests if scroll reaches limit (Don't to make unnecessary requests)
        if ( bottomOfWindow && (this.scrollHeightPrevious !== document.documentElement.scrollHeight) )
          this.$emit('actionNextPosts', {scrollHeight:  document.documentElement.scrollHeight})
      }
    },
    getPostTypeClass () {
      // Defining if the row will be with single or multiple post
      return (this.index + 1) % 3 === 0 ? 'post-single-container' : 'post-multiple-container'
    }
  },
  computed: { 
    postType () {
      // Defining the post type class
      let classes = this.getPostTypeClass()
      classes = classes === 'post-multiple-container' ? `${classes} ${this.direction}` : 'post-single-container' 
      
      // Positioning of the single post
      if ( this.direction === 'post-container-reverse' && classes === 'post-single-container' )
        return  `${classes} post-single-container-justify-start`
      else if ( this.direction === 'post-container-normal' && classes === 'post-single-container' )
        return `${classes} post-single-container-justify-end`

      return classes  
    }
  },
  mounted () { 
    this.getNextPosts()
  }
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/variables.sass"
@import "@/assets/sass/mixins.sass"

/*
 * Some of these classes are applied dynamically
 * The classes define the placement and alignment of the post 
 */

// Global Post Style
.post-container
  height: 100%
  margin-top: 5vh
  display: flex 

  .post-container-body
    @include display-direction-justify-align($dir: column, $jus: center)
    background: $white-color

    .post-container-body-author
      @include font($fs: 2.4rem, $lh: normal, $fw: 400)
      @media only screen and (min-width: 1px) and (max-width: 1279px)  
        @include font($fs: 1.8rem)      

    .post-container-body-title
      @include font($fs: 3.6rem, $lh: normal, $fw: 700)
      @media only screen and (min-width: 1px) and (max-width: 1279px)
        @include font($fs: 2.4rem, $fw: 700)
      @media only screen and (min-width: 1280px) and (max-width: 1450px) 
        @include font($fs: 3.2rem, $fw: 700)  
      color: $primary-color     

    .post-container-body-description
      @include font($fs: 2.4rem, $lh: normal, $fw: 400)
      @media only screen and (min-width: 1px) and (max-width: 1279px)
        @include font($fs: 2.0rem)      
      font-style: normal      
      color: #2D2D2D

    .post-container-body-icon
      color: #032937
      align-self: flex-end

      .material-symbols-outlined
        @include font($fw: bold)

// Multiple Post Style
.post-multiple-container
  width: 50%
  height: 33%  

  @media only screen and (min-width: 1px) and (max-width: 768px)    
    flex-wrap: wrap    
    width: 100%
    height: 80%
    padding-left: 2%
    padding-right: 2%
  
  @media only screen and (min-width: 769px) and (max-width: 1024px) 
    width: 100%
    height: 35%
    padding-left: 2%
    padding-right: 2%

  @media only screen and (min-width: 1025px) and (max-width: 1279px) 
    width: 50%
    height: 70%
    flex-direction: column    
    flex-wrap: wrap
    padding-right: 10px
    padding-left: 10px
  
  @media only screen and (min-width: 1280px) and (max-width: 1761px)
    height: 37%    

  .post-multiple-container-img  
    width: 34%   

    @media only screen and (min-width: 1px) and (max-width: 768px)
      width: 100%

    @media only screen and (min-width: 769px) and (max-width: 1024px)
      width: 50%

    @media only screen and (min-width: 1025px) and (max-width: 1279px)
      width: 100%
      height: 50%
    
    img     
      width: 100%
      height: 100%

  .post-multiple-container-body
    width: 66%    
    padding: 8% 8% 8% 8%

    @media only screen and (min-width: 1px) and (max-width: 768px)
      width: 100%
      padding: 3% 3% 3% 3%
    
    @media only screen and (min-width: 769px) and (max-width: 1024px)
      width: 50%

    @media only screen and (min-width: 1025px) and (max-width: 1279px)
      width: 100%
      height: 50%

    @media only screen and (min-width: 1280px) and (max-width: 1761px)
      padding: 2% 2% 2% 2%

    .post-multiple-container-body-author
      line-height: normal

    .post-multiple-container-body-title      
      line-height: normal   
      padding-top: 2%
      padding-bottom: 2%

// Single Post Style
.post-single-container
  width: 100%
  height: 64%

  @media only screen and (min-width: 1px) and (max-width: 768px) 
    flex-direction: row  
    flex-wrap: wrap    
    height: 80% 
    padding-left: 2%
    padding-right: 2%

  @media only screen and (min-width: 769px) and (max-width: 1024px)
    height: 35%
    padding-left: 2%
    padding-right: 2%

  @media only screen and (min-width: 1025px) and (max-width: 1279px) 
    height: 50%
    padding-left: 1%
    padding-right: 1%

  .post-single-container-img
    width: 40%

    @media only screen and (min-width: 1px) and (max-width: 768px)
      width: 100%   

    @media only screen and (min-width: 769px) and (max-width: 1024px)
      width: 50%

    img
      width: 100%
      height: 100%

  .post-single-container-body
    width: 33%    
    padding: 8% 4% 8% 4%

    @media only screen and (min-width: 1px) and (max-width: 768px)
      width: 100%
    
    @media only screen and (min-width: 769px) and (max-width: 1024px)
      padding: 8% 8% 8% 8%   
      width: 50%

    .post-single-container-body-author
      line-height: 24px

    .post-single-container-body-title      
      line-height: 43px      
      padding-top: 3.5%
      padding-bottom: 3.5%

      @media only screen and (min-width: 769px) and (max-width: 1024px)
        line-height: normal

// Placement Classes 
.post-container-normal
  flex-direction: row

.post-container-reverse
  flex-direction: row-reverse
  // In this breakpoint bellow (769/1024) all posts will be in the same position
  @media only screen and (min-width: 769px) and (max-width: 1024px) 
    flex-direction: row

.post-single-container-justify-start
  justify-content: flex-start
  // In this breakpoint bellow (769/1024) all posts will be in the same position
  @media only screen and (min-width: 769px) and (max-width: 1024px) 
    flex-direction: row

.post-single-container-justify-end
  justify-content: flex-end
  // In this breakpoint bellow (769/1024) all posts will be in the same position
  @media only screen and (min-width: 769px) and (max-width: 1024px) 
    flex-direction: row

</style>