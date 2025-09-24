const demo = document.getElementById("demo")
const container= document.getElementById("container")

const newh1 = document.createElement("h1")
const newh2 = document.createElement("h2")
const newh3 = document.createElement("h3")

newh1.textContent="this is new h1 element is created"
newh2.textContent="this is new h2 element is created"
newh3.textContent="this is new h3 element is created"
console.log(newh1)

container.append(newh1, newh2);
container.prepend(newh3)
 // selective part remove
 newh1.remove()

demo.textContent="hello world textContent"
demo.style.color="blue"
demo.style.backgroundColor="red"

