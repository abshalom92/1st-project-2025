   
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
    //4. creating a backend service so that the UI is a very thin client. 
        // no logic running on the main page, server houses all the JS
        //will help me understand server/client communication.

    const display = document.getElementById("calculator-screen");

function appendToDisplay(input){
    display.value = display.value === "0" && input === "0" ? "0" : display.value + input;
    console.log();
    triggerBtnEffects();
    //will need to add a fix for handling duplicate periods in the number, duplicate sequential operators
    //create a message for syntax error
}

function toggleNegativeVal(){
    display.value *= -1;
    triggerBtnEffects();
}

function backSpaceBtn(){
    let word = `${display.value}`
    display.value = word.slice(0,word.length-1);
    triggerBtnEffects();
}


function calculate(input){
    try{
        display.value = eval(display.value);
    }

    catch{
    display.value ="error";    
    }
    triggerBtnEEffects();
}

function clearCalcDisplay(){
    display.value = "";
    triggerBtnEffects();
}

function triggerBtnEffects(){
    
    const myButtons = document.getElementsByClassName("hiddenBtn");
    console.log("checkpoint outside", myButtons);
    const disp = display.value;
    
    
    for(const button of myButtons){ 
        console.log("checkpoint inside", button)
        if (disp === "80085" || disp ==="8008135" || disp ==="69" || disp ==="420" || disp ==="69420" || disp ==="80087355" || disp ==="55378008" || disp ==="58008"){
            console.log("checkpoint triggered")
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
    console.log("image rendered, calculator collapsed");
    const calculatorDiv = document.getElementById("calculator");
    const gorillaImg = document.getElementById("gorillaImg");
    const exitButton = document.getElementById("exit-button");

    gorillaImg.style.display = "block";
    calculatorDiv.style.visibility = "collapse";

    setTimeout(() => {
    exitButton.classList.add("show");
    }, 1000);
}

function renderCalculator(){
    console.log("image exited & calculator rendered");
    const calculatorDiv = document.getElementById("calculator");
    const gorillaImg = document.getElementById("gorillaImg");
    const exitButton = document.getElementById("exit-button")
    
    gorillaImg.style.display = "none";
    calculatorDiv.style.visibility = "visible";
    exitButton.classList.remove("show");
}
