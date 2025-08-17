   
    //User stories yet to be fulfilled: 
    //1. Turn the result to immutable/unchangeable 
        // so that users cannot accidentally delete/backspace on their results.

    //2. idea: maybe eventually making this into a multi
        // mode calculator, scientific, graphic (when I know a little more I can come back to this project)
        // , etc.... with more buttons. testing
    //3. Add random picture generator that pulls a meme/picture from the web and displays it
        // if flick off gorilla appears, then add gorilla icon that summons more gorillas. 
        // The second click brings adds a counter of bananas icons. 

    //8/15 must get img to render conditionally in-app & add a link back when picture covers calculator. #1
    // #2 or just an X button. 

    const display = document.getElementById("calculator-screen");

function appendToDisplay(input){
    display.value += input;
    console.log();

    triggerBtnEffects();
}

function toggleNegativeVal(){
    display.value *= -1;
}

function backSpaceBtn(){
    let word = `${display.value}` 
    display.value = word.slice(0,word.length-1);
    display.value = Number(display.value)
    triggerBtnEffects();
    
}
// when I havve the number + number, that it doesn't treat it like a string. take a look at that slice function  

function calculate(input){
    try{
        display.value = eval(display.value);
    }

    catch{
    display.value ="error";    
    }
    
    
}
let shouldShowCalc = false;


function clearCalcDisplay(){
    display.value = "";
    triggerBtnEffects();
}



function triggerBtnEffects(){
    
    const myButtons = document.getElementsByClassName("hiddenBtn");
    console.log(myButtons);

    for(const button of myButtons){ 
        if (display.value === "80085"){
            button.style.opacity = "1";
            button.style.visibility = "visible";
        } else{
            button.style.opacity = "0";
            button.style.visibility = "hidden";
        }
    }

    console.log("Checkpoint 1 gorillaBtn", display.value);

}

function renderImage(){
    console.log("image rendered");
    const calculatorDiv = document.getElementById("calculator");
    const gorillaImg = document.getElementById("gorillaImg");

    gorillaImg.style.display = "block";
    calculatorDiv.style.visibility = "collapse";

}

function renderCalculator(){
    console.log("calculator rendered");
    const calculatorDiv = document.getElementById("calculator");
    const gorillaImg = document.getElementById("gorillaImg");

    gorillaImg.style.display = "none";
    calculatorDiv.style.visibility = "visible";
}
