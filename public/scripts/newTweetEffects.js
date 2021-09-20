/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$('.arrow').on('click', function (){
  $(".new-tweet").slideDown(500).then($(".new-tweet").css('display', 'flex'))
})

$('.arrow').on('mouseenter', function (){
  $(".arrow").removeClass('nohover')
  $(".arrow").addClass('hover')
  // $(".arrow").css('background-color', 'blue')

  // alert('ding')
})

$('.arrow').on('mouseout', function (){
  $(".arrow").removeClass('hover')
  $(".arrow").addClass('nohover')

})

// $('.arrow').on('mouseleave', function (){
//   $(".arrow").css('color', 'white', 'width', '100%', 'height', '100%')
// })



