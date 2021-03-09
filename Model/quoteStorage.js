export default class QuoteStorage {
    constructor() {
    }
    getAllQuotes() {
        let jsonStr = localStorage['quotes'];
        return JSON.parse(jsonStr);
    }

    saveNewQuote(quote) {
        if(!quote){
          throw new Error('Incorrect data');     
        }
        
        let quotes = this.getAllQuotes();
        quotes.push(quote);
        
        let jsonStr = JSON.stringify(quotes);
        localStorage['quotes'] = jsonStr;
    }
}

