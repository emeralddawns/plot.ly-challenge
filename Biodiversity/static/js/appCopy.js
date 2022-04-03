function init() {
  var dropdownMenu = d3.select("#selDataset");
    d3.json("samples.json").then(data => {
        console.log("read samples");
        console.log(data);

        sampleID = data.names

        sampleID.forEach((i)=>{dropdownMenu.append("option").text(i).property("value")

        })
        // verify all the data that is called later
        console.log(data.metadata[0].age);
        console.log(data.metadata[0].wfreq);
        console.log(data.samples[0].sample_values);
        console.log(data.samples[0].otu_ids);
        console.log(data.samples[0].otu_labels);

        demographics(sampleID[0]);
        bar(sampleID[0]);

    })};
init();
function demographics(userInput) {
    d3.json("samples.json").then(data => {
        console.log("read samples");
        console.log(data);

        meta = data.metadata
        chosen = meta.filter((record)=>record.id == userInput)
        firstID = chosen[0]
        var metaBox = d3.select("#sample-metadata")
        Object.entries(firstID).forEach(([key, value])=>{metaBox.append("option").text(`${key}: ${value}`)
    })
    })
};

function bar (userInput){
  d3.json("samples.json").then(data => {

    barSamples = data.samples;
    chosen = barSamples.filter((record)=>record.id == userInput);
    firstID = chosen[0];

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



// // Call updatePlotly() when a change takes place to the DOM
// d3.selectAll("#selDataset").on("change", optionChanged);

// // This function is called when a dropdown menu item is selected
// function optionChanged(value) {
//     // Use D3 to select the dropdown menu
//     var dropdownMenu = d3.select("#selDataset");
//     // Assign the value of the dropdown menu option to a variable
//     var dataset = dropdownMenu.property("value");
    

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
