import QuoteStorage from './model/quoteStorage.js'
export default class Table {
    constructor() {
        this.quoteStorage = new QuoteStorage();
        this.quotes = this.quoteStorage.getAllQuotes();
        this.fieldNames = ['category', 'text', 'tag', 'country', 'year'];

        this.tbody = document.createElement('tbody');
        let trs = this.quotes.map(quote => this.getRowHtml(quote));
        this.tbody.innerHTML = trs.join('');

        let buttons = this.tbody.querySelectorAll('button');
        buttons.forEach(button => {this.addListener(button)});
    }

    getRowHtml(quote) {
        let tds = this.fieldNames.map(fieldName => `<td>${quote[fieldName]}</td>`);
        tds.push('<td><button>X</button></td>');
        let tr = `<tr data-quote-id = ${quote.id}>${tds.join('')}</tr>`;
        return tr;
    }

    addRow(quote) {
        let tr = document.createElement(`tr`);
        tr.setAttribute('data-quote-id', `${quote.id}`);
        tr.innerHTML = this.getRowHtml(quote);
        let button = tr.querySelector('button');
        this.addListener(button);
        
        document.querySelector('tbody').appendChild(tr);
    }

    addListener(button) {
        button.addEventListener('click', (event) => this.deleteRow(event));
        button.addEventListener('click', (event) => this.quoteStorage.deleteQuote(event));
    }

    deleteRow(event) {
        let trToDelete = event.target.closest('tr');
        trToDelete.remove();
    }
}
