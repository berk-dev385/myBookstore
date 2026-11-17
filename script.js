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
    <div id="comments_${index}"></div>
    </div>
    </div>
    `;
}

// 3. Find the comments of a single book
function renderComments(index) {
  let commentsRef = document.getElementById(`comments_${index}`);

  commentsRef.innerHTML = "";

  for (
    let commentIndex = 0;
    commentIndex < books[index].comments.length;
    commentIndex++
  ) {
    let commentElement = document.createElement("p");

    commentElement.textContent = books[index].comments[commentIndex].comment;

    commentsRef.appendChild(commentElement);
  }
}

// 4. Start rendering books and comments
renderBooks();

// 5. Render comments for every book
for (let index = 0; index < books.length; index++) {
  renderComments(index);
}
