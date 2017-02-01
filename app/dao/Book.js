'use strict';

function Book(id, title, author, genre, publishDate, description) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.publishDate = publishDate;
    this.description = description;
}

module.exports = Book;