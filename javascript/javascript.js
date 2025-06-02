const container = document.querySelector('#container');
const content = document.createElement("p");
content.style.color = "red";
content.textContent = "Hey I'm red!";
container.appendChild(content);

const heading = document.createElement("h3");
heading.style.color = "blue";
heading.textContent = "I'm a blue h3!";
container.appendChild(heading);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e) {
    e.target.style.background = "blue";
}) 