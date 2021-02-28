import QuoteStorage from './Model/quoteStorage.js'
export default class Catalog {

    constructor() {
        this.quoteStorage = new QuoteStorage();
        let catalogContainer = ducument.createElement('ul');
        catalogContainer.id = "catalog";

        let categoriasListHtml = `
            <li><button data-id=all>ВСЕ</button></li>
            <li><button data-id=economy>Экономика</button></li>
            <li><button data-id=politics>Политика</button></li>
            <li><button data-id=culture>Культура</button></li>`;
        
        catalogContainer.innerHTML = categoriasListHtml;
        catalogContainer.addEventListener('click', this.getQuote);

        this.htmlElement = catalogContainer;
    }

    getQuote(event) {
        const selectedCategory = event.target.dataset.id;

        let quoteStorage = new QuoteStorage();
        let quotes = quoteStorage.getAllQuotes();

        let quotesOncategories = quotes.map(quote => {quote[selectedCategory]});
        let quotesText = quotesOncategories.map(quote => {quote.text});

        let randomIndex = this.getRandomIndex(quotesText);
        const randomQuote = quotesText[randomIndex];
        
        this.showQuote(randomQuote);
    }
    
    getRandomIndex(quotes) {
        const index = Math.floor(Math.random() * quotes.length);
        return index;

    }

    showQuote(quote){
        document.getElementById('output').innerHTML = quote;
    }
}

