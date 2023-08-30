// Function for GET request 
function fetchDataFromAPI(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Here you can do anything with the data 
            console.log(data); // For now is showing the data in the console
        })
        .catch(error => {
            // Here shows and error when fetching fails.
            console.error('Error fetching data ', error);
        });
}


// Function for POST request
function sendDataToAPI(url, data) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(responseData => {

            // Here you can do anything with the response data, for example, show it in the console
            console.log('Data sent successfully:', responseData);
        })
        .catch(error => {
            // Here shows and error when fetching fails.
            console.error('Error sending data:', error);
        });
}

// Data that will be sent in an example:
// const newData = {
//     nombre: 'Ejemplo',
//     edad: 25
// };




// POST request example
// sendDataToAPI('http://black-diamond.com.co/back-end/public/api/', newData);

// GET request example
// fetchDataFromAPI('http://black-diamond.com.co/back-end/public/api/');
