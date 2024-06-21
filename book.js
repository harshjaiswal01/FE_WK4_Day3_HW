// Function for Book Object

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

//Display Book Operations

Book.prototype.displayBook = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
}

// Object to store books in library
const Library = [];

// Function to display information for all books in the library
function displayLibraryInfo() {
    Library.forEach(book => {
        console.log(book.displayBook());
    });
}

//Add new books to Library
function addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    Library.push(newBook);
    console.log(`${title}, ${author}, ${pages}, Added Book`)
}

addBook('Harry Potter 1', 'J K Rowling', 10);
addBook('Harry Potter 2', 'J K Rowling', 20);

//Search Books from Library

function searchBooksbyTitle(title) {
    return Library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()))
}

console.log('Books with Harry Potter Title', searchBooksbyTitle("Harry Potter"))

function searchBooksbyAuthor(author) {
    return Library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()))
}

console.log("Books with J K Rowling Title", searchBooksbyAuthor("J K"))

function addTitleAndAuthor() {
    return Library.map(book => {
        return{
            ...book,
            title: `Title: ${book.title}`,
            author: `Author: ${book.author}`
        };
    });
}
console.log('Library with title and author:', addTitleAndAuthor());

function filterBooksByPages(pages) {
    return Library.filter(book => book.pages <= pages)
}
console.log('Books with 100 pages or less:', filterBooksByPages(100));

displayLibraryInfo()