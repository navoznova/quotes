import quotes from './defaultQuotes.js';
export default class QuoteStorage {
    getAllQuotes() {
        if(!localStorage['quotes']) {
            console.log('Справочник пуст, добавляем цитаты по-умочанию')
            localStorage.quotes = JSON.stringify(quotes);
        }

        let jsonStr = localStorage['quotes'];
        let jsonParsed = JSON.parse(jsonStr);

        if(jsonParsed.length == 0) {
            throw new Error('В вашем банке цитат нет ниодной цитаты. Добавьте цитаты');
        }
        return jsonParsed;
    }

    saveNewQuote(quote) {
        if (!quote) {
            throw new Error('Incorrect data');
        }

        // todo: добавить проверки на наличие обязательных полей

        let quotes = this.getAllQuotes();
        quotes.push(quote);

        let jsonStr = JSON.stringify(quotes);
        localStorage['quotes'] = jsonStr;
    }

    deleteQuote(quoteId) {
        let allQuotes = this.getAllQuotes();
        let quoteToDeleteIndex = allQuotes.findIndex(quote => quote.id === quoteId);
        allQuotes.splice(quoteToDeleteIndex, 1);
        localStorage['quotes'] = JSON.stringify(allQuotes);
    }
}

