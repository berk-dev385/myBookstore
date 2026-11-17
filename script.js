function renderBooks() {
  let bookListRef = document.getElementById("book_list");
  console.log(bookListRef);
}

renderBooks();

function renderBooks() {
  let bookListRef = document.getElementById("book_list");

  bookListRef.innerHTML = `<h2>${books[0].name}</h2>`;
}

renderBooks();
