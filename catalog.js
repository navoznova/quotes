import QuoteStorage from './Model/quoteStorage.js'
export default class Catalog {
    constructor() {
        this.quoteStorage = new QuoteStorage();
        this.quotes = this.quoteStorage.getAllQuotes();
    
        let categories = this.getCategories();
        let categoriesHtml = categories.map(category => `<li><button>${category}</button></li>`);
        let categoriesHtmlStr = categoriesHtml.join(''); 

        let catalogContainer = document.createElement('ul');
        catalogContainer.id = "catalog";
        catalogContainer.innerHTML = categoriesHtmlStr;
        catalogContainer.addEventListener('click', (event) => { this.showQuoteButtonClickHandler(event) });

        this.htmlElement = catalogContainer;
    }

    getCategories() {
        let categories = this.quotes.map(quote => quote.category);
        return [...new Set(categories)];
    }
    
    showQuoteButtonClickHandler(event) {
        let quotesByCategories = this.quotes.filter(quote => quote.category === event.target.textContent);
        let randomIndex = Math.floor(Math.random() * quotesByCategories.length);
        const randomQuote = quotesByCategories[randomIndex];

        function getQuoteHtml(quote){
            return `${quote.text} ${quote.author}`;
        }
    
        document.getElementById('output').innerHTML = getQuoteHtml(randomQuote);
    }    
    
    addQuote(quote) {
        this.quoteStorage.addQuote(quote);
    }
}

