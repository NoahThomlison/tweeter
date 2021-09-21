/*
 * Logic for up button goes here
 */

$(document).ready(function() {
  // --- our code goes here ---  
  $('#scrollButton').on('click', () => {
    $(window).scrollTop(0)
  })

  $(window).scroll(function() {
    if(($(window).height() + $(window).scrollTop()) > 1500){
      $('#scrollButton').css('display', 'inline')}
    else($('#scrollButton').css('display', 'none'))

  });
  
});

