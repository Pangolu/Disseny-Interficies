function generarColor() {
    let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.ceil(Math.random() * 14)];
        console.log(color);
    }

    return color;
}
function afegirEventsCanviColor(contenedor, tipusEvent) {
    contenedor.addEventListener(tipusEvent, () => {
        console.log("Adeu!");
        contenedor.style.background = generarColor();
    });
}

function eventMoureContenedor(contenedor, tipusEvent){
    contenedor.addEventListener(tipusEvent, ()=>{
        
    });
}
function inici() {
    const contenedor = document.querySelector("#moure");
    afegirEventsCanviColor(contenedor, 'dblclick');
    afegirEventsCanviColor(contenedor, 'mousedown');
    afegirEventsCanviColor(contenedor, 'mouseup');
}



document.addEventListener("DOMContentLoaded", inici);