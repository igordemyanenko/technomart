var writeForm = document.querySelector(".modal-write-us");
var cartForm = document.querySelector(".modal-cart");
var buttonCart = document.querySelector(".button-cart");
var writeButton = document.querySelector(".button-write-us");
var close_writeForm = writeForm.querySelector(".button-write-close");
var buttonBuy = document.querySelectorAll(".button-buy");
var close_cartForm = cartForm.querySelector(".button-close");
var continueShopping = cartForm.querySelector(".button-continueShopping");
var buttonToBookmarks = document.querySelectorAll(".button-to-bookmarks");
var buttonBookmark = document.querySelector(".button-bookmark");
var buttonModalCheckout = cartForm.querySelector(".button-modal-checkout");
var popupMap = document.querySelector(".popup-map");
var buttonPopupMap = document.querySelector(".button-map");
var close_map = popupMap.querySelector(".button-map-close");
var slides = document.querySelectorAll(".promo-slide");
var indicators = document.querySelectorAll(".indicator");
var currentIndicator = 0;
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);
var slideInterval_1 = setInterval(nextSlide_1, 3000);
var slidesService = document.querySelectorAll(".services-content");
var buttonsService = document.querySelectorAll(".services-button .button");
var currentSlideService = 0;
var currentButtonService = 0;
var buttonNext = document.querySelector(".arrow-right");
var buttonPrevious = document.querySelector(".arrow-left");
var buttonDelivery = document.querySelector(".button-delivery");
var buttonWarranty = document.querySelector(".button-warranty");
var buttonCredit = document.querySelector(".button-credit");
var servicesContentDelivery = document.querySelector(".services-delivery");
var servicesContentWarranty = document.querySelector(".services-warranty");
var servicesContentCredit = document.querySelector(".services-credit");

writeButton.addEventListener("click", function () {
    writeForm.classList.remove("hide");
});

close_writeForm.addEventListener("click", function () {
    writeForm.classList.add("hide");
});

for (var i = 0; i < buttonBuy.length; i++) {
    buttonBuy[i].addEventListener("click", function (evt) {
        event.preventDefault();
        cartForm.classList.remove("hide");
        buttonCart.classList.remove("empty");
    });
};

close_cartForm.addEventListener("click", function () {
    cartForm.classList.add("hide");
});

continueShopping.addEventListener("click", function () {
    cartForm.classList.add("hide");
});

buttonModalCheckout.addEventListener("click", function () {
    cartForm.classList.add("hide");
});

for (var i = 0; i < buttonToBookmarks.length; i++) {
    buttonToBookmarks[i].addEventListener("click", function () {
        buttonBookmark.classList.remove("empty");
    });

};

buttonPopupMap.addEventListener("click", function (evt) {
    event.preventDefault();
    popupMap.classList.remove("hide");
});

close_map.addEventListener("click", function () {
    popupMap.classList.add("hide");
});

function nextSlide() {
    slidesService[currentSlideService].classList.add("hide");
    buttonsService[currentButtonService].classList.remove("button-services-current");
    currentSlideService = (currentSlideService + 1) % slidesService.length;
    currentButtonService = (currentButtonService + 1) % buttonsService.length;
    slidesService[currentSlideService].classList.remove("hide");
    buttonsService[currentButtonService].classList.add("button-services-current");
};

function pauseSlideshow() {
    clearInterval(slideInterval);
};


function pauseSlideshow_1() {
    clearInterval(slideInterval_1);
};


function nextSlide_1() {
    goToSlide_1(currentSlide + 1, currentIndicator + 1);
};

function previousSlide_1() {
    goToSlide_1(currentSlide - 1, currentIndicator - 1);
};

function goToSlide_1(n, m) {
    slides[currentSlide].classList.add("hide");
    indicators[currentIndicator].classList.remove("indicator-current");
    currentSlide = (currentSlide + 1) % slides.length;
    currentIndicator = (currentIndicator + 1) % indicators.length;
    slides[currentSlide].classList.remove("hide");
    indicators[currentIndicator].classList.add("indicator-current");
};

buttonNext.addEventListener("click", function () {
    pauseSlideshow_1();
    nextSlide_1();
});

buttonPrevious.addEventListener("click", function () {
    pauseSlideshow_1();
    previousSlide_1();
});

buttonDelivery.addEventListener("click", function(){
    pauseSlideshow();
    buttonDelivery.classList.add("button-services-current");
    buttonWarranty.classList.remove("button-services-current");
    buttonCredit.classList.remove("button-services-current");
    servicesContentDelivery.classList.remove("hide");
    servicesContentWarranty.classList.add("hide");
    servicesContentCredit.classList.add("hide");
});

buttonWarranty.addEventListener("click", function(){
    pauseSlideshow();
    buttonDelivery.classList.remove("button-services-current");
    buttonWarranty.classList.add("button-services-current");
    buttonCredit.classList.remove("button-services-current");
    servicesContentDelivery.classList.add("hide");
    servicesContentWarranty.classList.remove("hide");
    servicesContentCredit.classList.add("hide");
});

buttonCredit.addEventListener("click", function(){
    pauseSlideshow();
    buttonDelivery.classList.remove("button-services-current");
    buttonWarranty.classList.remove("button-services-current");
    buttonCredit.classList.add("button-services-current");
    servicesContentDelivery.classList.add("hide");
    servicesContentWarranty.classList.add("hide");
    servicesContentCredit.classList.remove("hide");
});