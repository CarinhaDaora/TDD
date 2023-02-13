function sum(num1,num2) {
    if (isNaN(num1) || isNaN(num2)); 
    return num1 + num2
}
function sub(num1,num2) {
    if (isNaN(num1) || isNaN(num2));
    return num1 - num2
}
function div(num1,num2) {
    if (isNaN(num1) || isNaN(num2));
    return num1 / num2
}
function pot(num1,num2) {
    if (isNaN(num1) || isNaN(num2));
    return num1 ** num2
}

module.exports = {
    sum,
    sub,
    div,
    pot
 
}