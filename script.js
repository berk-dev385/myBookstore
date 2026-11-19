// Render all book cards
function renderBooks() {
  let bookListRef = document.getElementById("book_list");
  bookListRef.innerHTML = "";

  for (let index = 0; index < books.length; index++) {
    bookListRef.insertAdjacentHTML("beforeend", getBookTemplate(index));
  }
}

// Show the selected carousel slide
function showBookSlide(index, slideIndex) {
  let carouselRef = document.getElementById(`book-carousel_${index}`);
  let slides = carouselRef.querySelectorAll(".carousel-slide");
  let dots = carouselRef.querySelectorAll(".book-carousel-dot");
  slideIndex = (slideIndex + slides.length) % slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
    dots[i].setAttribute("aria-pressed", "false");
  }
  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
  dots[slideIndex].setAttribute("aria-pressed", "true");
}

// Navigate between carousel slides
function changeBookSlide(index, direction) {
  let carouselRef = document.getElementById(`book-carousel_${index}`);
  let slides = carouselRef.querySelectorAll(".carousel-slide");

  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("active")) {
      showBookSlide(index, i + direction);
      return;
    }
  }
}

// Create a comment element
function createCommentElement(comment) {
  let commentElement = document.createElement("div");
  commentElement.classList.add("comment-entry");
  let nameElement = document.createElement("strong");
  nameElement.classList.add("comment-author");
  nameElement.textContent = comment.name;
  let textElement = document.createElement("p");
  textElement.classList.add("comment-text");
  textElement.textContent = comment.comment;
  commentElement.appendChild(nameElement);
  commentElement.appendChild(textElement);
  return commentElement;
}

// Render comments for a single book
function renderComments(index) {
  let commentsRef = document.getElementById(`comments_${index}`);
  commentsRef.innerHTML = "";
  for (let comment of books[index].comments) {
    commentsRef.appendChild(createCommentElement(comment));
  }
}

// Toggle the like state of a book
function toggleLike(index) {
  updateLikeState(index);
  updateLikeDisplay(index);
  console.log("Likes:", books[index].likes);
  console.log("Liked:", books[index].liked);
  saveBooks();
}

// Update the stored like state and count
function updateLikeState(index) {
  if (books[index].liked === false) {
    books[index].likes++;
    books[index].liked = true;
  } else {
    books[index].likes--;
    books[index].liked = false;
  }
}

// Update the like count and heart icon
function updateLikeDisplay(index) {
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
}


// Add a new comment to a book
function addComment(index) {
  let nameRef = document.getElementById(`comment_name_${index}`);
  let commentRef = document.getElementById(`comment_text_${index}`);
  if (!isCommentValid(nameRef, commentRef)) {
    return;
  }
  books[index].comments.push({ name: nameRef.value, comment: commentRef.value });
  renderComments(index);
  nameRef.value = "";
  commentRef.value = "";
  saveBooks();
}

// Validate comment input fields
function isCommentValid(nameRef, commentRef) {
  if (nameRef.value.trim() === "" || commentRef.value.trim() === "") {
    alert("Es muss Name und Kommentar ausgefüllt sein.");
    return false;
  }
  return true;
}

// Save books to localStorage
function saveBooks() {
  try {
    localStorage.setItem("bpg_bookstore_books", JSON.stringify(books));
  } catch (error) {
    console.error("Fehler beim Speichern der Bücher, frag mal Mustafa:", error);
  }
}

// Validate a stored comment object
function isValidComment(comment) {
  return comment !== null &&
    typeof comment === "object" &&
    typeof comment.name === "string" &&
    typeof comment.comment === "string";
}

// Validate a stored book object
function isValidBook(book) {
  return book !== null && typeof book === "object" &&
    typeof book.name === "string" &&
    typeof book.author === "string" &&
    Number.isInteger(book.likes) && book.likes >= 0 &&
    typeof book.liked === "boolean" &&
    Number.isFinite(book.price) && book.price >= 0 &&
    Number.isInteger(book.publishedYear) &&
    typeof book.genre === "string" &&
    Array.isArray(book.comments) &&
    book.comments.every(isValidComment);
}

// Validate the stored book collection
function isValidBookList(savedData) {
  return Array.isArray(savedData) &&
    savedData.length === books.length &&
    savedData.every(isValidBook);
}

// Load saved books from localStorage
function loadBooks() {
  try {
    let savedBooks = localStorage.getItem("bpg_bookstore_books");
    if (savedBooks === null) return;
    let savedData = JSON.parse(savedBooks);
    if (isValidBookList(savedData)) {
      books = savedData;
    } else {
      console.warn("Ungültige Buchdaten im localStorage.");
    }
  } catch (error) {
    console.error("Fehler beim Laden der Bücher:", error);
  }
}

// Prepare safe book data and generate its HTML
function getBookTemplate(index) {

  let safeName = escapeHtml(books[index].name);
  let safeAuthor = escapeHtml(books[index].author);
  let safeGenre = escapeHtml(books[index].genre);
  return getBookCard(index, safeName, safeAuthor, safeGenre);
}

// Load saved book data before rendering
loadBooks();

// Render all book cards
renderBooks();

// Render comments for every book
for (let index = 0; index < books.length; index++) {
  renderComments(index);
}
