#Using Public API for Beginners

##If I were to make a weather app/widget, I would first code in HTML with the basic layout:

This will contain our forecast:
<div class="weather-container">
    then the image icon:
    <img class="icon">
    Then other components in our app:
    <p class="weather"></p>
    <p class="temp"></p>
</div>

##Now for the JavaScript:

Using jQuery, we can get the json file with the following:

$.getJSON("URL GOES HERE with API KEY", function(data){
    console.log(data)
});