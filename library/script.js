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

addBookToLibrary("El principito", "some", "123", "have read");
addBookToLibrary("Harry Potter", "someone", "153", "have not read");
addBookToLibrary("Crepusculo", "someoneone", "323", "have read");

function displayLibrary() {
    container.textContent = "";
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

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("button.cancel");

const book_title = document.querySelector('#book-title');
const book_author = document.querySelector('#book-author');
const book_pages = document.querySelector('#book-pages');
const book_have_read = document.querySelector('#book-have-read');
const acceptButton = document.querySelector("input.accept");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

acceptButton.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary(book_title.value, book_author.value, book_pages.value, book_have_read.value);
    dialog.close()
    displayLibrary();
});

displayLibrary();