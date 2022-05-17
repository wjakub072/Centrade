$(document).ready(function(){
    myVar = setTimeout(showPage, 3000);
}); 

function showPage() {
    document.getElementById("spin").style.display = "none";
    document.getElementById("information").style.display = "block";
}