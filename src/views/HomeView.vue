<template>
  <div class="home">      
    <PostList v-for="(post, index) in posts" :key="index" :post="post" :index="index" :displayNormal="displayNormal ? 'row' : 'row-reverse'" :scrollHeightPrevious="scrollHeightPrevious" @actionNextPosts="nextPosts($event)" />
    <div v-if="loading" class="loading">
      <img src="@/assets/loading.gif">
    </div>
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList.vue'

export default {
  name: 'HomeView',
  components: { PostList },
  data () {
    return {
      posts: [],
      page: 1,
      loading: false,
      displayNormal: true,
      scrollHeightPrevious: 0,
    }
  },
  methods: {
    async getPosts () {      
      await this.axios.get(`${this.baseUrl}?_page=${this.page}&_limit=3`)        
      .then(response => {        
        this.posts = response.data
      })
      .catch(error => {
        console.log(error)
      })     
    },
    nextPosts (event) {    
      this.loading = true
      this.page++
      this.scrollHeightPrevious = event.scrollHeight

      this.axios.get(`${this.baseUrl}?_page=${this.page}&_limit=3`)
      .then(response => {            
        response.data.forEach(item => {         
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
@import "@/assets/sass/mixins.sass"

.home
  width: 100%  
  @include display-direction-justify-align($dis: flex)   
  flex-wrap: wrap

  .loading
    height: 10vh
    width: 100vw     
    position: fixed
    @include display-direction-justify-align($dis: flex, $jus: center, $ali: center)   
    bottom: 0

    img
      width: 50px
      height: 50px
    
</style>