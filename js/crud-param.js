var apiKey = "EXaR0JoKIirohPwbRPIHc3s73Oygi0XV";
var urlParams = "http://localhost/api/public/api/params/";

function deleteParam(urlParams, id, apiKey) {
    Swal.fire({
        title: 'Estás seguro?',
        text: "Quieres desactivar este parametro?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar.',
        cancelButtonText: 'Cancelar.'
    }).then((result) => {
        if (result.isConfirmed) {
            deleteDataFromAPI(urlParams, id, apiKey)
                .then(data => {
                    if (data.type == 'error') {
                        // Si el producto ya está desactivado
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'El parametro ya está desactivado.',
                        })
                        return Promise.reject('El parametro se desactivó correctamente');
                    }
                    Swal.fire({
                        icon: 'success',
                        title: 'ELIMINADO',
                        text: 'El parametro se desactivó correctamente',
                        showConfirmButton: false,
                        timer: 1900
                    }).then(()=> {
                       location.reload();
                })
                .catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: error,
                    });
                });
            }
        )}
    })
};




$(document).ready(function () {

    var tabla = $("#tabletpr");


    function tablas() {


        if ($.fn.DataTable.isDataTable(tabla)) {
            tabla.DataTable().destroy();
        }

        tabla.DataTable({

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
            let contenido = '';
            for (let i = 0; i < data.data.length; i++) {
                contenido += `
                    
                    <tr>    
                        <td>${data.data[i].id}</td>
                        <td>${data.data[i].paramtype_id}</td>
                        <td>${data.data[i].name}</td>
                        <td>${data.data[i].param_state}</td>
                        <td>
                            <a class="btn-edit btn" href="edit-params.php?id=${data.data[i].id}" ><i class="f fa-solid fa-pen-to-square"></i></a>
                            <button class="btn-delete btn" onclick="deleteParam(urlParams, ${data.data[i].id}, apiKey)"><i class="f fa-solid fa-trash"></i></button>

                        </td>
                    </tr>`;

            }
            tabla.find('tbody').html(contenido);
            tablas();

            console.log('Ya cargué la info');

            return data;
        })
        .catch(error => {
            console.error('Error al obtener datos de la API:', error);
        });


});
