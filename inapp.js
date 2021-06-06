var firstName = "Bashar "
var lastName = 'Al-Damen'

var finalName = 'Developer:' + firstName + lastName

console.log(finalName)


function welcoming() {
  alert("Hello, we are glad to see you")

  var UserInput = prompt("How many years of excperience do you have in designing")


  if (UserInput <= 2) {
    alert('you are beginner')
  }

  else if (UserInput > 2 && UserInput <= 5) {
    alert('you are intermediate')
  }

  else if (UserInput > 5) {
    alert("you are profissional")
  }
  else {
    UserInput = prompt('only use numbers')
  }

}

function imgprinting() {
  var UserInput2 = prompt('how many photo of ps do you want to see')

  while (UserInput2 < 0) {

    UserInput2 = prompt('how many photo of ps do you want to see')

  }
  for (i = 0; i < UserInput2; i++) {
    document.write('<img src="Adobe-Photoshop-2020-Logos-1280x720.jpg" width= 150px: height=100px/>' + UserInput2)
  }


}
welcoming();
imgprinting();




