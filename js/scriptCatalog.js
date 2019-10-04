var cartForm = document.querySelector(".modal-cart");
var buttonBuy = document.querySelectorAll(".button-buy");
var buttonCart = document.querySelector(".button-cart");
var close_cartForm = cartForm.querySelector(".button-close");
var continueShopping = cartForm.querySelector(".button-continueShopping");
var buttonToBookmarks = document.querySelectorAll(".button-to-bookmarks");
var buttonBookmark = document.querySelector(".button-bookmark");
var buttonModalCheckout = cartForm.querySelector(".button-modal-checkout");

console.log(buttonBuy.length);

for(var i = 0; i < buttonBuy.length; i++) {
    buttonBuy[i].addEventListener("click", function(evt) {
        event.preventDefault();
        cartForm.classList.remove("hide");
        buttonCart.classList.remove("empty");
    });
};

close_cartForm.addEventListener("click", function(){
    cartForm.classList.add("hide");
});

continueShopping.addEventListener("click", function(){
    cartForm.classList.add("hide");
});

buttonModalCheckout.addEventListener("click", function(){
    cartForm.classList.add("hide");
});

for(var i = 0; i < buttonToBookmarks.length; i++) {
    buttonToBookmarks[i].addEventListener("click", function() {
       buttonBookmark.classList.remove("empty");
    });

};