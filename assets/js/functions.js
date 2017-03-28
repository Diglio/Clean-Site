$(window).scroll(function(){
  var wScroll = $(window).scrollTop() / 5;

  $('.logo').css({transform: 'rotate(' + wScroll + 'deg)'});
});
