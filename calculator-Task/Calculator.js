//select the input
let input=document.querySelector("input") 

//add the value 
function adding(add){
    input.value+=add
}

//clear the value 
function clearing(){
    input.value = ""
} 
//delete the value 
function deleting(){
    input.value=input.value.slice(0,input.value.length-1)
}

//fianl the value 
function final(){
    input.value=eval(input.value)
}