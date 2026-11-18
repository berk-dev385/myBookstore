// 1. Render all books
function renderBooks() {
  let bookListRef = document.getElementById("book_list");

  bookListRef.innerHTML = "";

  for (let index = 0; index < books.length; index++) {
    bookListRef.innerHTML += getBookTemplate(index);
  }
}

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
    try {
      let savedData = JSON.parse(savedBooks);

      if (
        Array.isArray(savedData) &&
        savedData.length === books.length &&
        savedData.every((book) => book && Array.isArray(book.comments))
      ) {
        books = savedData;
      } else {
        console.warn("Ungültige Buchdaten im localStorage.");
      }
    } catch (error) {
      console.error("Fehler beim Laden der Bücher:", error);
    }
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
