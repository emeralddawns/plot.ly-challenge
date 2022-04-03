function init() {
    d3.json("samples.json").then(data => {
        console.log("read samples");
        console.log(data);

        // try to read in all the data that is called later
        console.log(data.metadata[0].age);
        console.log(data.metadata[0].wfreq);
        console.log(data.samples[0].sample_values);
        console.log(data.samples[0].otu_ids);
        console.log(data.samples[0].otu_labels);

        // testBar should only display top 10, needs labels
        let testBar = [{
            type: "bar",
            x: data.samples[0].sample_values,
            y: data.samples[0].otu_ids,
            text: data.samples[0].otu_labels,
            orientation: 'h'
        }];
        
          Plotly.newPlot("bar", testBar);

        // testGauge
        let testGauge = [{


        }];

        Plotly.newPlot("gauge", data);

        //testBubble needs labels
        let testBubble = [{
            x: data.samples[0].otu_ids,
            y: data.samples[0].sample_values,
            text: data.samples[0].otu_labels,            
            mode: 'markers',
            marker: {
              color: data.samples[0].otu_ids,
              size: data.samples[0].sample_values
            }

        }];

            Plotly.newPlot("bubble", testBubble);



         landingTable = data.metadata   
         Plotly.newPlot("sample-metadata", landingTable);
    });

}



// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", optionChanged);

// This function is called when a dropdown menu item is selected
function optionChanged(value) {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
    

    // PLACEHOLDER: Replace with real charts and data

    // Initialize x and y arrays
    var x = [];
    var y = [];

    if (dataset === '940') {
        x = [1, 2, 3, 4, 5];
        y = [1, 2, 4, 8, 16];
      }
    
      else if (dataset === '941') {
        x = [10, 20, 30, 40, 50];
        y = [1, 10, 100, 1000, 10000];
      }

    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("bar", "x", [x]);
    Plotly.restyle("bar", "y", [y]);


    console.log(value);
}
    
init();