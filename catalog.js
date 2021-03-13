import QuoteStorage from './model/quoteStorage.js'
export default class Catalog {
    constructor() {
        this.quoteStorage = new QuoteStorage();
        this.quotes = this.quoteStorage.getAllQuotes();

        let categories = this.getCategories();
        let categoryHtmls = categories.map(category => `<div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>${category}</title>
            <rect width="100%" height="100%" fill="#55595c"/>
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">${category}</text></svg>
            <div class="card-body">
            <h5 class="card-title">${category}</h5>
              <p class="card-text">Описание категории</p>
              <div class="d-flex justify-content-between align-items-center">
                  <button type="button" class="btn btn-sm btn-outline-secondary" data-name='${category}'>Получить цитату</button>
              </div>
            </div>
          </div>
        </div>`);
        categoryHtmls.push('<button class="btn btn-primary" data-name="All">Все</button>')
        let categoriesHtmlStr = categoryHtmls.join('');

        let catalogContainer = document.createElement('div');
        catalogContainer.id = "catalog";
        catalogContainer.classList.add('row', 'row-cols-1', 'row-cols-sm-2', 'row-cols-md-3', 'g-3');

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
