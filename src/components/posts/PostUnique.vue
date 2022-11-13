<template>  
  <div class="post-unique-container">
    <div class="post-unique-container-img">
      <img :src="`https://image.tmdb.org/t/p/w500${post.poster_path}`" />
    </div>
    <div class="post-unique-container-body">
      <p class="post-unique-container-body-author">{{post.title}}</p>
      <p class="post-unique-container-body-title">Architecto quos rem unde quia accusantium</p>
      <p class="post-unique-container-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy
      </p>
    </div>
  </div>  
</template>

<script>


export default {
  name: 'PostUnique',
  props: ['post']  
}
</script>

<style scoped lang="sass">

.post-unique-container
  margin-top: 5vh
  width: 100%
  display: flex
  flex-direction: row
  justify-content: flex-end
  height: 640px 

  .post-unique-container-img
    width: 33%

    img
      width: 100%
      height: 100%

  .post-unique-container-body
    width: 33%
    display: flex
    flex-direction: column
    justify-content: center
    padding: 8% 4% 8% 4%
    background: #FFFFFF

    .post-unique-container-body-author
      font-size: 24px      

    .post-unique-container-body-title
      font-weight: 700
      font-size: 36px
      line-height: 43px
      color: #F1A10A
      padding-top: 3.5%
      padding-bottom: 3.5%

    .post-unique-container-description
      font-style: normal
      font-weight: 400
      font-size: 24px
      line-height: 34px
      color: #2D2D2D

</style>