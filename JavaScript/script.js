/*let selector1 = document.querySelector("#first-name")
console.log(selector1)
selector1.innerHTML.placeholder = "kemal"

let firstName=document.querySelector("#first-name")
console.log(firstName)



let input = document.getElementsByTagName("input")
console.log(input)

const val = firstName.innerText 
console.log(val)


let firstName = document.querySelectorAll(".form-control")[0]
firstName.setAttribute("id", "first-name")
console.log(firstName)
let eke = document.getElementById("first-name")
console.log(eke)

const lastNameAttribute = firstName.getAttribute("class")
console.log(lastNameAttribute)

firstName.className = "fatih"
console.log(firstName)
firstName.classList.add("FATIHx")
console.log(firstName)

let asa = document.getElementById("FATIHx")
console.log(asa)

firstName.classList.remove("FATIH")
console.log(firstName)
*/

let newDiv = document.createElement("div")
newDiv.setAttribute("class", "col-md-12")
let newInput = document.createElement("input")
newInput.setAttribute("type", "text")
newInput.setAttribute("name", "name")
newInput.setAttribute("placeholder", "ad soyad")
newInput.setAttribute("class", "form-control")

newDiv.appendChild(newInput)
console.log(newDiv)

let first3 = document.querySelector("#first-three")
first3.appendChild(newDiv)
console.log(first3)