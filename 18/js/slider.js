let toggles = Array.from(document.querySelectorAll('.slider__toggle'));
let sliderItems = Array.from(document.querySelectorAll('.slider__item'));
let pageBody = document.querySelector('.page-body');


toggles.forEach(button => {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    let activeButton = document.querySelector('.slider__toggle--current');
    activeButton.classList.remove('slider__toggle--current');
    evt.target.classList.add('slider__toggle--current');

    sliderItems.forEach(slide => {
      let activeSlide = document.querySelector('.slide--current');
      if (`${button.id}` === `for-${slide.id}`) {
        activeSlide.classList.remove('slide--current');
        slide.classList.add('slide--current');
        if (slide.id === 'slide1') {
          pageBody.classList.remove('page-body--wrapper-green');
          pageBody.classList.remove('page-body--wrapper-blue');
          pageBody.classList.remove('page-body--wrapper-brown');
          pageBody.classList.add('page-body--wrapper-green');
        }
        if (slide.id === 'slide2') {
          pageBody.classList.remove('page-body--wrapper-green');
          pageBody.classList.remove('page-body--wrapper-blue');
          pageBody.classList.remove('page-body--wrapper-brown');
          pageBody.classList.add('page-body--wrapper-blue');
        }
        if (slide.id === 'slide3') {
          pageBody.classList.remove('page-body--wrapper-green');
          pageBody.classList.remove('page-body--wrapper-blue');
          pageBody.classList.remove('page-body--wrapper-brown');
          pageBody.classList.add('page-body--wrapper-brown');
        }
      }
    });
  })
});
