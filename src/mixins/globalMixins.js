const globalMixins = {    
  methods: {   
    characterLimiter: function(text, numberOfCharacter) {
      // Limiting the number of characters and removing HTML tags
      text = new DOMParser().parseFromString(text.substring(numberOfCharacter, 0), 'text/html')
        return text.body.textContent || ""        
    },
    brazilianDate: function(date) {
      // Formatting the date
      let d = new Date(date.substring(10,0))

      let year = d.getUTCFullYear()         
      let month = (d.toLocaleString('pt-BR', { month: 'short' }))
      month = (month.charAt(0).toUpperCase() + month.slice(1)).substring(0,3)
      let day = (d.getUTCDate()).toString().padStart(2, '0')      
        
      return `${month} ${day}, ${year}`
    }      
  }
}

export default globalMixins