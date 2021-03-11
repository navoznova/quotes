import QuoteStorage from './model/quoteStorage.js'
export default class Table {

    constructor() {
        let quoteStorage = new QuoteStorage();
        this.quotes = quoteStorage.getAllQuotes();
        this.fieldNames = ['category', 'text', 'tag', 'country', 'year'];

        this.tbody = document.createElement('tbody');
        let trs = this.quotes.map(quote => this.getRowHtml(quote));
        this.tbody.innerHTML = trs.join('');

        let buttons = this.tbody.querySelectorAll('button');
        for (let button of buttons) {
            button.addEventListener('click', (event) => this.deleteRow(event));
            button.addEventListener('click', (event) => quoteStorage.deleteQuote(event));
        }
    }

    getRowHtml(quote) {
        let tds = this.fieldNames.map(fieldName => `<td>${quote[fieldName]}</td>`);
        tds.push('<td><button>X</button></td>');
        let tr = `<tr>${tds.join('')}</tr>`;
        return tr;
    }

    addRow(quote) {
        let tr = document.createElement('tr');
        tr.innerHTML = this.getRowHtml(quote);
        document.querySelector('tbody').appendChild(tr);
    }

    deleteRow(event) {
        let trToDelete = event.target.closest('tr');
        trToDelete.remove();
    }
}
