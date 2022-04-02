// fetch("https://github.com/emeralddawns/plotly-challenge/blob/main/Biodiversity/samples.json")
// .then(response => {
//    return response.json();
// })
// .then(jsondata => console.log(jsondata));

const url = "https://github.com/emeralddawns/plotly-challenge/blob/main/Biodiversity/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

