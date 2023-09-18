var apiKey = "EXaR0JoKIirohPwbRPIHc3s73Oygi0XV";
var urlProducts = "http://localhost/api/public/api/products/";
var urlProvider = "http://localhost/api/public/api/providers"

var arreglos='';




                fetchDataFromAPI(urlProvider, apiKey)
                .then(providersData => {
                    // Luego, obtén los datos de urlProducts
                    return fetchDataFromAPI(urlProducts, apiKey)
                        .then(data => {
                            arreglos=data;
                            var productList = document.getElementById('product-list');
                            
                            for (let i = 0; i < data.data.length; i++) {
                                if (data.data[i].param_state == "Activo ") {
                                    var listItem = document.createElement('li');
                                    listItem.innerHTML = `
                                    
                                    <div class="col-md-4 mb-4 card">
                                        <a href="#" class="">
                                            <img src="${data.data[i].images}" class="card-img-top" alt="${data.data[i].name}">
                                        </a>
                                        <div class="card-body">
                                            <input type="hidden" class="id-product-cart" value="${data.data[i].id}">
                                            <input type="hidden" class="stock-cart" value="${data.data[i].stock}">
                                            <input type="hidden" class="discont-cart" value="${data.data[i].discount}">
                                            <input type="hidden" class="param-size-cart" value="${data.data[i].param_size}">
                                            <input type="hidden" class="param-gender-cart" value="${data.data[i].param_gender}">
                                            <input type="hidden" class="param-subcategory-cart" value="${data.data[i].param_subcategory}">
                                            <input type="hidden" class="param-mark-cart" value="${data.data[i].param_mark}">
                                            <input type="hidden" class="param-color-cart" value="${data.data[i].param_color}">
                                            <input type="hidden" class="param-state-cart" value="${data.data[i].param_state}">
                                            <input type="hidden" class="price" value="${data.data[i].price}">
                                            <input type="hidden" class="discount" value="${data.data[i].discount}">
                                            <h3 class="card-title">${data.data[i].name}</h3>
                                            <p class="precio-antes">$ ${data.data[i].price}</p>
                                            <p class="descuento">DESCUENTO ${data.data[i].discount}%</p>
                                            <p class="card-text d-flex justify-content-between precio-actual">Precio: $${(data.data[i].price)}
                                                <button class="ms-autos img-fluid btn-pro-cat boton-compra"></button>
                                            </p>
                                        </div>
                                    </div>
                                `;
                                    productList.appendChild(listItem);



                                } else {
                                    console.log(data.data[i].param_state);
                                }
                            } 
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
    
                            console.log('Ya cargué la info');
                        })
                        .catch(error => {
                            console.log(error);
                        });
                });


