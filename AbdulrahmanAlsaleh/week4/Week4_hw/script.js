
var number = 10 ;
var value = " ";

if(number % 3 == 0){
    value += "pling";
}
if(number % 5 == 0){
    value += "plang";
}
if(number % 7 == 0){
    value += "plong"
}

if(value == " "){
    value +=number;
}

console.log(value);
document.write(`The number ${number} `)
document.write(`<p> ${value} <p>`)

