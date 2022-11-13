<template>  
  <div class="post-multiple-container">
    <div class="post-multiple-container-img">
      <img :src="`https://image.tmdb.org/t/p/w500${post.poster_path}`" />
    </div>
    <div class="post-multiple-container-body">
      <p class="post-multiple-container-body-author">{{post.title}}</p>
      <p class="post-multiple-container-body-title">Architecto quos rem unde quia accusantium</p>
      <p class="post-multiple-container-description">
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

.post-multiple-container
  margin-top: 5vh
  width: 50%
  display: flex
  height: 320px    

  .post-multiple-container-img
    width: 34%

    img
      width: 100%
      height: 100%

  .post-multiple-container-body
    width: 66%
    display: flex
    flex-direction: column
    justify-content: center
    padding: 8% 8% 8% 8%
    background: #FFFFFF

    .post-multiple-container-body-author
      font-size: 24px
      line-height: 34px

    .post-multiple-container-body-title
      font-weight: 700
      font-size: 36px
      line-height: 38px
      color: #F1A10A
      padding-top: 2%
      padding-bottom: 2%

    .post-multiple-container-body-description
      font-style: normal
      font-weight: 400
      font-size: 24px
      line-height: 34px
      color: #2D2D2D

</style>