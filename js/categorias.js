var apiKey = "EXaR0JoKIirohPwbRPIHc3s73Oygi0XV";
var urlProducts = "http://localhost/api/public/api/products/";
var urlProvider = "http://localhost/api/public/api/providers"

var arreglos = '';




fetchDataFromAPI(urlProvider, apiKey)
    .then(providersData => {
        // Luego, obtén los datos de urlProducts
        return fetchDataFromAPI(urlProducts, apiKey)
            .then(data => {
                console.log(data);
                var productList = document.getElementById('product-list');

                for (let i = 0; i < data.data.length; i++) {
                    if (data.data[i].param_state == "Activo ") {
                        let price = data.data[i].price;
                        let discount = data.data[i].discount;

                        if (discount != 0 && discount !== "0") {

                            let discountPercentage = discount / 100;


                            price = price - (price * discountPercentage);
                        }

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
                                            <p class="precio-antes" ${data.data[i].discount == 0 || data.data[i].discount == "0" ? "display:none" : ""}  >$ ${data.data[i].price}</p>
                                            <p class="descuento" ${data.data[i].discount == 0 || data.data[i].discount == "0" ? "display:none" : ""}  >DESCUENTO ${data.data[i].discount} %</p>
                                            <p class="card-text d-flex justify-content-between precio-actual">
                                            Precio: $${price.toFixed(2)}
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





                const filterInput = document.getElementById('barra-de-busqueda');


                // Agrega un evento de escucha para detectar cambios en el campo de entrada
                filterInput.addEventListener('input', function () {
                    // Obtiene el valor actual del campo de entrada (texto ingresado por el usuario)
                    const searchTerm = filterInput.value.toLowerCase();

                    // Recorre todos los elementos de la lista de productos
                    const productItems = productList.querySelectorAll('li');

                    productItems.forEach(function (productItem) {
                        // Dentro de cada elemento de producto, busca el título del producto (por ejemplo, el nombre)
                        const productName = productItem.querySelector('.card-title').textContent.toLowerCase();

                        // Comprueba si el nombre del producto incluye el término de búsqueda
                        if (productName.includes(searchTerm)) {
                            // Si coincide, muestra el elemento de producto
                            productItem.style.display = 'block';
                        } else {
                            // Si no coincide, oculta el elemento de producto
                            productItem.style.display = 'none';
                        }
                    });
                });









                console.log('Ya cargué la info');
            })
            .catch(error => {
                console.log(error);
            });

        // Obtener una referencia a los elementos HTML relevantes
        const searchButton = document.getElementById('.filtradosheck');
        const categoryCheckboxes = document.querySelectorAll('.categoria-checkbox');
        const sizeCheckboxes = document.querySelectorAll('.talla-checkbox');
        const colorCheckboxes = document.querySelectorAll('.color-checkbox');



        // Agregar un evento de clic al botón "BUSCAR"
        searchButton.addEventListener('click', function () {
            // Crear listas para almacenar las categorías, tallas y colores seleccionados
            const selectedCategories = [];
            const selectedSizes = [];
            const selectedColors = [];

            // Recorrer los checkboxes de categorías y agregar los seleccionados a la lista
            categoryCheckboxes.forEach(function (checkbox) {
                if (checkbox.checked) {
                    selectedCategories.push(checkbox.value);
                }
            });

            // Recorrer los checkboxes de tallas y agregar los seleccionados a la lista
            sizeCheckboxes.forEach(function (checkbox) {
                if (checkbox.checked) {
                    selectedSizes.push(checkbox.value);
                }
            });

            // Recorrer los checkboxes de colores y agregar los seleccionados a la lista
            colorCheckboxes.forEach(function (checkbox) {
                if (checkbox.checked) {
                    selectedColors.push(checkbox.value);
                }
            });

            // Llamar a una función para filtrar los productos
            filterProducts(selectedCategories, selectedSizes, selectedColors);
        });

        // Función para filtrar los productos
        function filterProducts(categories, sizes, colors) {
            // Obtener todos los elementos de la lista de productos
            const productItems = productList.querySelectorAll('li');

            // Recorrer los elementos de la lista de productos
            productItems.forEach(function (productItem) {
                // Obtener las categorías, tallas y colores del producto actual
                const productCategories = productItem.dataset.categories.split(',');
                const productSizes = productItem.dataset.sizes.split(',');
                const productColors = productItem.dataset.colors.split(',');

                // Verificar si el producto coincide con las selecciones de categorías, tallas y colores
                const categoryMatch = categories.every(category => productCategories.includes(category));
                const sizeMatch = sizes.every(size => productSizes.includes(size));
                const colorMatch = colors.some(color => productColors.includes(color));

                // Mostrar u ocultar el producto según las coincidencias
                if (categoryMatch && sizeMatch && colorMatch) {
                    productItem.style.display = 'block';
                } else {
                    productItem.style.display = 'none';
                }
            });
        }


    });




