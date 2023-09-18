var apiKey = "EXaR0JoKIirohPwbRPIHc3s73Oygi0XV";
var urlProducts = "http://localhost/api/public/api/products/";
var urlProvider = "http://localhost/api/public/api/providers"

// Función para eliminar un producto
function deleteProduct(urlProducts, id, apiKey) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
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
                            text: 'Something went wrong!',
                        })
                        return Promise.reject('The product is already deactivated.');
                    }
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
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

    // Obtener datos de proveedores
    fetchDataFromAPI(urlProvider, apiKey)
        .then(data => {
            var providersData = data;
            console.log(providersData)
        })
        // Luego, obtén los datos de urlProducts
        .then(() => {
            fetchDataFromAPI(urlProducts, apiKey)
                .then(data => {
                    console.log(data);
                    
                    let body = '';
                    for (let i = 0; i < data.data.length; i++) {
                        if(data.data[i].param_state == "Activo "){
                        body += `
                            <tr>    
                                <td>${data.data[i].id}</td>
                                <td>${data.data[i].name}</td>
                                <td>${data.data[i].provider_id}</td>
                                <td>${data.data[i].reference}</td>
                                <td>${data.data[i].price}</td>
                                <td>${data.data[i].discount}</td>
                                <td>${data.data[i].param_size}</td>
                                <td>${data.data[i].param_mark}</td>
                                <td>${data.data[i].param_gender}</td>
                                <td>${data.data[i].param_color}</td>
                                <td>
                                    <a class="btn-view btn" href="crud-view-product.php" ><i class="f fa-solid fa-eye"></i></a>
                                    <a class="btn-edit btn" href="crud-edit-product.php?id=${data.data[i].id}"><i class="f fa-solid fa-pen-to-square"></i></a>
                                    <button class="btn-delete btn" onclick="deleteProduct(urlProducts, ${data.data[i].id}, apiKey)"><i class="f fa-solid fa-trash"></i></button>
                                </td>
                            </tr>`;
                        }
                    }

                    document.getElementById('table-body').innerHTML = body;
                    tablas();

                    console.log('Ya cargué la info');

                    return data;
                })
                .catch(error => {
                    console.log(error);
                });
        });
});
