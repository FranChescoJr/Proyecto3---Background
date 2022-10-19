let boton = document.getElementById("boton");
let body = document.body
let showColor = document.querySelector("showColor")

// Colores para el background
let colorIndex = ["aqua", "aquamarine", "beige", "black", "blue", "brown", "crimson", "fuchsia", "gold", "grey", "green", "indigo", "khaki", "lime", "magenta", "orange", "pink", "purple", "red", "salmon", "silver", "turquoise", "violet", "white", "yellow"]

body.style.backgroundColor = colorIndex[2];

boton.addEventListener("click",changeBackground)

// Funcion para el cambio de color con un clic
function changeBackground(){
    //random color
    let randomColor = Math.floor(Math.random() * colorIndex.length);
    
    // cambio de color en el BG
    body.style.backgroundColor = colorIndex[randomColor];

    //cambio de color en la letra
    var colorLetra = document.getElementById("showColor");
    colorLetra.style.color = colorIndex[randomColor];

    //despliegue del nombre del color
    document.getElementById("showColor").innerHTML = "  " + colorIndex[randomColor];    
}



