$(document).ready(function(){
    $("#phoneRow").hide();
    $("#fileRow").hide();
    $("#faultRow").hide();
}); 

function numberNewSelection(){
    let value = $("#phone").val();
    console.log("Value: " + value);
    if(value == 1){
        $("#phoneRow").hide();
    } else if(value == 2){
        $("#phoneRow").show();
    }
}

function validatePhoneNumber(){
    console.log("validatingPhoneNumber");

    let element = $("#phoneNumber")
    let number = element.val();

    console.log("Number to validate: " + number);

    if(isNaN(number)){
        console.log("Number state: invalid");
        element.addClass("is-invalid");
    } else {
        if(number.length < 10){
            console.log("Number state: no longer invalid")
            element.removeClass("is-invalid");
        } else{
            console.log("Number state: invalid due to lenght " + number.length);
            element.addClass("is-invalid");
        }
    }
}

function onTypeChange(){   
    if($('input[id="AC"]:checked').val()){
        console.log("AC checked.");
        $("#faultRow").show();
        $("#fileRow").hide();
        $("#fileLabel").text("Skan oświadczenia o winie:")


    } else if($('input[id="OC"]:checked').val()){
        console.log("OC checked.");
        $("#faultRow").hide();
        $("#fileRow").hide();

    } else if($('input[id="steal"]:checked').val()){
        console.log("Steal checked.");
        $("#faultRow").hide();
        $("#fileRow").show();
        $("#fileLabel").text("Skan oględzin policji:")

    }
}

function onCheck(){
    console.log($('#faultCheckbox').is(":checked"));
    if($('#faultCheckbox').is(":checked")){
        $("#fileRow").show();
    } else {
        $("#fileRow").hide();
    }
}