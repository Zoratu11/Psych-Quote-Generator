//Declare all of the quotes that we will need
//9 should be more than enough for this project
const quotesArray = [
  {
    string: "\"I can't watch Channel 8 anymore. Lloyd Lansing wears a toupee. It's like every newscast begins with a lie.\"",
    author: "-Shawn Spencer"
  },
  {
    string: "\"Don't be the American version of the British TV, Gus.\"",
    author: "-Shawn Spencer"
  },
  {
    string: "\"If this is some sort of hazing activity where I end up naked in a river somewhere I'm gonna need to arrange for a ride home.\"",
    author: "-Shawn Spencer"
  },
  {
    string: "\"Gus, don't be exactly half of an 11 pound black forest ham.\"",
    author: "-Shawn Spencer"
  },
  {
    string: "\"You know that's right!\"",
    author: "-Burton \"Gus\" Guster"
  },
  {
    string: "\"How can you tell that someone's a compulsive liar? I mean, assuming that their pants aren't on fire.\"",
    author: "-Shawn Spencer"
  },
  {
    string: "\"Remember, you treat a woman like a person, then a princess, then a goddess, then a person again.\"",
    author: "-Shawn Spencer"
  },
  {
    string: "\"You hear about Pluto? That's messed up, right?\"",
    author: "-Burton \"Gus\" Guster"
  },
  {
    string: "\"I've heard it both ways.\"",
    author: "-Shawn Spencer"
  }
];

let usedQuotesArray = [];

let quote;

window.onload = function() {
  const quoteElement = document.getElementById("quote");
  const getQuoteButton = document.getElementById("getQuoteButton");
  const authorElement = document.getElementById("author");
  
  getQuoteButton.addEventListener("click", function() {
    quote = getRandomQuote(quotesArray, usedQuotesArray);
    quoteElement.innerHTML = quote.string;
    authorElement.innerHTML = quote.author;
  });
  
  let twitterButton = document.getElementById("twitterLink");
  
  twitterButton.addEventListener("click", function() {
    twitterButton.href = "https://twitter.com/intent/tweet?text=" + quote.string;
  });
 
}

//Returns a random quote from the quotesArray
function getRandomQuote(quotes, usedQuotes) {
  if(usedQuotes.length == 9) {
    usedQuotes.length = 0;
  }
  let randomNumber = Math.floor(Math.random() * 9);
  while(usedQuotes.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * 9);
  }
  usedQuotes.push(randomNumber);
    console.log(usedQuotes);
  return quotes[randomNumber];
}

