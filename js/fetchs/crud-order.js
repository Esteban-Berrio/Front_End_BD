$(document).ready(function () {
    var apiKey = "EXaR0JoKIirohPwbRPIHc3s73Oygi0XV";
    var apiUrl = "http://localhost/api/public/api/users";
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


    fetchDataFromAPI(apiUrl, apiKey)
        .then(data => {
            let contenido = '';
            for (let i = 0; i < data.data.length; i++) {
                contenido += `
                    <tr>    
                        <td>${data.data[i].id}</td>
                        <td>${data.data[i].user_id}</td>
                        <td>${data.data[i].code}</td>
                        <td>${data.data[i].date}</td>
                        <td>${data.data[i].total}</td>
                        <td>${data.data[i].param_paymenthod}</td>
                        <td>${data.data[i].param_status}</td>
                        <td>${data.data[i].param_state}</td>

                        <td>
                            <button class="btn-view btn"><i class="f fa-solid fa-eye"></i></button>
                            <a class="btn-edit btn" href="edit-user-master.php?id=${data.data[i].id}" ><i class="f fa-solid fa-pen-to-square"></i></a>
                            <button class="btn-delete btn"><i class="f fa-solid fa-trash"></i></button>
                        </td>
                    </tr>`;
            }
            tablam.find('tbody').html(contenido);
            tablas();

            console.log('Ya cargué la info');

            return data;
        })
        .catch(error => {
            console.error('Error al obtener datos de la API:', error);
        });

    function fetchDataFromAPI(apiUrl, apiKey) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: apiUrl,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                },
                success: data => {
                    resolve(data);
                },
                error: error => {
                    reject(error);
                },
            });
        });
    }
});
