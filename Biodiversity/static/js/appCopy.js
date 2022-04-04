function init() {
  var dropdownMenu = d3.select("#selDataset");
    d3.json("samples.json").then(data => {

        // Fill out dropdown menu
        sampleID = data.names;
        //for each loop... for each i in the list found in data.names (aka sampleID), append the value (ex: 940), as text, to the bottom of the "options" in the dropdown list
        sampleID.forEach((i)=>{dropdownMenu.append("option").text(i).property("value");
        })

        demographics(sampleID[0]);
        charts(sampleID[0]);
        gauge(sampleID[0]);
    })};

function demographics(userInput) {
    d3.json("samples.json").then(data => {

        // The demographics info is in data.metadata
        // meta is the list of all metadata dictionaries
        meta = data.metadata;

        //filter... within meta (aka data.metadata) match record.ID (record is a single dictionary in the metadata list of dictionaries) to the userInput
        //selected is a all records (dictionaries) that match the ID of the userInput, of which there should only be one
        selected = meta.filter((record)=>record.id == userInput);

        //firstID is the first dictionary in the list of matching records, of which there should only have been one
        firstID = selected[0];

        var metaBox = d3.select("#sample-metadata");

        //A json dictionary is a js object. Object.entries() "returns an array of a given object's own enumerable string-keyed property [key, value] pairs".
        // select the div with id(#) "sample-metadata" (aka metaBox) and append the key: value pairs in the given text format
        Object.entries(firstID).forEach(([key, value])=>{metaBox.append("option").text(`${key}: ${value}`);
    })
    })
};

function charts (userInput){
  d3.json("samples.json").then(data => {

    chartSamples = data.samples;
    selected = chartSamples.filter((record)=>record.id == userInput);
    firstID = selected[0];

    //barChart needs units
    let barChart = [{
        type: "bar",
        x: firstID.sample_values.slice(0,10).reverse(),
        y: firstID.otu_ids.map(j=>`otu ${j}`).slice(0,10).reverse(),
        text: firstID.otu_labels.slice(0,10).reverse(),
        orientation: 'h'
    }];

    let barLayout = {
      title: { text: `Top 10 OTUs for Sample ${userInput}` }

    };

    Plotly.newPlot("bar", barChart, barLayout);

    //bubbleChart needs units
    let bubbleChart = [{
        x: firstID.otu_ids,
        y: firstID.sample_values,
        text: firstID.otu_labels,            
        mode: 'markers',
        marker: {
          color: firstID.otu_ids,
          colorscale: "Portland",
          size: firstID.sample_values
        }
        
    }];
    let bubbleLayout = {
      dragmode: "pan",
      title: { text: `OTU Amounts for Sample ${userInput}` },

      xaxis: {
        title: {
          text: 'OTU ID'
        }}
    }
    let bubbleConfig = {responsive: true, scrollZoom: true};

    Plotly.newPlot("bubble", bubbleChart, bubbleLayout, bubbleConfig);

  }
)};
        
function gauge (userInput){
  d3.json("samples.json").then(data => {

    gaugeInfo = data.metadata;
    selected = gaugeInfo.filter((record)=>record.id == userInput);
    firstID = selected[0];
    
    //colors from: https://hihayk.github.io/scale/#4/6/50/80/-51/67/20/14/1D9A6C/29/154/108/white
    colors = [
      "#137177",
      "#188977",
      "#1D9A6C",
      "#39A96B",
      "#56B870",
      "#74C67A",
      "#99D492",
      "#BFE1B0",
      "#DEEDCF"]

    // testGauge needs a needle, etc
    let testGauge = [{
      domain: { x: [0, 1], y: [0, 1] },
      value: firstID.wfreq,
      title: { text: `Wash Frequency` },
 
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { range: [null, 9] },
        steps: [
          { range: [0, 1], color: colors[8] },
          { range: [1, 2], color: colors[7] },
          { range: [2, 3], color: colors[6] },
          { range: [3, 4], color: colors[5] },
          { range: [4, 5], color: colors[4] },
          { range: [5, 6], color: colors[3] },
          { range: [6, 7], color: colors[2] },
          { range: [7, 8], color: colors[1] },
          { range: [8, 9], color: colors[0] },
        ]}

    }];

    Plotly.newPlot("gauge", testGauge);

  })
};

// This function is called when a dropdown menu item is selected
function optionChanged(value) {
   
    //empty the "Demographic Info" box
    var metaBox = d3.select("#sample-metadata");
    metaBox.selectAll("*").remove();

    demographics(value);
    charts(value);
    gauge(value);

};

init();