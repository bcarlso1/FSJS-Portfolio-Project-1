/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


  
/*** 
 * `quotes` array - 5 Yogi Berra quotes
***/

var quotes = [
  {
    quote: "The future ain't what it used to be",
    source: "Yogi Berra"
  },
  {
    quote: "It gets late early out here",
    source: "Yogi Berra"
  },
  {
    quote: "It ain't over till it's over",
    source: "Yogi Berra"
  },
  {
    quote: "Ninety percent of this game is half mental",
    source: "Yogi Berra",
    citation: "Sports Illustrated",
    year: 1979
  },
  {
    quote: "You can observe a lot just by watching",
    source: "Yogi Berra",
    comedy: "Observational Humor"
  }
]

console.log(quotes);

/* ****************************
Colors array
****************** */
var colors = ["#50BFE6", "#FF00CC", "#FFCC33", "#FF6EFF", "#FF6037"]



/***
 * `getRandomQuote` function - Random Number 0-4
***/
var randomNumber;

function getRandomQuote() {
  randomNumber = Math.floor(Math.random() * 5);
}

getRandomQuote();

/***
 * `printQuote` function - generate string from quote object
***/

var htmlString;

function printQuote() {
  getRandomQuote() 
  randomQuote = quotes[randomNumber];
    htmlString = 
    '<p class="quote">' + randomQuote.quote + '</p>' +
    '<p class="source">' + randomQuote.source;
  if (randomQuote.citation) {
     htmlString += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year) {
    htmlString += '<span class="year">' + randomQuote.year + '</span>';
  }
  if (randomQuote.comedy) {
    htmlString += '<p class="comedy"><em>Filed under: </em>' + randomQuote.comedy + '</p>';
  }
  htmlString +=  ' </p>';


  document.getElementById('quote-box').innerHTML = htmlString;

  getRandomQuote(); 
  document.body.style.backgroundColor = colors[randomNumber];
}

/* *********
set initial quote
********** */

window.onload = printQuote();


/* ****************************
Automatic new quote every 10 s
****************** */

setInterval(printQuote, 5000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

 document.getElementById('load-quote').addEventListener("click", printQuote, false);