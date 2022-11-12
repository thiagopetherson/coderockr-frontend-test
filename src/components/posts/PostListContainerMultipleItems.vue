<template>  
  <div class="post-list-container-multiple-items">
    <div class="post-list-container-multiple-items-img">
      <img :src="`https://image.tmdb.org/t/p/w500${post.poster_path}`" />
    </div>
    <div class="post-list-container-multiple-items-body">
      <p class="post-list-container-multiple-items-body-author">{{post.title}}</p>
      <p class="post-list-container-multiple-items-body-title">Architecto quos rem unde quia accusantium</p>
      <p class="post-list-container-multiple-items-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy
      </p>
    </div>
  </div>  
</template>

<script>


export default {
  name: 'PostListContainerMultipleItems',
  props: ['post']  
}
</script>

<style scoped lang="sass">

.post-list-container-multiple-items
  margin-top: 5vh
  width: 50%
  display: flex
  flex-direction: row
  height: 320px    

  .post-list-container-multiple-items-img
    width: 34%

    img
      width: 100%
      height: 100%

  .post-list-container-multiple-items-body
    width: 66%
    display: flex
    flex-direction: column
    justify-content: center
    padding: 8% 8% 8% 8%
    background: #FFFFFF

    .post-list-container-multiple-items-body-author
      font-size: 24px
      line-height: 34px

    .post-list-container-multiple-items-body-title
      font-weight: 700
      font-size: 36px
      line-height: 43px
      color: #F1A10A

    .post-list-container-multiple-items-body-description
      font-style: normal
      font-weight: 400
      font-size: 24px
      line-height: 34px
      color: #2D2D2D

</style>