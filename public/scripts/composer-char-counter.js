/*
 * Character count functionality here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  $('#tweet-text').bind("input", function()  {
    let tweetLength = (this.value).length;
    const maxTweetLength = 140

    let remainingLetters = maxTweetLength - tweetLength

    //update the html for the current count for the letters by finding the parent item of 'this' and then finding the 'output' of that parent and changing its .html
    $(this).parent().find('.bottomRow').find('.counter').html(remainingLetters)

    //if the tweetLenght is greater than the predefined limit then find the parent item of 'this' and then find the 'output' of that parent and change its .css
    if(tweetLength >  maxTweetLength){
      $(this).parent().find('.bottomRow').find('.counter').css("color", "red")
    }
    else if (tweetLength <  maxTweetLength){
      $(this).parent().find('.bottomRow').find('.counter').css("color", "#4056A1")
    }
  })
});

