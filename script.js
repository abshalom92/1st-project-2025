   
    //Turn the result to immutable/unchangeable 
    // so that users cannot accidentally delete/backspace on their results.
//i'mma let you finish in a min....but 
//Rihanna had the best album of the year.
//idea: maube eventually making this into a multi
// mode calculator, scientific, graphic, etc.... with more buttons. 

    const display = document.getElementById("calculator-screen");

function appendToDisplay(input){
    display.value += input;
}

function toggleNegativeVal(){
    display.value *= -1;
}

function backSpaceBtn(){
    let word = `${display.value}` 
    display.value = word.slice(0,word.length-1) ;
    
}

function calculate(input){
    try{
        display.value = eval(display.value);
    }

    catch{
    display.value ="error";    
    }
    
    
}

function clearCalcDisplay(){
    display.value = "";
}
