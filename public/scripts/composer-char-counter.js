/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // --- our code goes here ---
  $('#tweet-text').bind("keypress ", function()  {
    let tweetLength = (this.value).length + 1;
    let remainingLetters = 140 - tweetLength

    $(this).parent().find('div').find('output').html(remainingLetters)
  })

});