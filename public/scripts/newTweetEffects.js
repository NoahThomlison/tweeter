/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  let isTweetBoxDown = false
  $('.arrow').on('click', function (){
    if (!isTweetBoxDown){
      $(".new-tweet").slideDown(500).css('display', 'flex')
      $('.arrow').css('transform', 'rotate(180deg')
      isTweetBoxDown = true
    }

    else if (isTweetBoxDown){
      $(".new-tweet").slideUp(500).css('display', 'flex')
      $('.arrow').css('transform', 'rotate(0deg')
      isTweetBoxDown = false
    }
  })

  $('.arrow').on('mouseenter', function (){
    $(".arrow").removeClass('nohover')
    $(".arrow").addClass('hover')
  })

  $('.arrow').on('mouseout', function (){
    $(".arrow").removeClass('hover')
    $(".arrow").addClass('nohover')
  })
})