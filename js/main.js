$(document).ready(function () {
  
  //Slider -----------------------------------------

  //settings
  var width = $('.slide').width();
  var animationSpeed = 1000;
  var pause = 3000;
  var interval;

  //dom
  $('.slides li').width(width);
  $('.slides').width(width * $('.slides li').length);
  $('.slides').css('left', -width);
  $('.slides li:last-child').prependTo('.slides');

  //move slides forward
  function nextSlide() {
    $('.slides').animate({
      'margin-left': -width
    }, animationSpeed, function () {
      $('.slides li:first-child').appendTo('.slides');
      $('.slides').css('margin-left', 0);
    });
  }

  //move slides backwards
  function prevSlide() {
    $('.slides').animate({
      'margin-left': width
    }, animationSpeed, function () {
      $('.slides li:last-child').prependTo('.slides');
      $('.slides').css('margin-left', 0);
    });
  }

  //controls
  $('.next').click(nextSlide);
  $('.prev').click(prevSlide);

  // auto scroll
  function autoScroll() {
    interval = setInterval(nextSlide, pause);
  }
  autoScroll()
  function stopSlider() {
    clearInterval(interval)
  }

  $('.slider-container').on('mouseenter', stopSlider)
                        .on('mouseleave', autoScroll)




  //Slider-2 -----------------------------------------

  //settings
  var w = $('.slide-2').width();
  var int;

  $('.slides-2 li').width(w);
  $('.slides-2').width(w * $('.slides-2 li').length);
  $('.slides-2').css('left', -w);
  $('.slides-2 li:last-child').prependTo('.slides-2');

  function autoSlide() {
    int = setInterval(function () {
      $('.slides-2').animate({
        'margin-left': -w
      }, 800, function () {
        $('.slides-2 li:first-child').appendTo('.slides-2');
        $('.slides-2').css('margin-left', 0);
      });
    }, 2000);
  }

  autoSlide()

  function clear() {
    clearInterval(int)
  }

  $('.slider-container-2').on('mouseenter', clear)
                          .on('mouseleave', autoSlide)
});