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
  name: 'PostMultiple',
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
    console.log(this.displayNormal)
    console.log(this.index + 1)
    this.getNextPosts()
  }
}
</script>

<style scoped lang="sass">

.post-container
  margin-top: 5vh
  display: flex  

  .post-container-body    
    display: flex
    flex-direction: column
    justify-content: center   
    background: #FFFFFF

    .post-container-body-author
      font-size: 24px      

    .post-container-body-title
      font-weight: 700
      font-size: 36px      
      color: #F1A10A      

    .post-container-body-description
      font-style: normal
      font-weight: 400
      font-size: 24px
      line-height: 34px
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