/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // --- our code goes here ---
  $('#tweet-text').bind("keypress ", function()  {
    let tweetLength = (this.value).length + 1;
    console.log(140 - tweetLength)
    console.log(this)
  })

});