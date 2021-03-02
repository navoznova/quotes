import QuoteStorage from './Model/quoteStorage.js'
export default class Catalog {
    constructor() {
        this.quoteStorage = new QuoteStorage();
        this.quotes = this.quoteStorage.getAllQuotes();

        let categories = this.getCategories();
        let categoryHtmls = categories.map(category => `<li><button data-name='${category}'>${category}</button></li>`);
        categoryHtmls.push('<li><button data-name="All">Все</button></li>')
        let categoriesHtmlStr = categoryHtmls.join('');

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
        let quotesByCategories = this.quotes;

        if (event.target.dataset.name !== "All") {
            quotesByCategories = this.quotes.filter(quote => quote.category === event.target.dataset.name);
        }
        let randomIndex = Math.floor(Math.random() * quotesByCategories.length);
        const randomQuote = quotesByCategories[randomIndex];

        function getQuoteHtml(quote) {
            return `${quote.text} ${quote.author}`;
        }

        document.getElementById('output').innerHTML = getQuoteHtml(randomQuote);
    }

    addQuote(quote) {
        this.quoteStorage.addQuote(quote);
    }

    //TODO: избавиться от повторений при многократном вызове рандома. Ниже пример решения
    /*random = {
            randNumOld: 0,
            getRandomInt: function (min, max) {
                var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
                if (randNum == random.randNumOld) return random.getRandomInt(min, max);
                random.randNumOld = randNum;
                return randNum;
            }
        };
    }*/

    //TODO: добавить возмодность выводить рандомную цитату из всего списка цитат
}

