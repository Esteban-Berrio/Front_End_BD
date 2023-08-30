// Add an event listener to the element with the ID 'showAlertBtn-payment'
document.getElementById('showAlertBtn-payment').addEventListener('click', function() {
  // When the element is clicked, execute this function
  // This function triggers a SweetAlert2 alert
  Swal.fire({
      // The title of the alert, displayed in bold
      title: '<strong>ATENCIÓN</strong>',
      // The icon that appears next to the title
      icon: 'info',
      // The main text content of the alert
      text: 'Proximamente incluiremos nuestra pasarela de pagos ATT: ADSI-209',
      // The text on the confirmation button in the alert
      confirmButtonText: 'CONFIRMAR'
  });
});
