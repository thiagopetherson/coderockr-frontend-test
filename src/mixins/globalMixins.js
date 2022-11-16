const globalMixins = {    
    methods: {   
        characterLimiter: function(text, numberOfCharacter) {
            // Limiting the number of characters and removing HTML tags
            text = new DOMParser().parseFromString(text.substring(numberOfCharacter, 0), 'text/html')
            return text.body.textContent || ""        
        }       
    }
}

export default globalMixins