// console.log("Hello JS")
const display = document.getElementById("display")

// console.log(display.value)
// display.value = 55

const buttons = document.querySelectorAll(".buttons button")
// console.log(buttons.length)

function press(value){
    if(value === 'C'){
        display.value = '' 
    }else if(value === 'DEL'){
        display.value = display.value.slice(0,-1)
    }
    else if(value === '='){
        display.value = eval(display.value)
    }
    
    else{
        display.value = display.value + value
    }
    
}
function calculate(){
    const answer= eval(display.value)
    display.value = answer
}

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        press(buttons[i].textContent)
    })  
}

// console.log(buttons[4].textContent)