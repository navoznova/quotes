import QuoteStorage from './Model/quoteStorage.js'
export default class Catalog {
    constructor() {
        this.quoteStorage = new QuoteStorage();
        this.quotes = this.quoteStorage.getAllQuotes();

        let categories = this.getCategories();
        let categoryHtmls = categories.map(category => 
            `<div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="/images/img.png" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${category}</h5>
                    <p class="card-text">Описание категории.</p>
                    <button class="btn btn-primary" data-name='${category}'>Получить цитату</button>
                    </div>
                </div>
            </div>`);
        categoryHtmls.push('<li><button data-name="All">Все</button></li>')
        let categoriesHtmlStr = categoryHtmls.join('');

        let catalogContainer = document.createElement('div');
        catalogContainer.id = "catalog";
        catalogContainer.classList.add('row');
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
}
