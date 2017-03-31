//Window Scroll Function
$(window).scroll(function(){
  //Rotates Logo based on scrollTop()
  var wScroll = $(window).scrollTop() / 5;
  $('.logo').css({transform: 'rotate(' + wScroll + 'deg)'});
});

//Navigation Icon on active
$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass('active');
    $(this).addClass('active');
  });
//Toggle Rotate for Technologies Section
  $('.htmlContainer h2').click(function(){
    $('.htmlContainer p').toggleClass('isClicked');
  });
  $('.cssContainer h2').click(function(){
    $('.cssContainer p').toggleClass('isClicked');
  });
  $('.javaScriptContainer h2').click(function(){
    $('.javaScriptContainer p').toggleClass('isClicked');
  });
});

//smooth-scroll for all navigation items
$('li a[href="#about"]').click(function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
  return false;
});
$('li a[href="#technologies"]').click(function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('.technologies').offset().top - 100
  }, 1000);
  return false;
});
$('li a[href="#portfolio"]').click(function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('.portfolio').offset().top - 100
  }, 1000);
  return false;
});
$('li a[href="#production"]').click(function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('.production').offset().top - 100
  }, 1000);
  return false;
});
$('li a[href="#setup"]').click(function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('.setup').offset().top - 100
  }, 1000);
  return false;
});
$('li a[href="#contact"]').click(function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('.contact').offset().top - 100
  }, 1000);
  return false;
});
