(function () {
    "use strict";

    let LibraryDAO = require('../dao/LibraryDAO');
    let Book = require('../dao/Book.js');


    module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)

        let list = [];

        let bookOne = new Book('1', 'Title', 'Author', 'Genre', 'PublishDate', 'Description');
        let bookTwo = new Book('2', 'JavaScript: The Good Parts', 'Douglas Crockford', '-', '2008-05-01', '-');
        let bookThree = new Book('3', 'Learning Web Design', 'Jennifer Niederst Robbins', 'Learning', '2012-08-01', '4th edition');

        list.push(bookOne, bookTwo, bookThree);

        callback(JSON.stringify(list));

    };

}());
