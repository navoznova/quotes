export default class QuoteStorage {
    constructor() {
    }
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

/*        quotes = [
            {
                category: 'politics',
                title: "Политика",
                text: "Быть нацией по сути самая универсальная легитимная ценность в политической жизни нашего времени",
                author: "Б. Андерсон",
            },
            {
                category: 'politics',
                title: "Политика",
                text: "Мы должны завоевать народы нашей промышленностью и победить их нашим вкусом",
                author: "Кольбе",
            },
            {
                category: 'economy',
                title: "Экономика",
                text: "Не работодатель выдает зарплату, работодатель только распределяет деньги. Зарплату выдает клиент",
                author: "",
            },
            {
                category: 'economy',
                title: "Экономика",
                text: "Роль правительства в свободном обществе делать то, что рынок не может делать для себя сам, а именно определять, устанавливать и поддерживать правила игры",
                author: "М.  Фридман",
            },
            {
                category: 'culture',
                title: "Культура",
                text: "Все носят невидимые очки, стекла которых сварены из услышанных или прочитанных слов, идей и мнений. Никто не свободен от очков",
                author: "Н. Арутюнян",
            },
        ];
        // TODO: вытаскивать все цитаты из места хранения см https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage
        return quotes;
    }

    saveNewQuote(quote) {
    }
}*/

