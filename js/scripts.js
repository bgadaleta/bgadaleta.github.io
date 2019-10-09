var addLaptop = function() {
  console.log('addLaptop fired')
  $('#laptop-text').removeClass('hidden').addClass('animated slideInLeft wow');
}
var removeLaptop = function() {
  console.log('removeLaptop fired')
  $('#laptop-text').removeClass('animated SlideInLeft wow').addClass('animated slideOutRightMore wow');
  setTimeout(function() {
    $('#laptop-text').removeClass('animated slideOutRightMore wow').addClass('hidden')
}, 1000);
}

var addTablet = function() {
  console.log('addTablet fired')
  $('#tablet-text').removeClass('hidden').addClass('animated slideInLeft wow');
}
var removeTablet = function() {
  console.log('removeTablet fired')
  $('#tablet-text').removeClass('animated SlideInLeft wow').addClass('animated slideOutRightMore wow');
  setTimeout(function() {
    $('#tablet-text').removeClass('animated slideOutRightMore wow').addClass('hidden')
}, 1000);
}

var addPhone = function() {
  console.log('addPhone fired')
  $('#phone-text').removeClass('hidden').addClass('animated slideInLeft wow');
}
var removePhone = function() {
  console.log('removePhone fired')
  $('#phone-text').removeClass('animated SlideInLeft wow').addClass('animated slideOutRightMore wow');
  setTimeout(function() {
    $('#phone-text').removeClass('animated slideOutRightMore wow').addClass('hidden')
}, 1000);
}
