/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$('.arrow').on('click', function (){
  $(".new-tweet").slideDown(500).css('display', 'flex')
})

$('.arrow').on('mouseenter', function (){
  $(".arrow").removeClass('nohover')
  $(".arrow").addClass('hover')
})

$('.arrow').on('mouseout', function (){
  $(".arrow").removeClass('hover')
  $(".arrow").addClass('nohover')
})
