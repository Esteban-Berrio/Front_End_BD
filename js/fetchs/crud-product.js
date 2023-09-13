var apiKey = "EXaR0JoKIirohPwbRPIHc3s73Oygi0XV";
var urlProducts = "http://localhost/api/public/api/products/";
var urlParams = "http://localhost/api/public/api/params/";

let paramsData; 

$(document).ready(function () {    
    var tablam = $("#tablam");
 


    function tablas() {


        tablam.DataTable({
            language: {
                url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-CO.json',
                lengthMenu: "Mostrar _MENU_ registros por página",
                zeroRecords: "No se encontraron resultados - lo siento",
                info: "Mostrando página _PAGE_ de _PAGES_",
                infoEmpty: "No hay registros disponibles",
                infoFiltered: "(filtrados de un total de _MAX_ registros)"
            }
        });
    }


    fetchDataFromAPI(urlParams, apiKey)
    .then(data => {
        paramsData = data;

        // Luego, obtén los datos de urlProducts
        return fetchDataFromAPI(urlProducts, apiKey);
    })
    .then(data => {
        let body = '';
        for (let i = 0; i < data.data.length; i++) {
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
                        <a class="btn-edit btn" href="crud-edit-product.php?id=${data.data[i].id}"><i class="f fa-solid fa-pen-to-square"></i></a>
                        <button class="btn-delete btn" onclick="deleteProduct(urlProducts, ${data.data[i].id}, apiKey)"><i class="f fa-solid fa-trash"></i></button>
                    </td>
                </tr>`;
        }

        document.getElementById('table-body').innerHTML = body;
        tablas();

            console.log('Ya cargué la info');

            return data;
    }).catch(error => {
        console.log(error);
    });
});        
        
        



function deleteProduct(urlProducts, id, apiKey) {
    Swal.fire({
        title: 'ESTAS SEGURO',
        text: "Deseas eliminar este elemento",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            deleteDataFromAPI(urlProducts, id, apiKey)
                .then(data => {
                    if (data.type == 'error') {
                        // Si el producto ya está desactivado
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'EL producto ya ha sido ELIMINADO',
                          })
                        return Promise.reject('EL producto ya ha sido ELIMINADO');
                    }
                    Swal.fire(
                        'ATENCION',
                        'El elemento ha sido ELIMINADO',
                        'success'
                    );
                })
                .catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: error,
                    });
                });
        }
    });
}
