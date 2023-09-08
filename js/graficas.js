
$(document).ready(function () {

    const graficaline = document.getElementById('graficaline');
    const graficabar = document.getElementById('graficabar');
    const botonCambiar = document.getElementById('botonCambiar');

    const datosGrafiline = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre'
            , 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
            label: 'grafica linea',
            data: [12, 50, 33, 51, 29, 100, 30, 85, 90, 10, 11, 12],
            backgroundColor: 'rgb(255,181,82)',
            borderColor: 'rgb(255,181,82)',
            borderWidth: 1,
        }]
    };

    const datosGraficabar = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre'
            , 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
            label: 'grafica barra',
            data: [12, 50, 33, 51, 29, 100, 30, 85, 90, 10, 11, 12],
            backgroundColor: 'rgb(255,181,82)',
            borderWidth: 1,
        }]
    };

    const opciones = {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    };

    const myChart = new Chart(graficaline, {
        type: 'line',
        data: datosGrafiline,
        options: opciones
    });

    const grafica2 = new Chart(graficabar, {
        type: 'bar',
        data: datosGraficabar,
        options: opciones
    });

    botonCambiar.addEventListener('click', () => {
        graficaline.style.display = graficaline.style.display === 'none' ? 'block' : 'none';
        graficabar.style.display = graficabar.style.display === 'none' ? 'block' : 'none';
    });

});