document.querySelector("body").style.backgroundColor = "darkorange"

// header classına sahip olan elementi querySelector() metodu ile yakalayınız. Background color, color, padding özellikleri ekleyiniz ve text hizalamasını center olarak ayarlayınız.

const header = document.querySelector("header")
header.style = "background-color: red; color: white; padding: 1rem; text-align: center; width: 80%; margin: 2rem auto; border-radius: 1rem; border-top: 10px solid black;" 

// title id sine sahip olan elementi getElementById() metodunu kullanarak yakalayınız. Ve "Javascript Dom Assignment 1" metnini textContent özelliği ile ekleyiniz.

document.getElementById("title").textContent = "Javascript Dom Assignment 1"

// nav-item classına sahip olan elementi querySelector() metodu ile yakalayınız. Flexbox(center olsun) özelliği ekleyiniz ve elementler arasına gap özelliği ile boşluk ekleyiniz. List style özelliğini kaldırınız.

const newH1 = document.querySelector(".nav-item")
newH1.style = "display: flex; justify-content: center; gap: 1rem; list-style: none;"

const navLi = document.querySelectorAll(".nav-item li")
navLi.forEach(item => item.style.color = "black")
navLi.forEach(item => item.style.fontSize = "1.5rem")
navLi.forEach(item => item.style.fontWeight = "bold")
navLi.forEach(item => item.style.paddingTop = "1.5rem")
navLi.forEach(item => item.style.cursor = "pointer")


// username ve password idsine sahip olan inputları querySelector() metodu ile yakalayınız. İnputların value attributelarını kullanarak Username inputuna "Anthony" yazınız, password inputuna "123456" yazınız. Ayrıca password inputuna yazılan değerin görülmesini sağlayın. Ve inputların disabled özelliğini aktif ediniz. (Not: html de input type=password olduğunda bildiğiniz üzere yazılan değerler saklanıyor. Bu özelliği js ile değiştirmeniz lazım.)

const username = document.querySelector("#username")
const password = document.querySelector("#password")

username.value = "Yksl"
username.disabled = "true"
username.style.fontSize = "1.2rem"

password.value = "123456"
password.type = "text"
password.disabled = "true"
password.style.fontSize = "1.2rem"


// btn classına sahip olan elementi querySelector() metodu ile yakalayınız. Background color, color, padding, border-radius özellikleri ekleyiniz. Cursor pointer olsun ve border özelliği none olsun. Ayrıca button elementinin metni "Giriş Yap" metni olsun.

const button = document.querySelector(".btn")
button.style = "background-color: red; color: white; padding: 6px; border: none; border-radius: 5px; cursor:pointer; font-size: 1.2rem;"
button.textContent = "Giriş Yap"

// projects idsine sahip olan elementi getElementById() metodunu kullanarak yakalayınız. Yakaladığınız bu element üzerinden bu elementin first childi olan h3 elementine ulaşıp metnini "Js Dom Projects" olarak değiştiriniz.

const projects = document.getElementById("projects")
projects.firstElementChild.textContent = "Js Dom Projects"

// const myProjects = ["Hello World!","Guess Number","Checkout Page","Gelir-Gider Projesi","Api Projects"]; Verilen myProjects arrayindeki elemanları bir önceki adımda yakaladığınız projects idsine sahip olan elementin last childi olan ul elementine innerHTML özelliğini kullanarak tek tek li elementleri içerisinde child olarak ekleyiniz.

const myProjects = ["Hello World!","Guess Number","Checkout Page","Gelir-Gider Projesi","Api Projects"];

projects.lastElementChild.innerHTML = `<li>${myProjects[0]}</li>
<li>${myProjects[1]}</li>
<li>${myProjects[2]}</li>
<li>${myProjects[3]}</li>
<li>${myProjects[4]}</li>`

projects.style = "margin-bottom: 10rem; font-size: 1.4rem;"
