let myLibrary = [];
let exampleBooksAdded = false;

class book {
    constructor(title, author, pages, read, note) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.note = note;
        this.info = function () {
            let readStatus = this.read === "Yes" ? "read" : "not read yet";
            return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
        };
    }
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked ? "Yes" : "No";
    let note = document.getElementById("note").value;

    if (!title || !author || !pages) {
        alert("Please enter all the required fields.");
        return;
    }

    let newBook = new book(title, author, pages, read, note);
    myLibrary.push(newBook);
    render();
    clearForm();
}

function render() {
    let bookGrid = document.getElementById("bookGrid");
    bookGrid.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let bookCover = document.createElement("div");
        bookCover.className = "bookCover";

        let title = document.createElement("h3");
        title.textContent = myLibrary[i].title;

        let author = document.createElement("p");
        author.textContent = "Author: " + myLibrary[i].author;

        let pages = document.createElement("p");
        pages.textContent = "Pages: " + myLibrary[i].pages;

        let read = document.createElement("p");
        read.textContent = "Read: " + myLibrary[i].read;

        let note = document.createElement("p");
        note.textContent = "Note: " + myLibrary[i].note;

        let buttonContainer = document.createElement("div");
        buttonContainer.className = "buttonContainer";

        let toggleReadButton = document.createElement("button");
        toggleReadButton.textContent = "Toggle Read";
        toggleReadButton.setAttribute("onclick", `toggleReadStatus(${i})`);

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("onclick", `deleteBook(${i})`);

        buttonContainer.appendChild(toggleReadButton);
        buttonContainer.appendChild(deleteButton);

        bookCover.appendChild(title);
        bookCover.appendChild(author);
        bookCover.appendChild(pages);
        bookCover.appendChild(read);
        bookCover.appendChild(note);
        bookCover.appendChild(buttonContainer);

        bookGrid.appendChild(bookCover);
    }
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    render();
}

function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
    document.getElementById("note").value = "";
}

function toggleForm() {
    let form = document.getElementById("form");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

function toggleReadStatus(index) {
    let book = myLibrary[index];
    book.read = book.read === "Yes" ? "No" : "Yes";
    render();
}

function addExampleBooks() {
    if (!exampleBooksAdded) {
        myLibrary.push(
            new book("The Great Gatsby", "F. Scott Fitzgerald", 218, "Yes", ""),
            new book("To Kill a Mockingbird", "Harper Lee", 324, "Yes", ""),
            new book("1984", "George Orwell", 328, "No", ""),
            new book("Pride and Prejudice", "Jane Austen", 432, "Yes", ""),
            new book("The Catcher in the Rye", "J.D. Salinger", 234, "No", ""),
            new book("The Hobbit", "J.R.R. Tolkien", 310, "Yes", ""),
            new book("Brave New World", "Aldous Huxley", 288, "No", ""),
            new book("To the Lighthouse", "Virginia Woolf", 209, "Yes", "")
        );

        exampleBooksAdded = true;
        render();
    }
}
