const myLibrary = [];
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.changeReadStatus = function() {
    this.read ? this.read = false : this.read = true; 
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
    container.textContent = "";
    for (let [index,book] of myLibrary.entries()) {
        const bookDiv = document.createElement("div");
        const title = document.createElement("div");
        const author = document.createElement("div");
        const pages = document.createElement("div");
        const read = document.createElement("div");
        const deleteButton = document.createElement("button");
        const readStatus = document.createElement("button");
        const divButtons = document.createElement("div");

        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        read.textContent = book.read ? "read" : "not read";
        deleteButton.textContent = "Delete";
        readStatus.textContent = "Have read?";

        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(pages);
        bookDiv.appendChild(read);
        divButtons.appendChild(deleteButton);
        divButtons.appendChild(readStatus);
        bookDiv.appendChild(divButtons);
        bookDiv.setAttribute("data-id", index);
        bookDiv.classList.add("book");

        deleteButton.addEventListener("click", () => {
            myLibrary.splice(bookDiv.dataset.id, 1);
            bookDiv.remove();
            displayLibrary();
        });
        readStatus.addEventListener("click", () => {
            book.changeReadStatus();
            read.textContent = book.read ? "read" : "not read";
        });
        container.appendChild(bookDiv);
    }
}


const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".dialog-button > button");
const closeButton = document.querySelector("button.cancel");

const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookPages = document.querySelector('#book-pages');
const bookHaveRead = document.querySelector('#book-have-read');
const acceptButton = document.querySelector("input.accept");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

acceptButton.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookHaveRead.value);
    dialog.close()
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
    bookHaveRead.value = "";
});

displayLibrary();