<template>
  <div class="home">      
    <PostMultiple v-for="(post, index) in posts" :key="index" :post="post" :index="index" />
    <!--<PostUnique v-for="(post, index) in posts" :key="index" :post="post" />-->
  </div>
</template>

<script>
import PostMultiple from '@/components/posts/PostMultiple.vue'
// import PostUnique from '@/components/posts/PostUnique.vue'

export default {
  name: 'HomeView',
  components: { PostMultiple },
  data () {
    return {
      posts: []
    }
  },
  methods: {
    async getPosts () {
      await this.axios.get(`${this.baseUrl}`)        
      .then(response => {   
        this.posts = response.data.results
        //console.log(this.posts)
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  mounted () {
    this.getPosts()
  }
}
</script>

<style scoped lang="sass">
.home
  width: 100%
  display: flex
  flex-wrap: wrap
    
</style>