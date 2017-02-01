'use strict';

function Book(id, title, author, genre, publishDate, description, price) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.publishDate = publishDate;
    this.description = description;
    this.price = price
}

module.exports = Book;