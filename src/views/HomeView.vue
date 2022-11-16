<template>
  <div class="home">      
    <PostMultiple v-for="(post, index) in posts" :key="index" :post="post" :index="index" :displayNormal="displayNormal ? 'row' : 'row-reverse'" @actionNextPosts="nextPosts" />
    <!--<PostUnique v-for="(post, index) in posts" :key="index" :post="post" />-->
    <div v-if="loading" class="loading">
      <img src="@/assets/loading.gif">
    </div>
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
      posts: [],
      page: 1,
      loading: false,
      displayNormal: true,
    }
  },
  methods: {
    async getPosts () {      
      await this.axios.get(`${this.baseUrl}?_page=${this.page}&_limit=3`)        
      .then(response => {        
        this.posts = response.data
        console.log(this.posts)
      })
      .catch(error => {
        console.log(error)
      })     
    },
    nextPosts () {    
      this.loading = true
      this.page++
      this.axios.get(`${this.baseUrl}?_page=${this.page}&_limit=3`)
      .then(response => {            
        response.data.forEach(item => {
          console.log(item)
          this.posts.push(item)
          this.displayNormal = !this.displayNormal
        })
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {        
        this.loading = false
      }) 
    }
  },
  beforeMount () {
    this.getPosts()
  }  
}
</script>

<style scoped lang="sass">
.home
  width: 100%
  display: flex
  flex-wrap: wrap

  .loading
    height: 10vh
    width: 100vw     
    position: fixed
    display: flex
    justify-content: center
    align-items: center
    bottom: 0

    img
      width: 50px
      height: 50px
    
</style>