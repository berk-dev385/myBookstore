// Escape special characters for safe HTML output
function escapeHtml(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

// Create a book carousel image
function getBookSlide(index, safeName, suffix, label, active, loading) {

    return `
        <img class="carousel-slide${active ? " active" : ""}"
            src="assets/img/book-0${index + 1}${suffix}.webp"
            alt="${label}: ${safeName}"
            loading="${loading}">
    `;
}

// Create the book title header
function getBookHeader(safeName) {

    return `
        <header class="book-header">
            <h2>${safeName}</h2>
        </header>
    `;
}

// Create a carousel navigation arrow
function getCarouselArrow(index, direction, label, symbol) {

    return `
        <button type="button"
            onclick="changeBookSlide(${index}, ${direction})"
            aria-label="${label}">
            ${symbol}
        </button>
    `;
}

// Create a carousel navigation dot
function getCarouselDot(index, slideIndex) {

    return `
        <button type="button" class="book-carousel-dot${slideIndex === 0 ? " active" : ""}"
            onclick="showBookSlide(${index}, ${slideIndex})"
            aria-label="Bild ${slideIndex + 1} anzeigen"
            aria-pressed="${slideIndex === 0}"></button>
    `;
}

// Create the carousel navigation controls
function getCarouselNavigation(index) {
    return `
        <div class="book-carousel-nav">
            ${getCarouselArrow(index, -1, "Vorheriges Bild", "&#10094;")}
            <div class="book-carousel-dots">
                ${getCarouselDot(index, 0)}
                ${getCarouselDot(index, 1)}
                ${getCarouselDot(index, 2)}
                ${getCarouselDot(index, 3)}
            </div>
            ${getCarouselArrow(index, 1, "Nächstes Bild", "&#10095;")}
        </div>
    `;
}

// Create the author, genre and year section
function getBookInfo(safeAuthor, safeGenre, publishedYear) {

    return `
        <div class="book-info">
            <p>Autor: ${safeAuthor}</p>
            <p>Genre: ${safeGenre}</p>
            <p>Jahr: ${publishedYear}</p>
        </div>
    `;
}

// Create the price and like controls
function getBookActions(index) {
    return `
        <div class="book-actions">        
            <p>Preis: ${books[index].price.toLocaleString("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })} €</p>
            <p id="likes_${index}">Likes: ${books[index].likes}</p>
            <button type="button" id="like_button_${index}" class="btn btn-outline-primary" onclick="toggleLike(${index})" aria-label="${books[index].liked ? "Unlike" : "Like"}">
                <img id="heart_icon_${index}" src="assets/icon/${books[index].liked ? "heart-filled.png" : "heart-outline.png"}" alt="" width="24" height="24">
            </button>
        </div>
    `;
}

// Create the book comments section
function getBookComments(index) {

    return `
        <section class="book-comments">
            <h3>Kommentare</h3>
            <div id="comments_${index}" class="comments-list"></div>
        </section>
    `;
}

// Create the comment input fields and button
function getCommentForm(index) {

    return `
        <label class="visually-hidden" for="comment_name_${index}">Dein Name</label>
        <input type="text" id="comment_name_${index}" class="form-control mb-2" placeholder="Dein Name">
        <label class="visually-hidden" for="comment_text_${index}">Dein Kommentar</label>
        <textarea id="comment_text_${index}" class="form-control mb-2" placeholder="Dein Kommentar"></textarea>
        <button type="button" class="btn btn-primary" onclick="addComment(${index})">Kommentar hinzufügen</button>
    `;
}

// Assemble the book carousel
function getBookCarousel(index, safeName) {

    return `
        <div class="book-carousel" id="book-carousel_${index}">
            ${getBookSlide(index, safeName, "", "Vorderseite", true, "lazy")}
            ${getBookSlide(index, safeName, "-page-01", "Innenseite 1", false, "eager")}
            ${getBookSlide(index, safeName, "-page-02", "Innenseite 2", false, "eager")}
            ${getBookSlide(index, safeName, "-back", "Rückseite", false, "eager")}
            ${getCarouselNavigation(index)}
        </div>
    `;
}

// Assemble the complete book card
function getBookCard(index, safeName, safeAuthor, safeGenre) {
    return `
        <div class="card mb-3">
            <div class="card-body">
                ${getBookHeader(safeName)}
                ${getBookCarousel(index, safeName)}
                ${getBookInfo(safeAuthor, safeGenre, books[index].publishedYear)}
                ${getBookActions(index)}
                ${getBookComments(index)}
                ${getCommentForm(index)}
            </div>
        </div>
    `;
}






