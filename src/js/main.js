var navButton = document.querySelector(".main-navigation__button");
var navList = document.querySelector(".main-navigation__list");

document.querySelector("html").classList.remove("nojs");

navButton.addEventListener("click", function () {
  navButton.classList.toggle("main-navigation__button--active");
  navList.classList.toggle("main-navigation__list--active");
});

var orderForm = document.querySelector(".order__form");

orderForm.addEventListener("change", function () {
  for (let i = 0; i < orderForm.elements.productContent.length; i++) {
    if (orderForm.elements.productContent[i].checked === true) {
      orderForm.elements.contentOutput.value = orderForm.elements.productContent[i].value;
      return;
    }
  }

  for (let i = 0; i < orderForm.elements.productSize.length; i++) {
    if (orderForm.elements.productSize[i].checked === true) {
      orderForm.elements.sizeOutput.value = orderForm.elements.productSize[i].value;
      return;
    }
  }

  for (let i = 0; i < orderForm.elements.productAppearance.length; i++) {
    if (orderForm.elements.productAppearance[i].checked === true) {
      orderForm.elements.appearanceOutput.value = orderForm.elements.productAppearance[i].value;
      return;
    }
  }
});

var contentSlider = document.querySelector(".content__slider");
var sizeSlider = document.querySelector(".size__slider");
var appearanceSlider = document.querySelector(".appearance__slider");
var reviewsSlider = document.querySelector(".reviews__slider");

var sliders = [contentSlider, sizeSlider, appearanceSlider, reviewsSlider];

var sliderControl = function (slider) {
  var sliderButtons = slider.querySelectorAll(".slider__button");
  var sliderSlides = slider.querySelectorAll(".slider__item");

  var currentSlide = 0;
  sliderSlides[currentSlide].classList.add("slider__item--show");

  var toggleSlide = function (slide) {
    for (var i = 0; i < sliderSlides.length; i++) {
      sliderSlides[i].classList.remove("slider__item--show");
    }

    slide.classList.add("slider__item--show");
  };

  var swipeControl = function (control) {
    if (control.classList.contains("slider__button--prev")) {
      currentSlide--;

      if (currentSlide < 0) {
        currentSlide = sliderSlides.length - 1;
      }

      toggleSlide(sliderSlides[currentSlide]);
    }

    if (control.classList.contains("slider__button--next")) {
      currentSlide++;

      if (currentSlide > sliderSlides.length - 1) {
        currentSlide = 0;
      }

      toggleSlide(sliderSlides[currentSlide]);
    }
  };

  for (var i = 0; i < sliderButtons.length; i++) {
    sliderButtons[i].addEventListener("click", function (evt) {
      swipeControl(evt.target);
    });
  }
};

for (let i = 0; i < sliders.length; i++) {
  sliders[i].classList.add("slider--js");
  sliderControl(sliders[i]);
}
