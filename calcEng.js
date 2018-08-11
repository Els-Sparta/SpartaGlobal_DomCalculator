// function to add two numbers
function addTwoNumber(num1, num2) {
  return num1 + num2;
}
// function to minus two numbers
function minusTwoNumber(num1, num2) {
  return num1 - num2;
}
// function to multiply two numbers
function multiplyTwoNumber(num1, num2) {
  return num1 * num2;
}
// function to divde two numbers
function divideTwoNumber(num1, num2) {
  return num1 / num2;
}
//this function will complete the calculation depending on what operator is selected as the input
function operation(number_1,operator, number_2) {
switch (operator) {
  case "+":
    return addTwoNumbers(num1, num2);
    break;
  case "-" :
    return minusTwoNumber(num1, num2);
    break;
  case "*" :
    return multiplyTwoNumber(num1, num2);
    break;
  case "/" :
    return divideTwoNumber(num1, num2);
    break;
  default:
}
}
