function addition(){
    retrieveInformation();
    // Assiging variables for the addition operation
    sum= number1 + number2;// adding numbers
    document.getElementById("Result").innerHTML ="Sum= "+sum;

}

function subtraction(){
    retrieveInformation();
    // Assiging variables for the subtraction operation
    sub= number1 - number2;// subtracting number2 1 and number2
    document.getElementById("Result").innerHTML ="Sub= "+sub;

}

function multiplication(){
    retrieveInformation();
    // Assiging variables for the multiplcation operation
    multi= number1 * number2;// Multiplying number2 1 and number2
    document.getElementById("Result").innerHTML ="Multi= "+multi;

}





function division(){
    retrieveInformation();
    // Assiging variables for the Division operation
    div= number1 / number2;// Dividing number1  and number2
    document.getElementById("Result").innerHTML ="Div= "+div;

}

function retrieveInformation(){ //gets results and displays them
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    number1 = parseInt(number1);
    number2 = parseInt(number2);
}