// Set a variable to retrieve information to perform the calculation
var num1, operator, num2 = "";
// Set variables for other available buttons
var buttons = document.getElementsByClassName("buttonNum");
var operators = document.getElementsByClassName("operator")
var display = document.getElementById("screen");
var equals = document.getElementById("equals");
var clear = document.getElementById("clear");
//loop through all buttons with the 'buttons' class and then add an event listenr to each one
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", change_display);
}
//function which will change the display to current number pressed. The first 'if' statement will replace 'Sparta Calculator' with the first number 'num1'
function change_display(){
  if (display.innerHTML == ("Sparta Calculator" || "0")) {
      //This statement replaces the current information in display to the button I clicked using 'this is'.
    return display.innerHTML = this.innerHTML;
  }
  //if 'Sparta Calculator' is't the current information on screen, it will add the next button clicked to the current information on display
  else{
    return display.innerHTML += this.innerHTML;
  }
}
//next step is to retrieve information on the operator which will be attached to the variable operator.
//
//This for loop, will loop thorugh all the avaibale operators and add an event listener to each one
for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function(){
    //once an operator is pressed, it is only here the value on the screen is defined as num1
    num1 = display.innerHTML;
    //operator is set as button presed
    operator =  this.innerHTML;
    //clear the current display to 0 so that you can capturn the next number
    display.innerHTML = "0"
  })
}
//This will retrieve the number for num2 when the equals button is pressed
equals.addEventListener("click", function(){
  //the value on display is set to num2
  num2 = display.innerHTML;
  var result = operation(parseFloat(num1), operator, parseFloat(num2));
  display.innerHTML = result;
})
//If the clear button is clicked, it will trigger this fucntion
clear.addEventListener("click", function(){
  //this clears any value assigned to the variables for num1, num2 and operator
  num1, num2, operator = "";
  //this resets the display back to the initial screen of "Sparta Calculator"
  display.innerHTML = "Sparta Calculator";
})
