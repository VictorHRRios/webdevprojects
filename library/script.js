const myLibrary = [];
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const new_book = new Book(title, author, pages, read);
    myLibrary.push(new_book);
}

addBookToLibrary("first", "some", "123", "have read");
addBookToLibrary("second", "someone", "153", "have not read");
addBookToLibrary("third", "someoneone", "323", "have read");

function displayLibrary() {
    for (book of myLibrary) {
        const book_div = document.createElement("div");
        const title = document.createElement("div");
        const author = document.createElement("div");
        const pages = document.createElement("div");
        const read = document.createElement("div");
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        read.textContent = book.read;
        book_div.appendChild(title);
        book_div.appendChild(author);
        book_div.appendChild(pages);
        book_div.appendChild(read);
        container.appendChild(book_div);
    }
}

const container = document.querySelector("div.container");

displayLibrary();