// Book renting service - Ada store 

const books = []
//{
//  id: ""
//  title: "",
//  rentedBy: ""
// }

// - Add books to Ada store 
function addBook(book) {
  books.push({
    id: book.id,
    title: book.title,
    rentedBy: book.rentedBy
  })
}

// - Rent books
function rentBook(bookId, name){
  for(let i=0; i<books.length; i++) {
    if(books[i].id == bookId) {
      books[i].rentedBy = name
    }
  }
}

// - return books
function returnBook(bookId) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id == bookId) {
      books[i].rentedBy = null
    }
  }
}

// - Get all books
function getAllBooks() {
  const allBooks = books
  return allBooks
}

// - Remove books
function removeBook(bookId) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id == bookId) {
      books.splice(i, 1)
    }
  }
}





console.log(books)  
addBook({
  id: 1,
  title: "Intro to backend",
  rentedBy: null
})
addBook({
  id:2,
  title: "Intro to backend",
  rentedBy: null
})
console.log(books)

rentbook(1, "ifedili")
console.log(books)

returnBook(1)
console.log(books)

console.log(getAllBooks())

removeBook(2)
console.log(books)


  