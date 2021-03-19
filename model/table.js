import QuoteStorage from './quoteStorage.js'
export default class Table {
    constructor() {
        this.quoteStorage = new QuoteStorage();
        this.quotes = this.quoteStorage.getAllQuotes();

        this.tbody = document.createElement('tbody');
        let trHtmls = this.quotes.map(quote => this.getRowHtml(quote));
        this.tbody.innerHTML = trHtmls.join('');

        let buttons = this.tbody.querySelectorAll('button');
        buttons.forEach(button => this.addListener(button));
    }

    getRowHtml(quote) {
        let fieldNames = ['category', 'tag', 'text', 'author', 'tag', 'country', 'year'];
        let tdHtmls = fieldNames.map(fieldName => {
            if (!quote[fieldName]) {
                quote[fieldName] = '—';
            }
            return `<td>${quote[fieldName]}</td>`
        });
        tdHtmls.push('<td><button class = "js-removeButton btn btn-outline-danger btn-sm">X</button></td>');
        let trHtml = `<tr data-quote-id='${quote.id}'>${tdHtmls.join('')}</tr>`;
        return trHtml;
    }

    addRow(quote) {
        let tr = document.createElement(`tr`);
        tr.setAttribute('data-quote-id', quote.id);
        tr.innerHTML = this.getRowHtml(quote);
        let button = tr.querySelector('.js-removeButton');
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
        if (!quoteId) {
            throw new Error('Не указан id');
        }
        let trToDelete = this.tbody.querySelector(`[data-quote-id="${quoteId}"]`);
        trToDelete.remove();
    }
}
