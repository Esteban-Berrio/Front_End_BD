
$(document).ready(function() {
    $('#table-responsive').DataTable({
        language: {

            url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-CO.json',
            lengthMenu: "Mostrar _MENU_ registros por página",
            zeroRecords: "No se encontraron resultados - lo siento",
            info: "Mostrando página _PAGE_ de _PAGES_",
            infoEmpty: "No hay registros disponibles",
            infoFiltered: "(filtrados de un total de _MAX_ registros)"
        }
    });
});