"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books) {
        if (books === void 0) { books = []; }
        this.books = books;
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.removeBook = function (book) {
        var index = this.books.indexOf(book);
        this.books.splice(index, 1);
    };
    return Library;
}());
exports.Library = Library;
