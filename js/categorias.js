document.getElementById('b-compra').addEventListener("click", function() {

    
    var botonCompra = document.getElementById("b-compra");
    
    if (botonCompra.classList.contains("ocultar")) {
      // Si el botón ya tiene la clase "ocultar", entonces la eliminamos y restauramos "ms-autos"
      botonCompra.classList.remove("ocultar");
      botonCompra.classList.add("ms-autos");
    } else {
      // Si el botón no tiene la clase "ocultar", entonces la agregamos y eliminamos "ms-autos"
      botonCompra.classList.remove("ms-autos");
      botonCompra.classList.add("ocultar");
    }
  });