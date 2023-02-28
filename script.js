let quote = document.getElementById("quote");

let getQuotes = () => {
    fetch('quotes.json')
        .then((response) => response.json())
        .then((data) => {
            let jsonQuote = data.quote;
            let randomIndex = Math.floor(Math.random() * jsonQuote.length);
            let randomQuote = jsonQuote[randomIndex];
            quote.innerText = randomQuote;
        });
}
window.onload = getQuotes();