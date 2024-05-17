const quotes = data;

console.log(quotes);

const quoteCount = quotes.length;

generateDynamicSlides();

var slideIndex = 1;
showSlides(slideIndex);

function generateDynamicSlides() {
    //dymanically generate the slides
    var innerHTMLSLides = "";
    var dynamicslides = document.getElementById("dynamic-stides");
    for (i = 1; i <= quoteCount; i++) {
        innerHTMLSLides +=  ` <div class="mySlides" onClick="getRandomQuote(${i})">
    <q>I love you the more in that I believe you had liked me for my own sake and for nothing else</q>
    <p class="author">- John Keats</p>
    </div>`;
    }
    dynamicslides.innerHTML = innerHTMLSLides;

    //dynamically generate the dots
    var innerHTMLDots = "";
    var dotsContainer = document.getElementsByClassName("dot-container");
    for (i = 1; i <= quoteCount; i++) {
        innerHTMLDots +=  `<span class='dot' onclick='currentSlide(${i})'> </span>`;
    }
    dotsContainer[0].innerHTML = innerHTMLDots;
}

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var author = document.getElementsByClassName("author");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].innerHTML = `<q>${quotes[i].quote}</q><p class='author'>${quotes[i].author}</p>`;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//generate random slide
function getRandomQuote(excluded) {
    var n = Math.floor(Math.random() * (quoteCount - 1) + 1);
    if (n >= excluded) n++;

    currentSlide(n);

}