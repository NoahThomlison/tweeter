/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  const createTweetElement = (tweetData) => {
    const htmlTweetMarkup = `
    <article class="oldTweets">
      <header>
        <div class='user'>
          <div class='userPicandUsername'>
            <img class='tweetProfile' src="${tweetData.user.avatars}">
            <p>${tweetData.user.name}</p>
          </div>
          <div class='userEmailHandle'>
            <p>${tweetData.user.handle}</p>
          </div>
        </div>
      </header>
      <p class='oldTweetText'>${escape(tweetData.content.text)}</p>
      <footer class="oldTweetsFooter">
        <p class='ageOfTweet'>${tweetData.created_at}</p>
        <div class="iconContainer">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </article>`
    return htmlTweetMarkup
  }

  const renderTweets = (tweets) => {
    tweets.forEach(tweet => {
      tweetToRender = createTweetElement(tweet)
      $('#tweets-container').append(tweetToRender);
    });
  }

  const renderNewTweet = () => {
    $.get("/tweets", function(data, status){
      //get latest element in data array of tweets
      let newTweetData = createTweetElement(data[data.length-1])

      //prepend new tweet and clear form
      $('#tweets-container').prepend(newTweetData)
      $('#tweet-text').val('')
    })
  }

  const loadTweets = () => {
    $.get("/tweets", function(data, status){
      renderTweets(data);
    })
  }

  $("#newTweetForm").submit(function(event) {
    const formInfo = $('#tweet-text').serialize()
    event.preventDefault();

    if(formInfo.slice(5) === "") {
      $('.errorMessage').html('Your tweet is empty')
      $('.errorBox').slideDown(500)
      return} else if
      (($('.counter').val() <= 0)){
      $('.errorMessage').html('Your tweet is too long')
      $('.errorBox').slideDown(500)
      return
    }

    //send data from form to the server
    $.ajax("/tweets", { method: 'post', data: formInfo});
    $('.errorMessage').html('')
    $('.errorBox').slideUp()
    renderNewTweet()
  });  

  loadTweets()

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
})