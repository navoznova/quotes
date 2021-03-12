import quotes from './defaultQuotes.js';
export default class QuoteStorage {
    getAllQuotes() {
        if (!localStorage['quotes']) {
            localStorage.quotes = JSON.stringify(quotes);
        }

        let jsonStr = localStorage['quotes'];
        let jsonParsed = JSON.parse(jsonStr);

        //Как обработать ошибку, если массив пустой? Потом кнопка save не работает 
        if (jsonParsed.length == 0) {
            throw new Error('В вашем банке цитат нет ниодной цитаты. Добавьте цитаты');
        } else {
            return jsonParsed;
        }
    }

    saveNewQuote(quote) {
        if (!quote) {
            throw new Error('Нет цитаты');
        }

        if (!quote.category || !quote.text) {
            throw new Error('Заполните обязательные поля');
        }

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

