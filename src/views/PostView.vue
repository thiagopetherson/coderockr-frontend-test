<template>  
  <div class="post-container">
    <PostItemLayout :post="post" />
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
      await this.axios.get(`https://api.themoviedb.org/3/movie/${this.id}?api_key=7c239e80ee7bf4bc9b4fcea4906f0e3f&language=pt-BR`)        
        .then(response => {          
          this.post = response.data
          console.log(this.post.poster_path)       
        })  
    }
  },
  mounted () {
    this.getPost()
  }
}
</script>

<style scoped lang="sass">
.post-container
  width: 100%
  height: 2030px // 1612px
  display: flex
  justify-content: center
  margin-top: 5vh

</style>