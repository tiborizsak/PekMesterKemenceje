$(document).ready(function() {
    $("body").prepend('<div id="welcome"><img src="asset/img/bg_text_merged.png" alt="udvozollek"></div>');
    //$("#auto1").after('<div id="auto2">A<img src="DATA/images/auto.png" alt="a"></div>');
    
    $("#welcome").css({
        "display": "inline",
        "margin": "50px 0",
        "position": "absolute",
        "z-index": 10,

    });
    
    $("img").css({
        "max-width":"100%"
        //"max-height":"100%"
    });

    $("#welcome").animate({
        "top": 100,
        "left": 0,
    }, 1000);
    /*$("#auto2").animate({
        "left": 1000
    }, 3000);
    $("#auto3").animate({
        "rotate": 20,
        "left": 100
    }, 1800);*/

});

function myFunction(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
    } else {
      document.body.style.backgroundColor = "pink";
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
