const planets = ["planet-jupiter", "planet-mercury", "planet-neptune", "planet-saturn", "planet-venus"];
const planet = document.getElementById("planet");
const icon = document.getElementById("icon");

window.onload = () => {
    const image = "img/" + planets[Math.floor(Math.random() * planets.length)] + ".png";

    planet.setAttribute("src", image);
    icon.setAttribute("href", image);
}

const cursor = document.getElementById("cursor");

window.onmousemove = event => {
    event.preventDefault();
    
    cursor.style.top = event.pageY + "px";
    cursor.style.left = event.pageX + "px";
}