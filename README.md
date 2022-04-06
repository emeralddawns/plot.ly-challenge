# plotly-challenge
This assignment consisted of using JavaScript, json, and html to build an interactive dashboard.

# What the code does (in general terms)
The code uses json information on Belly Button Biodiversity from [The Public Science Lab](http://robdunnlab.com/projects/belly-button-biodiversity/).

# What the code collects

The **mission_to_mars.ipynb** code uses Splinter, BeautifulSoup, and Pandas to collect the following:
    
    1. The title and teaser text of the latest news from https://redplanetscience.com/.

    2. The featured image from https://spaceimages-mars.com.

    3. A table containing Mars facts from https://galaxyfacts-mars.com.

    4. The images and titles of the four (4) mars hemispheres from https://marshemispheres.com/.

The **app.py** and **scrape_mars.py** code uses MongoDB with Flask templating to collect the same information as above, and uses **index.html**, **style.css**, and Bootstrap 5 to create a webpage displaying the information.

A screenshot of the webpage can be seen below:
![Mars_Info_Scraper.png](Mars_Info_Scraper.png)