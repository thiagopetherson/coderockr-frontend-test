<template>
  <div class="form-container">  
    <div class="form-container-close">      
      <span class="material-symbols-outlined close-modal" @click="this.$emit('actionCloseModal')">close</span>
    </div>
    <div class="form-container-title">
      <h1>Contact</h1>
    </div>
    
    <div class="form-container-body">
      <form>
        <label for="name" class="label-form">Nome</label>
        <input type="text" class="input-form">      
        <label for="email" class="label-form">E-mail</label>
        <input type="email" class="input-form">
        <label for="phone" class="label-form">Phone</label>
        <input type="text" class="input-form">      
        <label for="post" class="label-form">Post</label>
        <textarea class="textarea-form"></textarea>
        <a class="btn-form"><span class="material-symbols-outlined icon-send">send</span><span class="btn-form-text">Submit</span></a>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ContactFormLayout', 
}

</script>

<style scoped lang="sass">

.form-container
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 42%
  // height: 50%
  background-color: #FFF

  .form-container-close   
    width: 100%
    display: flex
    justify-content: flex-end

    .close-modal      
      font-size: 2.5em        
      color: #2D2D2D
      border-radius: 100%
      margin-top: 15px
      margin-right: 15px
      cursor: pointer     
  
  .form-container-title
    h1
      color: #F1A10A
      font-weight: 700
      font-size: 36px
      line-height: 43px

  .form-container-body
    width: 70%

    form
      width: 100%
      display: flex
      flex-direction: column
      color: #000000

      .label-form
        margin: 15px 0
        font-weight: 400
        font-size: 24px
        line-height: 34px

      .input-form
        box-sizing: border-box
        border: 1px solid #2D2D2D
        border-radius: 4px
        margin-top: 3px
        padding: 12px 0
        font-size: 1.4em

      .textarea-form  
        width: 100%
        height: 200px    
      
      .btn-form
        align-self: center
        display: flex
        justify-content: center
        align-items: center
        width: 170px
        font-style: normal
        font-weight: 500
        font-size: 24px
        line-height: 34px
        background: #2D2D2D
        border-radius: 4px
        color: #FFF
        margin-top: 50px
        margin-bottom: 50px
        padding: 7px

        .icon-send
            margin-right: 10px 

        .btn-form-text
            margin-left: 10px
      
</style>