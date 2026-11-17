// 1. Render all books
function renderBooks() {
  let bookListRef = document.getElementById("book_list");

  bookListRef.innerHTML = "";

  for (let index = 0; index < books.length; index++) {
    bookListRef.innerHTML += getBookTemplate(index);
  }
}
// 2. Create HTML template for a single book
function getBookTemplate(index) {
  return `

  <div class="card mb-3" >
  <div class="card-body" >  
    <h2>${books[index].name}</h2> 
    <p>Autor: ${books[index].author}</p>     
    <p>Genre: ${books[index].genre}</p>
    <p>Jahr: ${books[index].publishedYear}</p>
    <p>Preis: ${books[index].price.toFixed(2)} €</p>
    </div>
    </div>
    `;
}
// 3. Start rendering books
renderBooks();
