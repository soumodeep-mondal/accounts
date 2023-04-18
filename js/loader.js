
var myVar;

function loader(){
    myVar = setTimeout(hiding, 3000);
    myVar = setTimeout(showPage,3000);
}

function showPage(){
    document.getElementById("loader-account").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

function hiding(){
    document.getElementById("loader-account").style.animation = "fadeout 4s ease";
    document.getElementById("myDiv").style.animation = "fadein 2s ease";
}