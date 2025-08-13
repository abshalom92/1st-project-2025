//functions to define: 
// appendToDisplay, toggleNegativeVal, calculate, clearCalcDisplay

const display = document.getElementById("calculator-screen");

function appendToDisplay(input){
    display.value += input;
}

function toggleNegativeVal(input){

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
