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
    deleteQuote(event){
        let id = event.target.closest('tr').dataset.quoteId;
        let allQuotes = this.getAllQuotes();
        let indexQuoteToDelete = allQuotes.findIndex(quote => quote.id === id);
        allQuotes.splice(indexQuoteToDelete, 1);
        localStorage['quotes'] = JSON.stringify(allQuotes);
    }
}

