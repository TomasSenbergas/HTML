// Change innerHTML using ID
const titleChange = () => {
document.querySelector("#action-movies-title").innerHTML = "Updated Action Movies";}

// Change textContent using class
const classChangeTextContext = () => {
document.querySelector(".movie-item1").textContent = "NEW MOVIE";
for(let item of document.querySelectorAll(".movie-item1")) {
    item.textContent = "NEW MOVIE";}
}

// Change innerHTML using tag
const tagChange = () => {
document.querySelector("h1").innerHTML = "Updated First Heading";}

// Change innerHTML of a specific movie item using class
const multipleClassChange = () => {
document.querySelector(".movie-item").innerHTML = "Updated Movie Item";}

// Change textContent of a specific list item using tag
const multipleTagChange = () => {
document.querySelector("li").textContent = "Updated First List Item";}