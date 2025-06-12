const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    const container = document.getElementById("book-container");
    container.innerHTML = " ";

    myLibrary.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.setAttribute("data-id", book.id);
        card.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Read:</strong>${book.read? "Yes" : "No"}</p>
        <button class="toggle-read-btn">Toggle Read</button>
        <button class="remove-btn">Remove</button>
        `;
        container.appendChild(card);
    });

    document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", e => {
        const id = e.target.parentElement.getAttribute("data-id");
        removeBookById(id);
        })
    })

    document.querySelectorAll(".toggle-read-btn").forEach(btn => {
        btn.addEventListener("click", e=> {
            const id = e.target.parentElement.getAttribute("data-id");
            toggleBookReadStatus(id);
        })
    })
}



function removeBookById(id) {
    const index = myLibrary.findIndex(book => book.id === id);
    if (index != -1) {
        myLibrary.splice(index, 1);
        displayBooks();
    }
}

function toggleBookReadStatus(id) {
    const book = myLibrary.find(book => book.id === id);
    if (book) {
        book.toggleRead();
        displayBooks();
    }

}

addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("The Hobbit", "J.R.R Tolkien", 310, false);

// Open the dialog
const dialog = document.getElementById("book-dialog");
document.getElementById("new-book-btn").addEventListener("click", () => {
    dialog.showModal();
});

// Handle form submission
document.getElementById("book-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const title = formData.get("title");
    const author = formData.get("author");
    const pages = Number(formData.get("pages"));
    const read = formData.get("read") === "on";

    addBookToLibrary(title, author, pages, read)
    dialog.close();
    this.reset();
})

document.getElementById("close-dialog").addEventListener("click", () => {
    dialog.close();
})
