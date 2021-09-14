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

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like

$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.