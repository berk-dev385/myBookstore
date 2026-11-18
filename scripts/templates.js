//Create HTML template for a single book
function getBookTemplate(index) {
  return `

  <div class="card mb-3" >
  <div class="card-body" >  

    <header class="book-header">
        <h2>${books[index].name}</h2>
    </header>

    

<div class="book-carousel" id="book-carousel_${index}">

    <img class="carousel-slide active"
         src="assets/img/book-0${index + 1}.webp"
         alt="Vorderseite: ${books[index].name}"
         loading="lazy">

    <img class="carousel-slide"
         src="assets/img/book-0${index + 1}-page-01.webp"
         alt="Innenseite 1: ${books[index].name}"
         loading="eager">

    <img class="carousel-slide"
         src="assets/img/book-0${index + 1}-page-02.webp"
         alt="Innenseite 2: ${books[index].name}"
         loading="eager">

    <img class="carousel-slide"
         src="assets/img/book-0${index + 1}-back.webp"
         alt="Rückseite: ${books[index].name}"
         loading="eager">


<div class="book-carousel-nav">

    <button type="button"
        onclick="changeBookSlide(${index}, -1)"
        aria-label="Vorheriges Bild">
        &#10094;
    </button>

    <div class="book-carousel-dots">
        <button type="button" class="book-carousel-dot active"
            onclick="showBookSlide(${index}, 0)"
            aria-label="Bild 1 anzeigen"></button>

        <button type="button" class="book-carousel-dot"
            onclick="showBookSlide(${index}, 1)"
            aria-label="Bild 2 anzeigen"></button>

        <button type="button" class="book-carousel-dot"
            onclick="showBookSlide(${index}, 2)"
            aria-label="Bild 3 anzeigen"></button>

        <button type="button" class="book-carousel-dot"
            onclick="showBookSlide(${index}, 3)"
            aria-label="Bild 4 anzeigen"></button>
    </div>

    <button type="button"
        onclick="changeBookSlide(${index}, 1)"
        aria-label="Nächstes Bild">
        &#10095;
    </button>

</div>


</div>



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
