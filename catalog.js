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
        
        this.htmlElement.innerHTML = categoriasListHtml;
        this.htmlElement = catalogContainer;
    }

    getTopic() {
        let catalog = document.querySelector('#catalog');
        catalog.addEventListener('click', this.showsQuote);
    }

    showsQuote(event) {
        const quote = this.getQuote(event.target.dataset.id);
        document.getElementById('output').innerHTML = quote;
    };

    getQuote(propertyName) {
        const quotes = this.categories[propertyName];
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        return randomQuote;
    }

    //Написать функцию, кторая добавляет в catalogListHtml новый категорию 
    
}

