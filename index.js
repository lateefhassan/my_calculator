const result = document.getElementById("inputext");


let calculate = (number) =>{
  result.value = result.value + number

  window.addEventListener("keyup", (e) => {
  if(e.key ===  number){
    result.value = result.value + number
 
  }

})
  
}


let Result = () =>{
 if(result.value){
      try{
        result.value = eval(result.value)
      }
      catch(err){
        result.value = "Syntax Error";
      }
 }
 else if(!result.value){
      result.value = "Syntax Error";
 }

 else if(result.value === undefined){
    result.value = "Syntax Error";
    return true
     }
 else{
         result.value = eval(result.value)
 }
}



function clr(){
  result.value = " "
}

window.addEventListener("keyup", (e) => {
  if(e.key === "Enter"){
    result.value = eval(result.value)
 
  }
  console.log(e);
})

function del(){
 result.value = result.value.toString().slice(0, -1)
}


window.addEventListener("keydown", (e) => {
  if(e.key === "Backspace"){
    result.value = result.value.toString().slice(0, -1)
 
  }

})














