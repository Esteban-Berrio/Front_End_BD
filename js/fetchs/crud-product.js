apiKey = "EXaR0JoKIirohPwbRPIHc3s73Oygi0XV";
var urlProducts = "http://localhost/api/public/api/products/";
var urlParams = "http://localhost/api/public/api/params/";

// Primero, obtén los datos de urlParams
let paramsData;
fetchDataFromAPI(urlParams, apiKey)
    .then(data => {
        paramsData = data; // Almacena los datos de urlParams en una variable

    })
    .then(() => {
        // Después, obtén los datos de urlProducts
        return fetchDataFromAPI(urlProducts, apiKey);
    })
    .then(data => {
        console.log(data);
        let body = '';
        for (let i = 0; i < data.data.length; i++) {
            // Busca el nombre del parámetro por su ID en paramsData
            const paramSize = paramsData.data.find(param => param.id === data.data[i].param_size);
            const paramMarca = paramsData.data.find(param => param.id === data.data[i].param_mark);
            const paramGenero = paramsData.data.find(param => param.id === data.data[i].param_gender);
            const paramColor = paramsData.data.find(param => param.id === data.data[i].param_color);

            body += `
                <tr>    
                    <td id="id-crud-product">${data.data[i].id}</td>
                    <td id="nombre-crud-product">${data.data[i].name}</td>
                    <td id="proveedor-crud-product">${data.data[i].provider_id}</td>
                    <td id="referencia-crud-product">${data.data[i].reference}</td>
                    <td id="precio-crud-product">${data.data[i].price}</td>
                    <td id="descuento-crud-product">${data.data[i].discount}</td>
                    <td id="talla-crud-product">
                        <option value="">${paramSize ? paramSize.name : ''}</option>
                    </td>
                    <td id="marca-crud-product">
                    <option value="">${paramMarca ? paramMarca.name : ''}</option>
                    </td>
                    <td id="genero-crud-product">
                        <option value="">${paramGenero ? paramGenero.name : ''}</option>
                    </td>
                    <td id="color-crud-product">
                        <option value="">${paramColor ? paramColor.name : ''}</option>
                    </td>

                    <td>

                        <button class="btn-view btn"><i class="f fa-solid fa-eye"></i></button>
                        <a class="btn-edit btn" href="crud-edit-product.php" ><i class="f fa-solid fa-pen-to-square"></i></a>
                        <button class="btn-delete btn"><i class="f fa-solid fa-trash"></i></button>
                        
                    </td>
                </tr>`;
        }

        // Ahora puedes agregar el contenido generado a tu tabla
        document.getElementById('table-body').innerHTML = body;
    });