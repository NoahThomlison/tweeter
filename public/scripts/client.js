/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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
    <p class='oldTweetText'>${tweetData.content.text}</p>
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

const loadTweets = () => {
  $.get("/tweets", function(data, status){
    renderTweets(data);
  })
}

$("#newTweetForm").submit(function(event) {
  const formInfo = $(this).serialize()
  event.preventDefault();
  $.ajax("/tweets", { method: 'post', data: formInfo});
});  

loadTweets()

