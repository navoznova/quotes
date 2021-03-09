export default class QuoteStorage {
    getAllQuotes() {
        let jsonStr = localStorage['quotes'];
        return JSON.parse(jsonStr);
    }

    saveNewQuote(quote) {
        let quotes = this.getAllQuotes();
        quotes.push(quote);
        let jsonStr = JSON.stringify(quotes);
        localStorage['quotes'] = jsonStr;
    }
}
