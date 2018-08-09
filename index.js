function btn(){
  var num1 = 0;
}

var buttons = document.getElementsByClassName("buttonNum");
var operator = document.getElementsByClassName("operator")
var display = document.getElementById("screen");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", change_display);
}

function change_display(){
  display.innerHTML = this.innerHTML;
}

// for (var i = 0; i < operator.length; i++){
//   buttons[i].addEventListener("click", function(){
//     display.innerHTML += this.innerHTML;
//   })
// }

// var display = document.getElementById("screen");
//
// switch(operator){
//   case "+" :
//     break;
//   case "-" :
//     break;
//   case "*" :
//     break;
//   case "/" :
//     break;
//   default:
// }
