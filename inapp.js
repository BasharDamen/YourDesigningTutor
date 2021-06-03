var firstName = "Bashar "
var lastName = 'Al-Damen'

var finalName = 'Developer:' + firstName + lastName

console.log(finalName)

alert("Hello, we are glad to see you")

/* var UserAnswer = prompt("Are you a designer?")

if (UserAnswer == "yes") {
  var UserAnswer = prompt("Share with us your portofolio link")
}
else if (UserAnswer == "no") {
  prompt("What is Your learning background?")
}
else {
  alert("take a tour in our website")

}*/

var UserInput = prompt("rate our website from 1 - 10")

while(UserInput <1 || UserInput>10 ) {
UserInput = prompt("rate our website from 1 - 10")
}

var i = prompt ("how many years of excperience to you have in designing?")
for (var x = 0 ; x < i ; x++){
document.write('<img src=s7.jpg height=100px width=200 px>')
}
console.log('Designing' + x )

document.write('<div>' + '<h4> Creativity is nothing but a mind set free<h4>' + '  -Torrie T. Asai' + '</div>')
