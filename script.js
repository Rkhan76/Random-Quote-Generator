let quotesData
const url = 'https://type.fit/api/quotes'
fetch(url)
  .then((response) => {
    console.log('hllo')
    return response.json()
  })
  .then((data) => {
    quotesData = data
  })

function generateQuote() {
  let randomNum = Math.floor(Math.random() * 15 + 1)
  let quote = quotesData[randomNum]
  let authorName = quote.author.split(',')[0]
  document.getElementById('quote').innerText = quote.text
  document.getElementById('author').innerText = authorName
}
