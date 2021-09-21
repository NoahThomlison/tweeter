/*
 * Time ago functionality here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // --- our code goes here ---
  let currentTime = timeago.format(new Date());
  $(".ageOfTweet").html(currentTime)
});

