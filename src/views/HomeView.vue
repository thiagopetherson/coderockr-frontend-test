<template>
  <div class="post-list-container">
    <!--<PostListContainerMultipleItems v-for="(post, index) in posts" :key="index" :post="post" />-->
    <PostListContainerUniqueItem v-for="(post, index) in posts" :key="index" :post="post" />
  </div>
</template>

<script>
// import PostListContainerMultipleItems from '@/components/posts/PostListContainerMultipleItems.vue'
import PostListContainerUniqueItem from '@/components/posts/PostListContainerUniqueItem.vue'

export default {
  name: 'HomeView',
  components: { PostListContainerUniqueItem },
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
        console.log(this.posts)
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
.post-list-container
  width: 100%
  display: flex
  flex-wrap: wrap  

</style>