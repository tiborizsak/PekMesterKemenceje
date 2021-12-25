//Recursive gradual opacity modification of bg item.

function bgOpacity(){
    let opacitystep = 0.1;
    let opacity = 0.9;
    (function theloop(i) {
        setTimeout(function() {
            opacity = parseFloat(opacity - opacitystep).toFixed(1);
            //alert(opacity);
            document.getElementById("bg").style.opacity = opacity;                
            if (--i) theloop(i);
        }, 70) //timeout length
        })(7); //number of iterations
}
    //for(i=0; i <= 9; i++){
        //opacity = parseFloat(opacity - opacitystep).toFixed(1);
        //alert(opacity);
        //document.getElementById("bg").style.opacity = opacity;
    //}

    //setTimeout(function(){document.getElementById("bg").style.opacity = opacity;}, 5000);

    //alert(opacity);
