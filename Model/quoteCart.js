import generateGuid from './generateGuid.js';

export default class QuoteCart {
    constructor(categoryName, quoteText, authorName, tagName, countryName, year) {
        this.id = generateGuid();
        this.category = categoryName;
        this.text = quoteText;
        this.author = authorName;
        this.tag = tagName;
        this.country = countryName;
        this.year = year;
    }
}