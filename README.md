# plotly-challenge
This assignment consisted of using JavaScript, json, and html to build an interactive dashboard.

# What the code does (in general terms)
The code uses json information on Belly Button Biodiversity from [The Public Science Lab](http://robdunnlab.com/projects/belly-button-biodiversity/).

# What the code displays

The **app.js** code uses d3, plot.ly, and **samples.json** to create 4  graphs and a drop-down list that allows users to choose between samples. The information is displayed in the following:
    
    1. A demographic information list containing the id, ethnicity, gender, age, location, bbtype, and wash frequency for the contributor of each sample.

    2. A horizontal bar chart that displays the sample values of the top ten (10) operational taxonomic units (OTUs) found in the sample.

    3. A gauge chart visually displaying the belly button wash frequency reported by the sample contributor.

    4. A bubble chart that displays the sample values of all of the OTUs.

The **index.html**, **style.css**, and Bootstrap 3 are used to create the webpage displaying the graphs and information.

A screenshot of the webpage can be seen below:
![Mars_Info_Scraper.png](Mars_Info_Scraper.png)