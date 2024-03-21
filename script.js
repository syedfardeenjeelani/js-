// 'https://jacintodesign.github.io/quotes-api/data/quotes.json'

const newQuote = document.querySelector(".new-quote");
let Quote = document.getElementById("quote");
let author = document.getElementById("author");
let twitterBtn = document.getElementById("twitter");
let apiQuotes = [];

const newQuotee = function () {
  const quoteF = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quoteF);
  Quote.textContent = quoteF.text;
  author.textContent = quoteF.author;
};

async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const data = await fetch(apiUrl);
    apiQuotes = await data.json();
    newQuotee();
    console.log(apiQuotes);
  } catch (error) {}
}

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`;
  window.open(twitterUrl, "_blank");
}

twitterBtn.addEventListener("click", () => {
  tweetQuote();
});

newQuote.addEventListener("click", () => {
  getQuotes();
});

// https://twitter.com/intent/tweet
