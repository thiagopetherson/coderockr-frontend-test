<template>
  <div class="post-container-item">
    <div class="post-container-item-header">
      <div class="post-container-item-img">
        <img :src="`https://image.tmdb.org/t/p/w500/uy3NhZq5IMw9c7vSoP2Z1GsQOJo.jpg`" />
      </div>
      <div class="post-container-item-info">
        <p class="post-container-item-info-date">Jan 6, 2018</p>
        <p class="post-container-item-info-author">Kelsi Monahan</p>
        <p class="post-container-item-info-title">Qui occaecati vero et quibusdam non</p>
     </div>   
    </div>
    <div class="post-container-item-body">
      <p class="post-container-item-body-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend ligula in nulla vulputate pharetra. 
        Proin condimentum, libero quis feugiat pharetra, ante arcu faucibus felis, vel elementum magna felis in libero. 
        Aliquam id ultricies purus. Etiam at ullamcorper enim. Cras vel elit ac lorem condimentum dignissim. 
        Ut rhoncus neque finibus erat congue, id tempus lacus hendrerit. Curabitur non faucibus diam. Sed id ante id dolor 
        euismod varius eu vel velit.<br><br> 
        Maecenas id ligula quis enim blandit gravida a et lorem. Vivamus eu turpis eu 
        leo malesuada dictum non ac tortor. Pellentesque volutpat mollis leo tincidunt sollicitudin. Suspendisse porta 
        imperdiet sapien nec euismod. Quisque ac dictum sem. Cras in porttitor lacus, vitae convallis elit. Maecenas in 
        fermentum erat, a rutrum nulla.<br><br> 
        Mauris quis dolor sit amet metus mollis tempor eu quis turpis. Vestibulum vel 
        eleifend magna, eget tempor nulla. Donec bibendum mauris aliquam elit vulputate, id vestibulum lorem sodales. Nullam 
        eget erat mauris. Etiam sit amet sollicitudin magna. Ut tortor nisi, mollis viverra tempus consequat, interdum non mi. 
        Quisque bibendum, lacus sit amet rhoncus malesuada.
      </p>
    </div>
  </div>
</template>

<script>


export default {
  name: 'PostItemLayout',
  props: ['post'],
  mounted () {
    console.log(this.post)
  }
}
</script>

<style scoped lang="sass">
.post-container-item
  width: 67%  
  height: 1612px
  display: flex
  flex-direction: column 
  background-color: #FFF

  .post-container-item-header
    width: 100%
    height: 39.5%
    display: flex

    .post-container-item-img
      width: 50%

      img
        width: 100%
        height: 100%
        
    .post-container-item-info
      width: 50%
      display: flex
      flex-direction: column
      justify-content: center
      align-item: center
      padding: 8% 8% 8% 8%
      

      .post-container-item-info-date
        font-weight: 400
        font-size: 18px
        line-height: 26px
        color: #032937

      .post-container-item-info-author
        font-weight: 400
        font-size: 24px
        line-height: 34px
        color: #2D2D2D
        margin-top: 8%
        margin-bottom: 8%

      .post-container-item-info-title
        font-weight: 700
        font-size: 36px
        line-height: 43px
        color: #F1A10A
  
  .post-container-item-body
    width: 100%
    height: 60%
    display: flex
    justify-content: center
    align-items: center

  .post-container-item-body-text
    width: 65%
    font-weight: 400
    font-size: 24px
    line-height: 34px
    color: #2D2D2D
    




</style>