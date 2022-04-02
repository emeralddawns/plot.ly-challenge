fetch("C:/Users/emera/Documents/GitHub/plotly-challenge/Biodiversity/samples.json")
.then(response => {
   return response.json();
})
.then(jsondata => console.log(jsondata));