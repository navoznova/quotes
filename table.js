import QuoteStorage from './model/quoteStorage.js'

export default class Table {
    constructor() {
        this.quoteStorage = new QuoteStorage();
        this.quotes = this.quoteStorage.getAllQuotes();
        this.fieldNames = ['category', 'text', 'tag', 'country', 'year'];

        this.tbody = document.createElement('tbody');
        let trHtmls = this.quotes.map(quote => this.getRowHtml(quote));
        this.tbody.innerHTML = trHtmls.join('');

        let buttons = this.tbody.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                let quoteId = event.target.closest('tr').dataset.quoteId;
                this.deleteRow(quoteId);
                this.quoteStorage.deleteQuote(quoteId);
            });
        });
    }

    getRowHtml(quote) {
        let tdHtmls = this.fieldNames.map(fieldName => `<td>${quote[fieldName]}</td>`);
        tdHtmls.push('<td><button>X</button></td>');
        let trHtml = `<tr data-quote-id='${quote.id}'>${tdHtmls.join('')}</tr>`;
        return trHtml;
    }

    addRow(quote) {
        let tr = document.createElement(`tr`);
        tr.setAttribute('data-quote-id', quote.id);
        tr.innerHTML = this.getRowHtml(quote);
        // todo: навесить класс на тег button использовать его "button.js-removeButton"
        let button = tr.querySelector('button');
        this.addListener(button);
        
        document.querySelector('tbody').appendChild(tr);
    }

    addListener(button) {
        button.addEventListener('click', (event) => {
            let id = event.target.closest('tr').dataset.quoteId;
            this.deleteRow(id);
            this.quoteStorage.deleteQuote(id);
        });
    }

    deleteRow(quoteId) {
        let trToDelete = this.tbody.querySelector(`[data-quote-id="${quoteId}"]`);
        // todo: добавить проверку
        trToDelete.remove();
    }
}
