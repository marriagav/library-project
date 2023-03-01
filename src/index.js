"use strict";
exports.__esModule = true;
var library_1 = require("./library");
var book_1 = require("./book");
var library = new library_1.Library();
var body = document.querySelector("body");
var addBookButton = body === null || body === void 0 ? void 0 : body.querySelector(".addBook");
var overlay = body === null || body === void 0 ? void 0 : body.querySelector(".overlay");
var submitButton = body === null || body === void 0 ? void 0 : body.querySelector(".submit");
var form = document.querySelector(".modal");
var cardGrid = document.querySelector(".booksGrid");
addBookButton === null || addBookButton === void 0 ? void 0 : addBookButton.addEventListener("click", function (e) { return displayForm(e); });
overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener("click", function (e) { return hideForm(e); });
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", function (e) { return addBook(e); });
function displayForm(e) {
    form === null || form === void 0 ? void 0 : form.classList.add("active");
    overlay === null || overlay === void 0 ? void 0 : overlay.classList.add("active");
}
function hideForm(e) {
    form === null || form === void 0 ? void 0 : form.classList.remove("active");
    overlay === null || overlay === void 0 ? void 0 : overlay.classList.remove("active");
}
function getBookData() {
    var title = document.getElementById("title-input");
    var author = document.getElementById("author-input");
    var pages = document.getElementById("page-input");
    var isRead = document.getElementById("checkbox-input");
    return new book_1.Book(title.value, author.value, parseInt(pages.value), isRead.checked);
}
var toggleReadStatus = function (e, book, read) {
    book.updateReadStatus();
    if (book.haveRead) {
        read.textContent = "Read";
        read.classList.remove("not-read");
        read.classList.add("read");
    }
    else {
        read.textContent = "Not read";
        read.classList.add("not-read");
        read.classList.remove("read");
    }
};
var deleteBookCard = function (e, book, card) {
    library.removeBook(book);
    card.remove();
};
function addBookCard(book) {
    var card = document.createElement("div");
    card.classList.add("bookCard");
    var title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = book.title;
    var author = document.createElement("p");
    author.classList.add("author");
    author.textContent = book.author;
    var pages = document.createElement("p");
    pages.classList.add("pages");
    pages.textContent = "".concat(book.numPages, " pages");
    var read = document.createElement("button");
    if (book.haveRead == true) {
        read.classList.add("read");
        read.textContent = "Read";
    }
    else {
        read.classList.add("not-read");
        read.textContent = "Not read";
    }
    read.addEventListener("click", function (e) { return toggleReadStatus(e, book, read); });
    var delBook = document.createElement("button");
    delBook.classList.add("delete");
    delBook.textContent = "Remove";
    delBook.addEventListener("click", function (e) { return deleteBookCard(e, book, card); });
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(delBook);
    cardGrid === null || cardGrid === void 0 ? void 0 : cardGrid.appendChild(card);
}
function addBook(e) {
    e.preventDefault();
    var book = getBookData();
    library.addBook(book);
    addBookCard(book);
}
