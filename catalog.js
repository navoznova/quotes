export default class Catalog {
    constructor(quotes) {
        this.quotes = quotes;
        let catalogContainer = document.createElement('ul');
        catalogContainer.id = "catalog";

        // TODO: избавиться от хардкода. Составлять список копок на основе списка всех категорий из QuoteStorage
        let categoriasListHtml = `
            <li><button data-category=all>ВСЕ</button></li>
            <li><button data-category=economy>Экономика</button></li>
            <li><button data-category=politics>Политика</button></li>
            <li><button data-category=culture>Культура</button></li>`;

        catalogContainer.innerHTML = categoriasListHtml;
        catalogContainer.addEventListener('click', (event) => { this.showQuoteButtonClickHandler(event) });

        this.htmlElement = catalogContainer;
    }

    showQuoteButtonClickHandler(event) {
        const category = event.target.dataset.category;

        let quotesByCategories = this.quotes.filter(quote => quote.category === category);
        let randomIndex = Math.floor(Math.random() * quotesByCategories.length);
        const randomQuote = quotesByCategories[randomIndex];

        function getQuoteHtml(quote){
            return quote.text + ' ' + quote.author;
        }
    
        document.getElementById('output').innerHTML = getQuoteHtml(randomQuote);
    }    
}

