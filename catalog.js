export default class Catalog {
    constructor(quotes) {
        this.quotes = quotes;
        let catalogContainer = document.createElement('ul');
        catalogContainer.id = "catalog";

        let categoriasListHtml = `
            <li><button data-id=all>ВСЕ</button></li>
            <li><button data-id=economy>Экономика</button></li>
            <li><button data-id=politics>Политика</button></li>
            <li><button data-id=culture>Культура</button></li>`;

        catalogContainer.innerHTML = categoriasListHtml;
        catalogContainer.addEventListener('click', (event) => { this.getQuote(event) });

        this.htmlElement = catalogContainer;
    }

    getQuote(event) {
        const selectedCategory = event.target.dataset.id;

        let quotesOncategories = this.quotes.filter(quote => quote.category == selectedCategory);
        let quotesText = quotesOncategories.map(quote => quote.text);

        let randomIndex = this.getRandomIndex(quotesText);
        const randomQuote = quotesText[randomIndex];

        this.showQuote(randomQuote);
    }

    getRandomIndex(quotesArr) {
        const index = Math.floor(Math.random() * quotesArr.length);
        return index;
    }

    showQuote(quote) {
        document.getElementById('output').innerHTML = quote;
    }
}

