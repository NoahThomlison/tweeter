/*
 * Time ago functionality here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// $(document).ready(function() {
const timeAgo = () => {
  // --- our code goes here ---
  // let currentTime = timeago.format(new Date());
  let currentTime = timeago.format(Date.now() - 60 * 1000)

  console.log(currentTime)
  $(".ageOfTweet").html(currentTime)
}

module.exports = timeAgo;

// });

