<template>  
  <div class="post-container">
    <PostItemLayout v-if="post" :post="post" />
  </div>  
</template>

<script>
import PostItemLayout from '@/components/posts/PostItemLayout.vue'

export default {
  name: 'PostView',
  components: { PostItemLayout },
  props: ['id'],
  data () {
    return {
      post: null,
    }
  },
  methods: {
    async getPost () {
      await this.axios.get(`${this.baseUrl}/${this.id}`)        
        .then(response => {          
          this.post = response.data              
        })  
    }
  },
  mounted () {
    this.getPost()
  }
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/mixins.sass"

.post-container
  width: 100%
  height: 100%
  @include display-direction-justify-align($jus: center)   
  padding-top: 5vh
  padding-bottom: 15vh

</style>