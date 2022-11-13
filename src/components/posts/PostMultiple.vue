<template>  
  <div class="post-container post-unique-container">
    <div class="post-container-img post-unique-container-img">
      <img :src="`https://image.tmdb.org/t/p/w500${post.poster_path}`" />
    </div>
    <div class="post-container-body post-unique-container-body">
      <p class="post-container-body-author post-unique-container-body-author">{{post.title}}</p>
      <p class="post-container-body-title post-unique-container-body-title">Architecto quos rem unde quia accusantium</p>
      <p class="post-container-body-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy
      </p>
    </div>
  </div>  
</template>

<script>


export default {
  name: 'PostMultiple',
  props: ['post']  
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

</style>