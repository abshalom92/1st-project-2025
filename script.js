   
    //Turn the result to immutable/unchangeable 
    // so that users cannot accidentally delete/backspace on their results.
//i'mma let you finish in a min....but 
//Rihanna had the best album of the year.
//idea: maube eventually making this into a multi
// mode calculator, scientific, graphic, etc.... with more buttons. testing
// add random picture generator, that pulls a meme/picture from the web and displays it
// if flick off gorilla appears, then add gorilla icon that summons more gorillas. The second click brings bananas. 

    const display = document.getElementById("calculator-screen");

function appendToDisplay(input){
    display.value += input;
    gorillaBtn();
}

function toggleNegativeVal(){
    display.value *= -1;
}

function backSpaceBtn(){
    let word = `${display.value}` 
    display.value = word.slice(0,word.length-1);
    display.value = Number(display.value)
    gorillaBtn();
    
}

function calculate(input){
    try{
        display.value = eval(display.value);
    }

    catch{
    display.value ="error";    
    }
    
    
}
let shouldShowCalc = false;

/*function hideCalcToggler(){
    shouldShowCalc = !shouldShowCalc;
    const calcu = document.getElementById("calculator");
    calcu.style.display = shouldShowCalc ? "auto" : "none";
    console.log(calcu.style.display);

    if (calcu.style.display === "none"){
        shouldShowCalc = !shouldShowCalc;
        const monke = document.getElementById("gorilla");
        monke.style.display = "inline-block";
        //shouldShowCalc ? "auto" : "none";
    }

}
*/

function clearCalcDisplay(){
    display.value = "";
    gorillaBtn();
}



function gorillaBtn(){
    
    const myButton = document.getElementsByClassName("hiddenBtn");
    //shouldShowButton = !shouldShowButton;
    if (display.value === "80085"){
        myButton.style.display = "inline-block";
        
    } else{
        myButton.style.display = "none";
    }

       /* function toggleVisibility(){
        
        myButton.style.display = shouldShowButton ? "inline-block" : "none";
    }

    toggleVisibility();*/
}

/*function notBoobs(){
    const myButton = document.getElementById("hiddenBtn");
    if (display.value == "80085"){
        
        
    } else{
        shouldShowButton = false;
    }
}*/

/*function checkFive(){
    appendToDisplay('5');
    console.log('this was hit first');

    if (display.value == "80085"){
        console.log('this was hit');
        gorillaBtn();
    } 
}*/