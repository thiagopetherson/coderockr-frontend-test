<template>  
  <div class="post-container" :class="[postType]" :style="{ flexDirection: direction }">
    <div class="post-container-img" :class="[`${postType}-img`]">
      <img :src="`${post.image}`" />
    </div>
    <div class="post-container-body" :class="[`${postType}-body`]">
      <p class="post-container-body-author" :class="[`${postType}-body-author`]">{{ post.author.name }}</p>
      <p class="post-container-body-title" :class="[`${postType}-body-title`]">{{ post.title }}</p>
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
  name: 'PostList',
  props: ['post','index','displayNormal'],
  mixins: [globalMixins],
  data () {
    return {
      direction: this.displayNormal
    }
  },
  methods: {
    getNextPosts () {
      // Infinite Scroll
      window.onscroll = () => {        
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight
       
        if (bottomOfWindow) {
          this.$emit('actionNextPosts')         
        }
      }
    }
  },
  computed: { 
    postType () {
      return (this.index + 1) % 3 === 0 ? 'post-unique-container' : 'post-multiple-container'
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

.post-container
  margin-top: 5vh
  display: flex

  .post-container-body
    @include display-direction-justify-align($dir: column, $jus: center)
    background: $white-color

    .post-container-body-author
      @include font($fs: 24px, $lh: 34px, $fw: 400)      

    .post-container-body-title
      @include font($fs: 36px, $lh: 43px, $fw: 700)
      color: $primary-color     

    .post-container-body-description
      @include font($fs: 24px, $lh: 34px, $fw: 400)
      font-style: normal      
      color: #2D2D2D

    .post-container-body-icon
      color: #032937
      align-self: flex-end

.post-multiple-container
  width: 50%
  height: 320px

  .post-multiple-container-img
    width: 34%   

    img
      width: 100%
      height: 100%

  .post-multiple-container-body
    width: 66%    
    padding: 8% 8% 8% 8%

    .post-multiple-container-body-author
      line-height: 34px

    .post-multiple-container-body-title      
      line-height: 38px      
      padding-top: 2%
      padding-bottom: 2%

.post-unique-container
  width: 100%
  height: 640px
  justify-content: flex-end

  .post-unique-container-img
    width: 33%   

    img
      width: 100%
      height: 100%

  .post-unique-container-body
    width: 33%    
    padding: 8% 4% 8% 4%

    .post-unique-container-body-author
      line-height: 24px

    .post-unique-container-body-title      
      line-height: 43px      
      padding-top: 3.5%
      padding-bottom: 3.5%

.post-container-reverse
  flex-direction: row-reverse

</style>