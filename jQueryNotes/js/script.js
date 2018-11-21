// script.js

$(function() {

    // Syntax
    // $("SELECT ELEMENT/CLASS/ID").'whatever method'();
    // $('#box').hide();  hides elements by ID
    // $('.thing').fadeOut(); fade out effect by class
    // $('h1').css("color","blue"); can change out certain css elements
    
    $("button").click(function() {
       $('#box').fadeOut(1000);
    }); 
    
    

});


// http://api.jquery.com