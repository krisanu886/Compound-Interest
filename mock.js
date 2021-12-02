var principal = document.getElementById("principal");
var roi = document.getElementById("roi");
var years = document.getElementById("years");
var output_span = document.getElementById("output_span");


function count(){
    p = parseFloat(principal.value);
    r = parseFloat(roi.value);
    t = parseFloat(years.value);
    ci = p*(Math.pow((1+r/100),t));
    output_span.innerHTML = ci;
}

function resetAll(){
    var a = document.getElementById("principal");
    var b = document.getElementById("roi");
    var c = document.getElementById("years");
    var d = document.getElementById("output_span");
    

    a.value = " ";
    b.value = " ";
    c.value = " ";
    d.value = " ";
}