const wordsContainer = document.querySelector('.words-container')
const charactersContainer = document.querySelector('.characters-container')
const sentencesContainer = document.querySelector('.sentences-container')
const paragraphContainer = document.querySelector('.paragraphs-container')
const textarea = document.querySelector('#textarea')

function count(){
    textarea.oninput = () =>{
        let charactersValue = textarea.value
        const characters = charactersValue.replace(/\s/g, '').length

        charactersContainer.innerHTML = `
        <span>Characters</span>
        <h2>${characters}</h2>
        `

        let wordsValue = textarea.value
        const words = wordsValue.split(' ').filter(word =>{
            return word != ''
        })

        wordsContainer.innerHTML = `
        <span>Words</span>
        <h2>${words.length}</h2>
        `

        let sentencesValue = textarea.value
        const sentences = sentencesValue.split('.').filter(sentence =>{
            return sentence != ''
        })

        sentencesContainer.innerHTML = `
        <span>Sentences</span>
        <h2>${sentences.length}</h2>
        `

        let paragraphValue = textarea.value
        const paragraphs = paragraphValue.split(/\r|\n/).filter(paragraph =>{
            return paragraph != ''
        })

        paragraphContainer.innerHTML = `
        <span>Paragraphs</span>
        <h2>${paragraphs.length}</h2>
        `
    }
}

count()
