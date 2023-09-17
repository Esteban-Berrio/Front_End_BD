// Function for GET request 
async function fetchDataFromAPI(url, apiKey, id  ) {
    let Url = url + '?key=' + apiKey;

    if (id) {
        Url = url + id + '?key=' + apiKey;
    }

    const response = await fetch(Url);

    if (!response.ok) {
        const message = 'Error al traer los datos de API';
        throw new Error(message);
    }

    const data = await response.json();

    return data;
}



// Function for POST request
function sendDataToAPI(url, apiKey, data) {
    return fetch(url + '?key=' + apiKey, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .catch((error) => {
        console.error('Error:', error);
        throw error; // Propagar el error para manejarlo en el código de llamada
    });
}


// Function to UPDATE request
function updateDataToAPI(url, id, apiKey, data) {
    

    return fetch(url + id + '?key=' + apiKey, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        console.log("Imagen actualizada exitosamente:", data);
        // Puedes realizar cualquier acción adicional aquí después de actualizar la imagen
    })
    .catch((error) => {
        console.error('Error:', error);
        return Promise.reject(error); // Devuelve una promesa rechazada en caso de error
    });
}


//  Function for DELETE request
function deleteDataFromAPI(url, id, apiKey ) {

    return fetch(url + id + '?key=' + apiKey, {
        method: 'DELETE',
    })
    
    .then(response => {
        if (!response.ok) {
            throw new Error('La solicitud DELETE no se completó con éxito.');
        }
        return response.json();
    })
    // .then(data => {
    //     console.log(data);
    //     return data;
    // })
    // .catch(error => {
    //     console.error('Error al eliminar datos:', error);
    //     throw error;
    // });
}

    /* try {
        const response = await fetch(url + '?key=' + apiKey, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        const responseData = await response.json();
        console.log('Data sent successfully:', responseData);
        return responseData;
    } catch (error) {
        console.error('Error al enviar datos:', error);
        throw error;
    } */


// POST request example
// sendDataToAPI('http://black-diamond.com.co/back-end/public/api/', apiKey, newData);

// GET request example
// fetchDataFromAPI('http://black-diamond.com.co/back-end/public/api/', apiKey);
