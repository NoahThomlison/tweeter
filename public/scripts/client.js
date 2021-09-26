/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  //function which creates the html markup
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

  //function which renders inital tweets from the database
  const renderTweets = (tweets) => {
    tweets.forEach(tweet => {
      tweet.created_at = timeAgo(tweet)
      tweetToRender = createTweetElement(tweet)
      $('#tweets-container').prepend(tweetToRender);
    });
  }

  //function which creates new tweets
  const renderNewTweet = () => {

    $.ajax('/tweets', { method: 'GET'})
    .then(function (data) {
      let newTweetData = (data[data.length-1])
      newTweetData.created_at = timeAgo(newTweetData)
      let newTweet = createTweetElement(newTweetData)

      //add new tweet and clear form
      $('.new-tweet').after(newTweet)
      $('#tweet-text').val('')
    });
  }

  //function which loads the tweets from the server
  const loadTweets = () => {
    $.get("/tweets", function(data, status){
      renderTweets(data);
    })
  }

  //function which catches user input on the form, posts form, and catches errors for empty or too long tweets
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

  //function which ensures no escape characters are inputted
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //function which shows how long ago a tweet was made
  const timeAgo = (tweet) => {
    let createdTime = (timeago.format(tweet.created_at))
    return(createdTime)
  }

  loadTweets()

})
