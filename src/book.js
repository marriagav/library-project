"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, author, numPages, haveRead) {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.haveRead = haveRead;
    }
    Book.prototype.getReadStatus = function () {
        return this.haveRead ? "Read" : "Not read yet";
    };
    Book.prototype.updateReadStatus = function () {
        this.haveRead = !this.haveRead;
    };
    Book.prototype.info = function () {
        var readStatus = this.getReadStatus();
        return "".concat(this.title, " by ").concat(this.author, ", ").concat(this.numPages, " pages, ").concat(readStatus);
    };
    return Book;
}());
exports.Book = Book;
