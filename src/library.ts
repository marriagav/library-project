import { Book } from "./book";

interface Library {
  books: Book[];
}

class Library {
  constructor(books: Book[] = []) {
    this.books = books;
  }
  public addBook(book: Book) {
    this.books.push(book);
  }
  public removeBook(book: Book) {
    const index: number = this.books.indexOf(book);
    this.books.splice(index, 1);
  }
}

export { Library };
