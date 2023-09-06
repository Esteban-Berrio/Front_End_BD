// Agregar un escuchador de clic a todos los botones de compra con la clase "boton-compra"
var botonesCompra = document.querySelectorAll(".boton-compra");

botonesCompra.forEach(function (botonCompra) {
  botonCompra.addEventListener("click", function (event) {
    event.stopPropagation(); // Evitar que el clic en el botón propague al contenedor de la tarjeta

    if (botonCompra.classList.contains("carrito-in")) {
      // Si el botón ya tiene la clase "carrito-in", entonces la eliminamos y restauramos "ms-autos"
      botonCompra.classList.remove("carrito-in");
      botonCompra.classList.add("ms-autos");
    } else {
      // Si el botón no tiene la clase "carrito-in", entonces la agregamos y eliminamos "ms-autos"
      botonCompra.classList.remove("ms-autos");
      botonCompra.classList.add("carrito-in");
    }
  });
});