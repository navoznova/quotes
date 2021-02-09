const catalog = { 
    'География': ['111', '2222' ], 
    'История' : ['333', '444' ],
    'Алгебра': ['555'],    
};

const catalogController = {
    selectTopic (event) {
        console.log('str');
    },

    getRandomQuote() {
        let randomQuote;
        return randomQuote;
    },

    showRandomQuote (getRandomQuote){
        const qoute = getRandomQuote();
        console.log(qoute);
    }
}

