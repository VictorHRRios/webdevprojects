const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    changeReadStatus = () => this.read ? this.read = false : this.read = true;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    displayLibrary();
}

addBookToLibrary("El principito", "some", "123", "read");
addBookToLibrary("Harry Potter", "someone", "153", "not read");
addBookToLibrary("Crepusculo", "someoneone", "323", "read");

function displayLibrary() {
    const container = document.querySelector("div.container");
    container.textContent = '';

    myLibrary.forEach((book, index) => {
        const bookDiv = createBookElement(book, index);
        container.appendChild(bookDiv);
    });
}

function createBookElement(book, index) {
    const bookDiv = document.createElement("div");
    bookDiv.setAttribute("data-id", index);
    bookDiv.classList.add("book");

    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const read = document.createElement("div");
    const deleteButton = document.createElement("button");
    const readStatus = document.createElement("button");
    const divButtons = document.createElement("div");

    title.textContent = `Title: ${book.title}`;
    author.textContent = `Author: ${book.author}`;
    pages.textContent = `Pages: ${book.pages}`;
    read.textContent = `${book.read ? "Read" : "Not Read"}`;
    deleteButton.textContent = "Delete";
    readStatus.textContent = "Have read?";

    bookDiv.appendChild(title);
    bookDiv.appendChild(author);
    bookDiv.appendChild(pages);
    bookDiv.appendChild(read);
    divButtons.appendChild(deleteButton);
    divButtons.appendChild(readStatus);
    bookDiv.appendChild(divButtons);

    deleteButton.addEventListener("click", () => {
        myLibrary.splice(bookDiv.dataset.id, 1);
        bookDiv.remove();
        displayLibrary();
    });
    readStatus.addEventListener("click", () => {
        book.changeReadStatus();
        read.textContent = book.read ? "Read" : "Not Read";
    });

    return bookDiv;
}


const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".dialog-button > button");
const form = document.querySelector('form');
const closeButton = document.querySelector("button.cancel");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const bookTitle = formData.get('book-title');
    const bookAuthor = formData.get('book-author');
    const bookPages = formData.get('book-pages');
    const bookHaveRead = formData.get('book-have-read');
    console.table(formData);
    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookHaveRead);
    form.reset()
    dialog.close()
});

displayLibrary();