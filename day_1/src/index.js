import {add,sub} from "../src/calc"
import ("./index.css")

console.log(add(5,5))
console.log(sub(15,10))

var notesdata= JSON.parse(localStorage.getItem("notesdata")) || []
 




const maindiv= document.createElement("div")
maindiv.classList.add("md1")

const logo= document.createElement("img")
logo.src="https://www.masaischool.com/img/navbar/logo.svg"

const logotitle=document.createElement("h1")
logotitle.innerText="Masai Notes section"

const logodiv=document.createElement("div")
logodiv.classList.add("logdiv")

logodiv.append(logo,logotitle)

const input =document.createElement("input")
input.classList.add("text11")

var btn= document.createElement("button")
btn.innerText="Submit"
btn.classList.add("subbtn")

maindiv.append(logodiv,input ,btn)

document.getElementById("text1").appendChild(maindiv)


const disp= document.getElementById("displaynotes")

btn.addEventListener("click",()=>{
  var dis= input.value
//   console.log(dis)
var txtdiv= document.createElement("div")
txtdiv.classList.add("txt12")
var value= document.createElement("h6")
value.innerText=dis

txtdiv.append(value)
disp.appendChild(txtdiv)

var notes={
  "notesarr":dis
}
notesdata.push(notes)
console.log(notesdata)

localStorage.setItem("notes1",JSON.stringify(notesdata))
alert("Notes are saved")



})  


window.addEventListener("load",function(){
  JSON.parse(localStorage.getItem("notesdata"))

})





