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
    <p id="likes_${index}">Likes: ${books[index].likes}</p>
    <button type="button" id="like_button_${index}" class="btn btn-outline-primary" onclick="toggleLike(${index})">${books[index].liked ? "Unlike" : "Like"}</button>
    <div id="comments_${index}"></div>

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
    let commentElement = document.createElement("p");

    commentElement.textContent = `${books[index].comments[commentIndex].name}: ${books[index].comments[commentIndex].comment}`;

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

  if (books[index].liked === true) {
    likeButtonRef.textContent = "Unlike";
  } else {
    likeButtonRef.textContent = "Like";
  }

  console.log("Likes:", books[index].likes);
  console.log("Liked:", books[index].liked);
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
}

// 4. Start rendering books and comments
renderBooks();

// 5. Render comments for every book
for (let index = 0; index < books.length; index++) {
  renderComments(index);
}
