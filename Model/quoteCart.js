export default class QuoteCart {
    constructor(categoryName, quoteText, authorName, tagName, countryName, year){
        this.category = categoryName;
        this.text = quoteText;
        this.author = authorName;
        this.tag = tagName;
        this.country = countryName;
        this.year = year;
    }
}