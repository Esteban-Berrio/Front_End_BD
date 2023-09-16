$(document).ready(function () {
    var apiKey = "EXaR0JoKIirohPwbRPIHc3s73Oygi0XV";
    var apiUrl = "http://localhost/api/public/api/orders";
    var tabla = $("#tablao");
    var usera = document.getElementById("miid");
    var userIda = usera.value; // Obtener el valor del input oculto
    var userId = parseInt(userIda);

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

    fetchDataFromAPI(apiUrl, apiKey)
        .then(data => {
            let contenido = '';
            for (let i = 0; i < data.data.length; i++) {
                if (data.data[i].user_id === userId) {
                    // Filtrar solo las compras del usuario actual
                    contenido += `
                    <tr>    
                        <td>${data.data[i].date}</td>
                        <td>${data.data[i].code}</td>
                        <td>${data.data[i].param_paymethod}</td>
                        <td>${data.data[i].total}</td>
                        <td>
                            <a class="btn btn-view-shop" href="my_order.php?id=${data.data[i].id}"><i class="f fa-solid fa-eye fa-md"></i></a>
                        </td>
                    </tr>`;
                }
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
