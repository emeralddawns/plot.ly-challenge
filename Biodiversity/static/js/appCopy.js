function init() {
  var dropdownMenu = d3.select("#selDataset");
    d3.json("samples.json").then(data => {

        // Fill out dropdown menu
        sampleID = data.names
        //for each loop... for each i in the list found in data.names (aka sampleID), append the value (ex: 940), as text, to the bottom of the "options" in the dropdown list
        sampleID.forEach((i)=>{dropdownMenu.append("option").text(i).property("value")
        })

        demographics(sampleID[0]);
        charts(sampleID[0]);

    })};

init();

function demographics(userInput) {
    d3.json("samples.json").then(data => {

        // The demographics info is in data.metadata
        // meta is the list of all metadata dictionaries
        meta = data.metadata

        //filter... within meta (aka data.metadata) match record.ID (record is a single dictionary in the metadata list of dictionaries) to the userInput
        //selected is a single selected record (dictionary)
        selected = meta.filter((record)=>record.id == userInput);
        
        //firstID is
        firstID = selected[0];
        console.log(typeof firstID);

        var metaBox = d3.select("#sample-metadata");
        // metaBox.selectAll("*").remove();


        //A json dictionary is a js object. Object.entries() "returns an array of a given object's own enumerable string-keyed property [key, value] pairs".
        // select the div with id(#) "sample-metadata" (aka metaBox) and append the key: value pairs in the given text format
        Object.entries(firstID).forEach(([key, value])=>{metaBox.append("option").text(`${key}: ${value}`);
    })
    })
};

function charts (userInput){
  d3.json("samples.json").then(data => {

    barSamples = data.samples;
    selected = barSamples.filter((record)=>record.id == userInput);
    firstID = selected[0];

    let testBar = [{
        type: "bar",
        x: firstID.sample_values.slice(0,10).reverse(),
        y: firstID.otu_ids.map(j=>`otu ${j}`).slice(0,10).reverse(),
        text: firstID.otu_labels.slice(0,10).reverse(),
        orientation: 'h'
    }];
    Plotly.newPlot("bar", testBar);







  }
  )};
        // // testBar should only display top 10, needs labels
        // let testBar = [{
        //     type: "bar",
        //     x: data.samples[0].sample_values,
        //     y: data.samples[0].otu_ids,
        //     text: data.samples[0].otu_labels,
        //     orientation: 'h'
        // }];
        
        //   Plotly.newPlot("bar", testBar);






        // // testGauge
        // let testGauge = [{
        //   domain: { x: [0, 1], y: [0, 1] },
        //   value: data.metadata[0].wfreq,
        //   title: { text: "Wash Frequency" },
        //   type: "indicator",
        //   mode: "gauge+number",
        //   gauge: {
        //     axis: { range: [null, 9] },
        //     steps: [
        //       { range: [0, 5], color: "lightgray" },
        //       { range: [5, 9], color: "gray" }
        //     ]}

        // }];

        // Plotly.newPlot("gauge", testGauge);

        // //testBubble needs labels
        // let testBubble = [{
        //     x: data.samples[0].otu_ids,
        //     y: data.samples[0].sample_values,
        //     text: data.samples[0].otu_labels,            
        //     mode: 'markers',
        //     marker: {
        //       color: data.samples[0].otu_ids,
        //       size: data.samples[0].sample_values
        //     }

        // }];

        //     Plotly.newPlot("bubble", testBubble);



        //  landingTable = data.metadata   
        //  Plotly.newPlot("sample-metadata", landingTable);
    // });

// }



// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", optionChanged);

// This function is called when a dropdown menu item is selected
function optionChanged(value) {
    // Use D3 to select the dropdown menu
    // var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    // var dataset = dropdownMenu.property("value");
    demographics(value);
    charts(value);

};

//     // PLACEHOLDER: Replace with real charts and data

//     // Initialize x and y arrays
//     var x = [];
//     var y = [];

//     if (dataset === '940') {
//         x = [1, 2, 3, 4, 5];
//         y = [1, 2, 4, 8, 16];
//       }
    
//       else if (dataset === '941') {
//         x = [10, 20, 30, 40, 50];
//         y = [1, 10, 100, 1000, 10000];
//       }

//     // Note the extra brackets around 'x' and 'y'
//     Plotly.restyle("bar", "x", [x]);
//     Plotly.restyle("bar", "y", [y]);


//     console.log(value);
