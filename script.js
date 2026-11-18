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

    <header class="book-header">
        <h2>${books[index].name}</h2>
    </header>

    <img src="assets/img/book-0${index + 1}.webp" alt="Cover: ${books[index].name}" width="160" height="240" loading="lazy">

    <div class="book-info">
        <p>Autor: ${books[index].author}</p>     
        <p>Genre: ${books[index].genre}</p>
        <p>Jahr: ${books[index].publishedYear}</p>
    </div>

    <div class="book-actions">
        <p>Preis: ${books[index].price.toFixed(2)} €</p>
        <p id="likes_${index}">Likes: ${books[index].likes}</p>
        <button type="button" id="like_button_${index}" class="btn btn-outline-primary" onclick="toggleLike(${index})" aria-label="${books[index].liked ? "Unlike" : "Like"}">
        <img id="heart_icon_${index}" src="assets/icon/${books[index].liked ? "heart-filled.png" : "heart-outline.png"}" alt="" width="24" height="24">
</button>
    </div>

    <section class="book-comments">
        <h3>Kommentare</h3>
        <div id="comments_${index}" class="comments-list"></div>
    </section>

    <input type="text" id="comment_name_${index}" class="form-control mb-2" placeholder="Dein Name">
    <textarea id="comment_text_${index}" class="form-control mb-2" placeholder="Dein Kommentar"></textarea>
    <button type="button" class="btn btn-primary" onclick="addComment(${index})">Kommentar hinzufügen</button>

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
    let commentElement = document.createElement("div");
    commentElement.classList.add("comment-entry");

    let nameElement = document.createElement("strong");
    nameElement.classList.add("comment-author");
    nameElement.textContent = books[index].comments[commentIndex].name;

    let textElement = document.createElement("p");
    textElement.classList.add("comment-text");
    textElement.textContent = books[index].comments[commentIndex].comment;

    commentElement.appendChild(nameElement);
    commentElement.appendChild(textElement);

    commentsRef.appendChild(commentElement);
  }
}

// 4. Toggle like for a single book
function toggleLike(index) {
  if (books[index].liked === false) {
    books[index].likes++;
    books[index].liked = true;
  } else {
    books[index].likes--;
    books[index].liked = false;
  }
  let likesRef = document.getElementById(`likes_${index}`);
  likesRef.textContent = `Likes: ${books[index].likes}`;

  let likeButtonRef = document.getElementById(`like_button_${index}`);
  let heartIconRef = document.getElementById(`heart_icon_${index}`);

  if (books[index].liked === true) {
    heartIconRef.src = "assets/icon/heart-filled.png";
    likeButtonRef.setAttribute("aria-label", "Unlike");
  } else {
    heartIconRef.src = "assets/icon/heart-outline.png";
    likeButtonRef.setAttribute("aria-label", "Like");
  }

  console.log("Likes:", books[index].likes);
  console.log("Liked:", books[index].liked);

  saveBooks();
}

// 5. Add a new comment to a book
function addComment(index) {
  let nameRef = document.getElementById(`comment_name_${index}`);
  let commentRef = document.getElementById(`comment_text_${index}`);

  if (nameRef.value.trim() === "" || commentRef.value.trim() === "") {
    alert("Bitte Name und Kommentar eingeben.");
    return;
  }

  let newComment = {
    name: nameRef.value,
    comment: commentRef.value,
  };

  books[index].comments.push(newComment);

  renderComments(index);

  nameRef.value = "";
  commentRef.value = "";

  saveBooks();
}

function saveBooks() {
  localStorage.setItem("bpg_bookstore_books", JSON.stringify(books));
}

function loadBooks() {
  let savedBooks = localStorage.getItem("bpg_bookstore_books");

  if (savedBooks !== null) {
    books = JSON.parse(savedBooks);
  }
}

// 6. Load saved books before rendering
loadBooks();

// 7. Start rendering books and comments
renderBooks();

// 8. Render comments for every book
for (let index = 0; index < books.length; index++) {
  renderComments(index);
}
