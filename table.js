import QuoteStorage from './Model/quoteStorage.js'

export default class Table {

    constructor(users) {
        this.quoteStorage = new QuoteStorage();
        this.quotes = this.quoteStorage.getAllQuotes();
        this.fieldNames = ['category', 'text', 'tag', 'country', 'year'];

        this.tbody = document.createElement('tbody');
        let trs = this.quotes.map(quote => this.addRow(quote));
        this.tbody.innerHTML = trs.join('');

        let buttons = this.tbody.querySelectorAll('button');
        for (let button of buttons) {
            button.addEventListener('click', deleteRow);
        }

        function deleteRow(event) {
            let trToDelete = event.target.closest('tr');
            trToDelete.remove();
        };
    }

    addRow(quote) {
        let tds = this.fieldNames.map(fieldName => `<td>${quote[fieldName]}</td>`);
        tds.push('<td><button>X</button></td>');
        let tr = `<tr>${tds.join('')}</tr>`;
        return tr;
    }
}
