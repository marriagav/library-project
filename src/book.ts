interface Book {
  title: string;
  author: string;
  numPages: number;
  haveRead: boolean;
}

class Book {
  constructor(
    title: string,
    author: string,
    numPages: number,
    haveRead: boolean
  ) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;
  }

  public getReadStatus(): string {
    return this.haveRead ? "Read" : "Not read yet";
  }

  public updateReadStatus() {
    this.haveRead = !this.haveRead;
  }

  public info(): string {
    const readStatus = this.getReadStatus();
    return `${this.title} by ${this.author}, ${this.numPages} pages, ${readStatus}`;
  }
}

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
// console.log(theHobbit.info());

export { Book };
