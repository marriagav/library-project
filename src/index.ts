import { Library } from "./library";
import { Book } from "./book";

const library = new Library();

const body = document.querySelector("body");
const addBookButton = body?.querySelector(".addBook");
const overlay = body?.querySelector(".overlay");
const submitButton = body?.querySelector(".submit");
const form = document.querySelector(".modal");
const cardGrid = document.querySelector(".booksGrid");

addBookButton?.addEventListener("click", (e) => displayForm(e));
overlay?.addEventListener("click", (e) => hideForm(e));
submitButton?.addEventListener("click", (e) => addBook(e));

function displayForm(e) {
  form?.classList.add("active");
  overlay?.classList.add("active");
}

function hideForm(e) {
  form?.classList.remove("active");
  overlay?.classList.remove("active");
}

function getBookData(): Book {
  const title = document.getElementById("title-input") as HTMLInputElement;
  const author = document.getElementById("author-input") as HTMLInputElement;
  const pages = document.getElementById("page-input") as HTMLInputElement;
  const isRead = document.getElementById("checkbox-input") as HTMLInputElement;
  return new Book(
    title.value,
    author.value,
    parseInt(pages.value),
    isRead.checked
  );
}

function addBookCard(book: Book) {
  // Todo this
  const card = document.createElement("div");
  card.classList.add("bookCard");
  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = book.title;
  const author = document.createElement("p");
  author.classList.add("author");
  author.textContent = book.author;
  const pages = document.createElement("p");
  pages.classList.add("pages");
  pages.textContent = `${book.numPages} pages`;
  const read = document.createElement("button");
  read.classList.add("read");
  read.textContent = "Read";
  const delBook = document.createElement("button");
  delBook.classList.add("delete");
  delBook.textContent = "Remove";
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
  card.appendChild(delBook);
  cardGrid?.appendChild(card);
}

function addBook(e) {
  e.preventDefault();
  const book = getBookData();
  library.addBook(book);
  addBookCard(book);
}
