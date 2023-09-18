var apiKey = "EXaR0JoKIirohPwbRPIHc3s73Oygi0XV";
var urlProvider = "http://localhost/api/public/api/providers/"

// Función para eliminar un producto
function deleteProvider(urlProvider, id, apiKey) {
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
            deleteDataFromAPI(urlProvider, id, apiKey)
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
            fetchDataFromAPI(urlProvider, apiKey)
                .then(data => {
                    
                    let body = '';
                    for (let i = 0; i < data.data.length; i++) {
                        
                        body += `
                            <tr>    
                                <td>${data.data[i].id}</td>
                                <td>${data.data[i].legal_name}</td>
                                <td>${data.data[i].commercial_name}</td>
                                <td>${data.data[i].email}</td>
                                <td>${data.data[i].phone}</td>
                                <td>${data.data[i].address}</td>
                                <td>${data.data[i].param_city}</td>
                                <td>${data.data[i].name_contact}</td>
                                <td>${data.data[i].param_bank}</td>
                                <td>${data.data[i].param_account}</td>
                                <td>${data.data[i].account}</td>
                                <td>${data.data[i].param_state}</td>
                                <td>
                                    <button class="btn-view btn"><i class="f fa-solid fa-eye"></i></button>
                                    <a class="btn-edit btn" href="edit-provider.php?id=${data.data[i].id}"><i class="f fa-solid fa-pen-to-square"></i></a>
                                    <button class="btn-delete btn" onclick="deleteProvider(urlProvider, ${data.data[i].id}, apiKey)"><i class="f fa-solid fa-trash"></i></button>
                                </td>
                            </tr>`;
                        
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
