/*
 * Logic for up button goes here
 */

$(document).ready(function() {

  //if user far down show button
  $(window).scroll(function() {
    if(($(window).height() + $(window).scrollTop()) > 1500){
      $('#scrollButton').css('display', 'inline')}
    else($('#scrollButton').css('display', 'none'))
  });

  //if button clicked move to top
  $('#scrollButton').on('click', () => {
    $(window).scrollTop(0)
  })
});

