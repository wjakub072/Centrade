$(document).ready(function () {
    console.log("documentReady")
    $("#instructionSlide").hide();
}); 

function showPreview(){
    console.log("showing");
    $("#instructionSlide").animate({width:'toggle'},350);
}

function hidePreview(){
    console.log("hiding");
    $("#instructionSlide").hide();
}

function validateNumber(){
    console.log("validatingNumber");

    let element = document.getElementById("number");
    let number = element.value;

    console.log("Number to validate: " + number);

    if(!number.includes("#")){
        console.log("Number state: invalid");
        element.classList.add("is-invalid");
    } else {
        if(number.length > 6){
            console.log("Number state: no longer invalid")
            element.classList.remove("is-invalid");
        } else{
            
            console.log("Number state: invalid due to lenght " + number.length);
            element.classList.add("is-invalid");
        }
    }
}

function validatePassword(){
    console.log("validatingPassword");

    let element = document.getElementById("password");
    let number = element.value;

    if(number.length < 8){
        console.log("Password state: invalid");
        element.classList.add("is-invalid");
    } else {
        element.classList.remove("is-invalid");
    }
}